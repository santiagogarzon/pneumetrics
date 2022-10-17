import { extend } from 'consistencss'
import * as SplashScreen from 'expo-splash-screen'

import React from 'react'
import { LogBox } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { enableFreeze, enableScreens } from 'react-native-screens'

import AnalyticsProvider from '#contexts/Analytics'
import Config from '#helpers/config'
import { getAppVersion } from '#helpers/database'
import { initSentry } from '#helpers/reporting'
import { Env } from '#types'

import useCachedResources from './hooks/useCachedResources'
import Navigation from './navigation'

enableScreens()
enableFreeze(true)
initSentry()

extend({
  sizing: {
    minimum: 1,
    double: 2,
    triple: 3,
    dozen: 10,
    third: '33%',
  },
  colors: {
    purple: '#4A0D2C',
    whiteWithOpacity: 'rgba(255, 255, 255, 0.5)',
  },
  fonts: {
    bold: 'QatarBold',
    heavy: 'QatarHeavy',
    medium: 'QatarMedium',
    ArabicBold: 'QatarArabicBold',
    ArabicHeavy: 'QatarArabicHeavy',
    ArabicMedium: 'QatarArabicMedium',
  },
})

if (Config.env === Env.Production) {
  LogBox.ignoreAllLogs()

  console.log = () => {}
  console.warn = () => {}
  console.error = () => {}
}

getAppVersion()

export default function App() {
  SplashScreen.preventAutoHideAsync()

  const isLoadingComplete = useCachedResources()

  if (!isLoadingComplete) {
    return null
  }

  return (
    <SafeAreaProvider>
      <AnalyticsProvider>
        <Navigation />
      </AnalyticsProvider>
    </SafeAreaProvider>
  )
}
