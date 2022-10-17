import * as dotenv from 'dotenv'

import { version, expoVersion } from './package.json'

const NODE_ENV = process.env.NODE_ENV
const APP_ENV = process.env.APP_ENV
let envFile

if (APP_ENV) {
  envFile = `.env${APP_ENV ? `.${APP_ENV}` : ''}`
} else {
  envFile = `.env${NODE_ENV ? `.${NODE_ENV}` : ''}`
}

dotenv.config({
  path: envFile,
})

const restOpts = {
  updates: {
    fallbackToCacheTimeout: 0,
  },
}

if (NODE_ENV === 'production' || APP_ENV === 'production') {
  restOpts.runtimeVersion = {
    policy: 'sdkVersion',
  }

  restOpts.updates.url = ''
}

export default {
  expo: {
    name: 'Base Expo Cross App',
    slug: 'baseexpocrossapp',
    version,
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    scheme: 'baseexpocrossapp',
    assetBundlePatterns: ['**/*'],
    ios: {
      buildNumber: expoVersion.ios.toString(),
      supportsTablet: false,
      bundleIdentifier: 'com.example.baseexpocrossapp',
      splash: {
        image: './assets/images/splash.png',
        resizeMode: 'contain',
        backgroundColor: '#ffffff',
      },
    },
    android: {
      versionCode: expoVersion.android,
      adaptiveIcon: {
        foregroundImage: './assets/images/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      splash: {
        image: './assets/images/splash-android.png',
        resizeMode: 'contain',
        backgroundColor: '#ffffff',
      },
      package: 'com.example.baseexpocrossapp',
    },
    web: {
      favicon: './assets/images/favicon.png',
    },
    extra: {
      apiUrl: process.env.API_URL,
      env: process.env.ENV,
      useMixpanelAnalytics: process.env.USE_MIXPANEL_ANALYTICS,
      mixpanelToken: process.env.MIXPANEL_TOKEN,
      firebaseConfig: {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        databaseUrl: process.env.FIREBASE_DATABASE_URL,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.FIREBASE_APP_ID,
        measurementId: process.env.FIREBASE_MEASUREMENT_ID,
      },
      sentryDsn: process.env.SENTRY_DSN,
    },
    plugins: ['sentry-expo'],
    ...restOpts,
  },
}
