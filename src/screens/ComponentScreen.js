import React from "react"
import { Text, StyleSheet, View } from "react-native"

const ComponentScreen = () => {
  const name = "Boriss"

  return (
    <View>
      <Text  style={styles.text}>Getting started with R-N</Text>
      <Text  style={styles.name}>My name is {name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 45
  },
  name: {
    fontSize: 25
  }
})

export default ComponentScreen;
