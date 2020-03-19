import React, { useReducer } from "react"
import { Text, StyleSheet, View, Image, Button } from "react-native"

const reducer = (state, action) => {
  switch (action.type) {
    case 'inc':
      return { count: state.count + action.payload }
    case 'dec':
      return { count: state.count - action.payload }
    case 'zero':
      return { count: 0 }
    default:
      return state
  }
}

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0})

  return (
    <View>
      <Text style={styles.text} >Current count: {state.count}</Text>
      <Button style={{}} title="Increment" onPress={() => dispatch({ type: 'inc', payload: 1 })}/>
      <Button style={{}} title="Decrement" onPress={() => dispatch({ type: 'dec', payload: 1 })}/>
      <Button style={{}} title="Set to zero" onPress={() => dispatch({ type: 'zero'})}/>
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
