import { initErrorReporting } from '#helpers/reporting'
import useRedirect from '#hooks/useRedirect'
import Home from '#screens/Home'
import { useAppStore } from '#store'
import { ApolloProvider } from '@apollo/client'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { newGraphQLClient } from 'client'

import React from 'react'

const Stack = createNativeStackNavigator()

const AppNavigator = () => {
  useRedirect()
  const { user } = useAppStore()
  const GraphQLClient = newGraphQLClient(user)

  if (user) {
    initErrorReporting(user)
  }

  return (
    <ApolloProvider client={GraphQLClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  )
}

export default AppNavigator
