import { LinkingOptions } from '@react-navigation/native'
import * as Linking from 'expo-linking'

import { RootStackParamList } from '../types'

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      App: {
        screens: {
          Home: '',
        },
      },
      Auth: {
        screens: {
          Login: 'login',
          Register: 'register',
        },
      },
      Policy: 'policy',
    },
  },
}

export default linking
