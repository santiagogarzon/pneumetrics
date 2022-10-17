import { RouteProp, useFocusEffect, useRoute } from '@react-navigation/native'
import C, { apply } from 'consistencss'

import React, { useCallback } from 'react'
import { ViewStyle, Text } from 'react-native'

import Layout from '#components/Layout'
import { logEvent } from '#helpers/analytics'
import { AuthStackParamList } from '#types'

const Login = () => {
  const { params } = useRoute<RouteProp<AuthStackParamList, 'Login'>>()

  useFocusEffect(
    useCallback(() => {
      if (params?.referral) {
        logEvent('Navigate from Referral', { referral: params.referral })
      }
    }, []),
  )

  return (
    <Layout style={apply(C.bgPurple, C.justifyCenter) as ViewStyle}>
      <Text>Login</Text>
    </Layout>
  )
}

export default Login
