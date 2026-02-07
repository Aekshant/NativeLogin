import React, {useState} from 'react'
import {View, TextInput, Button} from 'react-native'

import {useAuthStore} from '../store/authStore'

export default function LoginScreen() {
  const [name, setName] = useState('')
  const login = useAuthStore((state) => state.login)

  return (
    <View style={{flex:1, justifyContent:'center', padding:20}}>
      <TextInput
        placeholder="Enter name"
        value={name}
        onChangeText={setName}
        style={{borderWidth:1, marginBottom:10, padding:10}}
      />
      <Button title="Login" onPress={() => login(name)} />
    </View>
  )
}
