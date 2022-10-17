import { initializeApp } from 'firebase/app'
import { getDatabase, ref, onValue } from 'firebase/database'

import { Alert, Linking, Platform } from 'react-native'

import { AppVersion } from '#types'

import { logEvent } from './analytics'
import Config from './config'
import i18n from './translate'

const openStore = (newVersion: string) => {
  logEvent('Open Mobile Store from Update popup', {
    currentVersion: AppVersion,
    newVersion,
  })

  if (Platform.OS === 'android') {
    Linking.openURL('https://play.google.com/store/apps/details?id=com.leiteszeke.ultimafigurita')
  }

  if (Platform.OS === 'ios') {
    Linking.openURL('https://apps.apple.com/app/apple-store/id1642105842')
  }
}

export const getAppVersion = () => {
  if (Config.firebaseConfig.appId) {
    initializeApp(Config.firebaseConfig)

    const db = getDatabase()
    const platform = Platform.OS

    const reference = ref(db, 'appVersion')

    onValue(reference, (snapshot) => {
      const appVersion = snapshot.val()[platform]

      const parsedCurrent = Number(AppVersion.replace(/\./g, '') ?? 0)
      const parsedNew = Number(appVersion?.replace(/\./g, '') ?? 0)

      if (parsedNew > parsedCurrent) {
        Alert.alert(
          i18n.t('update.title'),
          i18n.t('update.content'),
          [
            {
              text: i18n.t('update.goToStore'),
              onPress: () => openStore(appVersion),
            },
            {
              text: i18n.t('common.cancel'),
              style: 'cancel',
            },
          ],
          { cancelable: true },
        )
      }
    })
  }
}
