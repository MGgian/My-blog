-- migration: create profiles table with auth trigger and row-level security
-- purpose: create one profile row per auth user and enforce per-user access
-- affected objects:
--   - table: public.profiles
--   - function: public.handle_new_user_profile()
--   - function: public.set_profiles_updated_at()
--   - trigger: on_auth_user_created on auth.users
--   - trigger: set_profiles_updated_at on public.profiles
-- notes:
--   - trigger function uses security definer because it is invoked from auth.users
--     and needs to insert into public.profiles reliably.

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text unique,
  full_name text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table public.profiles is 'Public-facing user profile data linked 1:1 to auth.users.';
comment on column public.profiles.id is 'Primary key matching auth.users.id.';
comment on column public.profiles.email is 'Email snapshot copied from auth.users.';
comment on column public.profiles.full_name is 'Display name for the user profile.';
comment on column public.profiles.avatar_url is 'Avatar image URL for the user profile.';
comment on column public.profiles.created_at is 'Timestamp when the profile row was created.';
comment on column public.profiles.updated_at is 'Timestamp when the profile row was last updated.';

alter table public.profiles enable row level security;

create or replace function public.set_profiles_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

drop trigger if exists set_profiles_updated_at on public.profiles;

create trigger set_profiles_updated_at
before update on public.profiles
for each row
execute function public.set_profiles_updated_at();

create or replace function public.handle_new_user_profile()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (id, email, full_name, avatar_url)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data ->> 'full_name',
    new.raw_user_meta_data ->> 'avatar_url'
  )
  on conflict (id) do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
after insert on auth.users
for each row
execute function public.handle_new_user_profile();

-- authenticated: read only own profile
create policy "authenticated_select_own_profile"
on public.profiles
for select
to authenticated
using ((select auth.uid()) = id);

-- authenticated: insert only own profile row
create policy "authenticated_insert_own_profile"
on public.profiles
for insert
to authenticated
with check ((select auth.uid()) = id);

-- authenticated: update only own profile row
create policy "authenticated_update_own_profile"
on public.profiles
for update
to authenticated
using ((select auth.uid()) = id)
with check ((select auth.uid()) = id);

-- authenticated: deleting profiles from client is not allowed
create policy "authenticated_delete_no_access"
on public.profiles
for delete
to authenticated
using (false);

-- anon: no direct profile access
create policy "anon_select_no_access"
on public.profiles
for select
to anon
using (false);

create policy "anon_insert_no_access"
on public.profiles
for insert
to anon
with check (false);

create policy "anon_update_no_access"
on public.profiles
for update
to anon
using (false)
with check (false);

create policy "anon_delete_no_access"
on public.profiles
for delete
to anon
using (false);
