import { UserWithToken } from '#types'
import { StoreApi } from 'zustand'

export type UserState = {
  user: UserWithToken | null

  setUser: (user: UserWithToken | null) => void
}

export type State = UserState

export type Set<T extends object = State> = StoreApi<T>['setState']
