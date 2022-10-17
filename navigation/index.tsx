import { NavigationContainer, useRoute } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import React, { useRef, useState } from 'react'
import { Platform } from 'react-native'

import { logScreenView } from '#helpers/analytics'
import Policy from '#screens/Policy'
import { useAppStore } from '#store'

import { RootStackParamList } from '../types'
import AuthNavigator from './AuthNavigator'
import LinkingConfiguration from './LinkingConfiguration'
import { navigationRef } from './Navigator'
import AppNavigator from './AppNavigator'

type Options = {
  title: string
}

type Route = {
  name: string
  params?: {
    id: string
  }
}

export const parseTitle = (title: string, params?: Route['params']) => {
  if (!title) {
    return ''
  }

  if (title.includes(':id') && params) {
    return title.replace(':id', `#${params.id}`)
  }

  return title
}

export default function Navigation() {
  const routeNameRef = useRef<string>()
  const [documentTitle, setDocumentTitle] = useState<string>('')

  return (
    <NavigationContainer
      ref={navigationRef}
      documentTitle={{ formatter: () => documentTitle }}
      linking={LinkingConfiguration}
      onReady={() => {
        if (navigationRef.current) {
          const currentOptions = navigationRef.current?.getCurrentOptions() as Options
          const currentRoute = navigationRef.current?.getCurrentRoute() as Route

          routeNameRef.current = currentRoute.name

          setDocumentTitle(parseTitle(currentOptions.title, currentRoute.params))
        }
      }}
      onStateChange={async () => {
        if (navigationRef.current) {
          const currentOptions = navigationRef.current?.getCurrentOptions() as Options
          const currentRoute = navigationRef.current?.getCurrentRoute() as Route

          const previousRouteName = routeNameRef.current
          const currentRouteName = currentRoute.name

          if (currentRouteName && previousRouteName !== currentRouteName) {
            logScreenView(currentRouteName)
          }

          if (navigationRef.current) {
            navigationRef.current.screens = {
              previous: previousRouteName,
              current: currentRouteName,
            }
          }

          routeNameRef.current = currentRouteName

          setDocumentTitle(parseTitle(currentOptions.title, currentRoute.params))
        }
      }}>
      <RootNavigator />
    </NavigationContainer>
  )
}

const Stack = createNativeStackNavigator<RootStackParamList>()

function RootNavigator() {
  const { user } = useAppStore()
  let params = {}

  if (Platform.OS === 'web') {
    const urlSearchParams = new URLSearchParams(window.location.search)
    params = Object.fromEntries(urlSearchParams.entries())
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="App" component={AppNavigator} initialParams={params} />
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} initialParams={params} />
      )}
      <Stack.Screen name="Policy" component={Policy} />
    </Stack.Navigator>
  )
}
