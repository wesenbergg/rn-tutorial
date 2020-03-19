import React, { useState } from "react"
import { Text, StyleSheet, View, Image, Button } from "react-native"
import ColorDetail from '../components/ColorDetail'

const COLOR_INCREMENT = 15

const CounterScreen = () => {
  const [red, setRed] = useState(125)
  const [green, setGreen] = useState(125)
  const [blue, setBlue] = useState(125)

  const getColor = () => `rgb(${red}, ${green}, ${blue})`

  const inc = (state, fun) => state >= 245 ? fun(255): fun(state + COLOR_INCREMENT)
  const dec = (state, fun) => state <= 5 ? fun(0): fun(state - COLOR_INCREMENT)

  return (
    <View>
      <ColorDetail name={"Red"} inc={() => inc(red, setRed)} dec={() => dec(red, setRed)}/>
      <ColorDetail name={"Green"} inc={() => inc(green, setGreen)} dec={() => dec(green, setGreen)}/>
      <ColorDetail name={"Blue"} inc={() => inc(blue, setBlue)} dec={() => dec(blue, setBlue)}/>

      <Text style={styles.text}>RGB: {red + " " + green + " " + blue}</Text>
      <View style={{ width: 400, height: 100, backgroundColor: getColor() }} />
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
