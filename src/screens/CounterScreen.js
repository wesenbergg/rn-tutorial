import React, { useState } from "react"
import { Text, StyleSheet, View, Image, Button } from "react-native"

const CounterScreen = () => {
  const [count, setCount] = useState(0)
  return (
    <View>
      <Text style={styles.text} >Current count: {count}</Text>
      <Button style={{}} title="Increment" onPress={() => setCount(count+1)}/>
      <Button style={{}} title="Decrement" onPress={() => setCount(count-1)}/>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    paddingTop: 20
  },
  score: {
    fontSize: 20,
    paddingBottom: 20
  }
})

export default CounterScreen
