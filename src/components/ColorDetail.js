import React, { useState } from "react"
import { Text, StyleSheet, View, Image, Button } from "react-native"
import { FlatList } from "react-native-gesture-handler"

const CounterScreen = ({ name, inc, dec }) => {

  return (
    <View>
      <Text style={styles.text}>Red</Text>
      <Button style={{}} title={`More ${name}`} onPress={() => inc()}/>
      <Button style={{}} title={`Less ${name}`} onPress={() => dec()}/>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    paddingTop: 8,
    fontWeight: 'bold'
  }
})

export default CounterScreen
