import type { UUID } from '@/types/common'

export interface AuthUserIdentity {
  id: UUID
  email?: string
}

export interface AuthUserMetadata {
  full_name?: string
  avatar_url?: string
}

export interface SignInCredentials {
  email: string
  password: string
}

export interface SignUpPayload extends SignInCredentials {
  full_name?: string
}
