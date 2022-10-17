import ExpoMixpanelAnalytics from '@bothrs/expo-mixpanel-analytics'
import { NavigationProp, NavigatorScreenParams } from '@react-navigation/native'
import { OverridedMixpanel } from 'mixpanel-browser'

import { version } from './package.json'

export type Generic<T = unknown> = Record<string, T>

export type DeviceData = {
  currentVersion: string
  deviceMeta: {
    brand: string
    OS: 'ios' | 'android' | 'web' | 'windows' | 'macos'
    modelId: string | null
    modelName: string | null
    screenHeight: number
    screenWidth: number
    windowHeight: number
    windowWidth: number
  }
}

export type MixPanel = ExpoMixpanelAnalytics | OverridedMixpanel

export enum EventKey {
  ScreenView = 'ScreenView',
  Logout = 'Logout',
  LogEvent = 'LogEvent',
}

export type LogEvent = {
  eventName: string
  eventData: Generic
}

export const AppVersion = version

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  App: NavigatorScreenParams<AppParamList> | undefined
  Auth: NavigatorScreenParams<AuthStackParamList> | undefined
  Policy: undefined
}

export type AuthStackParamList = {
  Login: {
    referral?: string
  }
  Register: {
    referral?: string
  }
}

export type AppParamList = {
  Home: undefined
}

export type AppNavigation<P extends {} = AppParamList> = NavigationProp<P>

export enum Env {
  Local = 'local',
  Dev = 'dev',
  QA = 'qa',
  Production = 'production',
}

export type User = {
  id: string
  name: string
  lastname: string
  image: string
  email: string
}

export type UserWithToken = User & {
  accessToken: string
}

export type LoginUser = Pick<User, 'email'> & {
  password: string
}
