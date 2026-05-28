export type UUID = string

export type ISODateString = string

export type Nullable<T> = T | null

export interface TimestampedEntity {
  created_at: ISODateString
  updated_at: ISODateString
}
