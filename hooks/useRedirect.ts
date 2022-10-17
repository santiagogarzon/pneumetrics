import { useNavigation } from '@react-navigation/native'

import { Platform } from 'react-native'

const RootStack = 'Root'

export const useRedirect = () => {
  const { navigate } = useNavigation<any>()

  if (Platform.OS === 'web') {
    const urlSearchParams = new URLSearchParams(window.location.search)
    const params = Object.fromEntries(urlSearchParams.entries())

    const screen = params.sc
    const stack = params.st

    if (screen) {
      const completeStack = `${stack}Stack`

      if (stack) {
        navigate(RootStack, { screen: completeStack, params: { screen } })
      } else if (screen === 'Home') {
        navigate(RootStack, { screen })
      } else {
        navigate(screen)
      }
    }
  }
}

export default useRedirect
