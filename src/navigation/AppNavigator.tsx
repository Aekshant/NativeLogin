import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'
import {useAuthStore} from '../store/authStore'

const Stack = createNativeStackNavigator()

export default function AppNavigator() {
  const user = useAuthStore((state) => state.user)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen name="Home" component={HomeScreen}/>
        ) : (
          <Stack.Screen name="Login" component={LoginScreen}/>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
