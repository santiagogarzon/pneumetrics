import { NavigationContainerRef } from '@react-navigation/native'

import { createRef } from 'react'

import { Generic, RootStackParamList } from '#types'

export const navigationRef = createRef<
  NavigationContainerRef<RootStackParamList> & {
    globalParams: Generic
    screens: Generic
  }
>()
