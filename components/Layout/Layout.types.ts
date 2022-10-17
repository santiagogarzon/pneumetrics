import { PropsWithChildren } from 'react'
import { ImageSourcePropType, ViewStyle } from 'react-native'

export type LayoutProps = PropsWithChildren<{
  avoiKeyboard?: boolean
  bg?: ImageSourcePropType
  headerProps?: HeaderProps
  style?: ViewStyle
}>

export type HeaderProps = {
  title?: string
  withBack?: boolean
  rightContent?: any
}
