import React, { useState } from "react"
import { Text, StyleSheet, View, Image, Button } from "react-native"
import { FlatList } from "react-native-gesture-handler"

const CounterScreen = () => {
  const [colorList, setColorList] = useState([])

  const randNum = () => Math.floor(Math.random() * 180) + 55
  const randColor = () => `rgb(${randNum()}, ${randNum()}, ${randNum()})`
  const showColor = ({ color }) => (
    <View style={{ width: 100, height: 100, backgroundColor: color, marginBottom: 10}} />
  )

  return (
    <View>
      <Button style={{}} title="Add Color" onPress={() => setColorList(colorList.concat({color: randColor()}))}/>
      <Text style={styles.text} >Colors {colorList.length}</Text>
      <FlatList data={colorList} keyExtractor={(item, index) => index.toString()} renderItem={({ item }) => showColor(item)} />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    paddingTop: 20
  }
})

export default CounterScreen
