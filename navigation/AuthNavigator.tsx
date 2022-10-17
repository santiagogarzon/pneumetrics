import { ApolloProvider } from '@apollo/client'
import { useRoute } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import GraphQLClient from 'client'

import React from 'react'

import Login from '#screens/Login'
import Register from '#screens/Register'

import { AuthStackParamList } from '../types'
import useRedirect from '#hooks/useRedirect'

const AuthStack = createNativeStackNavigator<AuthStackParamList>()

function AuthNavigator() {
  const { params } = useRoute()
  useRedirect()

  return (
    <ApolloProvider client={GraphQLClient}>
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="Login"
          component={Login}
          initialParams={params}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="Register"
          component={Register}
          initialParams={params}
          options={{ headerShown: false }}
        />
      </AuthStack.Navigator>
    </ApolloProvider>
  )
}

export default AuthNavigator
