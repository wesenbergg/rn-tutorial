import React from "react"
import { Text, StyleSheet, View } from "react-native"
import ImageDetail from "../components/ImageDetail"
import { FlatList } from "react-native-gesture-handler"

const ImageScreen = () => {
  //'ada', 'biggy', 'cloe', 'dana', 'elsa', 'fiona', 'georgie', 'honks'
  const cats = [
    { name: 'ada', age: 21, image: 'https://bit.ly/2TZxx0n', score: 6 },
    { name: 'biggy', age: 42, image: 'https://bit.ly/2TZxx0n', score: 10 },
    { name: 'cloe', age: 22, image: 'https://bit.ly/2TZxx0n', score: 8 },
    { name: 'dana', age: 25, image: 'https://bit.ly/2TZxx0n', score: 4 },
    { name: 'elsa', age: 52, image: 'https://bit.ly/2TZxx0n', score: 10 },
    { name: 'fiona', age: 28, image: 'https://bit.ly/2TZxx0n', score: 10 },
    { name: 'georgie', age: 39, image: 'https://bit.ly/2TZxx0n', score: 7 },
    { name: 'honks', age: 66, image: 'https://bit.ly/2TZxx0n', score: 6 }
  ]

  const showItem = (item) => <ImageDetail cat={item} />

  return (
    <FlatList keyExtractor={(data) => data.name} data={cats} renderItem={({ item }) => showItem(item)} />
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    padding: 20
  }
})

export default ImageScreen
