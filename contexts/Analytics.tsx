import ExpoMixpanelAnalytics from '@bothrs/expo-mixpanel-analytics'

import React, {
  createContext,
  MutableRefObject,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
} from 'react'
import { Platform } from 'react-native'
import { EventRegister } from 'react-native-event-listeners'

import { clearMixpanel, initAnalytics, mixpanelEvent } from '#helpers/analytics'
import Config from '#helpers/config'
import { AppStore } from '#store'
import { EventKey, LogEvent, MixPanel } from '#types'

type AnalyticsContextProps = {
  mixpanel: React.MutableRefObject<MixPanel>
}

export const AnalyticsContext = createContext<Partial<AnalyticsContextProps>>({})

export const AnalyticsProvider = ({ children }: PropsWithChildren<{}>) => {
  const mixpanelRef = useRef<MixPanel>()

  const init = useCallback(async () => {
    if (Config.useMixpanelAnalytics && Config.mixpanelToken) {
      const { user } = AppStore.getState()

      if (user?.id) {
        initAnalytics(user, mixpanelRef as MutableRefObject<MixPanel>)
      }
    }
  }, [])

  useEffect(() => {
    init()

    if (Platform.OS !== 'web') {
      EventRegister.addEventListener(EventKey.ScreenView, (screenName: string) => {
        mixpanelEvent(mixpanelRef as MutableRefObject<ExpoMixpanelAnalytics>, EventKey.ScreenView, {
          screenName,
        })
      })

      EventRegister.addEventListener(EventKey.LogEvent, ({ eventName, eventData }: LogEvent) => {
        mixpanelEvent(mixpanelRef as MutableRefObject<ExpoMixpanelAnalytics>, eventName, eventData)
      })

      EventRegister.addEventListener(EventKey.Logout, () => {
        clearMixpanel(mixpanelRef as MutableRefObject<ExpoMixpanelAnalytics>)
      })
    }

    return () => {
      clearMixpanel(mixpanelRef as MutableRefObject<ExpoMixpanelAnalytics>)
      EventRegister.removeAllListeners()
    }
  }, [init])

  return (
    <AnalyticsContext.Provider
      value={{
        mixpanel: mixpanelRef as MutableRefObject<ExpoMixpanelAnalytics>,
      }}>
      {children}
    </AnalyticsContext.Provider>
  )
}

export default AnalyticsProvider
