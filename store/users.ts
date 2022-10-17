import { UserWithToken } from '#types'
import { UserState, Set } from './store.types'

export const userStore = (set: Set<UserState>): UserState => ({
  user: null,

  setUser: (user: UserWithToken | null) => set((state) => ({ ...state, user })),
})
