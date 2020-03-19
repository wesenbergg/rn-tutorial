import React, { useState } from "react"
import { Text, StyleSheet, View, Image, Button } from "react-native"
import { FlatList, TextInput } from "react-native-gesture-handler"

const InputField = () => {
  const [name, setName] = useState('')
  return (
    <View>
      <Text style={styles.text}>Type Your Name</Text>
      <TextInput
        style={styles.input} autoCapitalize="none" autoCorrect={false}
        value={name} onChangeText={(v) => setName(v)} />

      <Text style={styles.text}>{name.length < 3 ? 'Name must be atleast 3 characters': 'Hello,\n'+name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    paddingTop: 8,
    fontWeight: 'bold'
  },
  input: {
    margin: 15,
    borderBottomColor: 'grey',
    borderBottomWidth: 1
  }
})

export default InputField
