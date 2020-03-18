import React from "react"
import { Text, StyleSheet, View } from "react-native"
import { FlatList } from "react-native-gesture-handler"

const ListScreen = () => {
  //'ada', 'biggy', 'cloe', 'dana', 'elsa', 'fiona', 'georgie', 'honks'
  const persons = [
    { name: 'ada', age: 21 },
    { name: 'biggy', age: 42 },
    { name: 'cloe', age: 22 },
    { name: 'dana', age: 25 },
    { name: 'elsa', age: 52 },
    { name: 'fiona', age: 28 },
    { name: 'georgie', age: 39 },
    { name: 'honks', age: 66 }
  ]

  const showItem = ({ name, age }) => <Text style={styles.text}>Name: {name} - Age: {age}</Text>

  return (
    <FlatList keyExtractor={(item) => item.name} data={persons} renderItem={({ item }) => showItem(item)} />
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    padding: 20
  }
})

export default ListScreen
