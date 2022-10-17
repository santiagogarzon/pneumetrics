import AsyncStorage from '@react-native-async-storage/async-storage'
import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import createVanilla from 'zustand/vanilla'

import { Platform } from 'react-native'

import { userStore } from './users'
import { Set, State } from './store.types'

const Storage = Platform.OS !== 'web' ? AsyncStorage : localStorage

const storeObject = (set: Set<State>): State => ({
  ...userStore(set),
})

export const useAppStore = create<State, [['zustand/devtools', never], ['zustand/persist', State]]>(
  devtools(
    persist(
      (set) => ({
        ...storeObject(set),
      }),
      {
        name: 'BaseExpoCrossApp',
        getStorage: () => Storage,
      },
    ),
  ),
)

export const AppStore = createVanilla<
  State,
  [['zustand/devtools', never], ['zustand/persist', State]]
>(
  devtools(
    persist(
      (set) => ({
        ...storeObject(set),
      }),
      {
        name: 'BaseExpoCrossApp',
        getStorage: () => Storage,
      },
    ),
  ),
)
