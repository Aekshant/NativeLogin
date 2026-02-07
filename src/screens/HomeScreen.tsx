import React from 'react'
import {View, Text, Button} from 'react-native'
import {useAuthStore} from '../store/authStore'

export default function HomeScreen() {
  const user = useAuthStore((state) => state.user)
  const logout = useAuthStore((state) => state.logout)

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Welcome {user} 🚀</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  )
}
