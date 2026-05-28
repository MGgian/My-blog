import type { Nullable, TimestampedEntity, UUID } from '@/types/common'

export interface Profile extends TimestampedEntity {
  id: UUID
  email: Nullable<string>
  full_name: Nullable<string>
  avatar_url: Nullable<string>
}

export interface CreateProfileInput {
  id: UUID
  email?: Nullable<string>
  full_name?: Nullable<string>
  avatar_url?: Nullable<string>
}

export interface UpdateProfileInput {
  email?: Nullable<string>
  full_name?: Nullable<string>
  avatar_url?: Nullable<string>
}
