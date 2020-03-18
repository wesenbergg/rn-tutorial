import React from "react"
import { Text, StyleSheet, View, Image } from "react-native"

const ImageScreen = ({ cat }) => {
  const { image, name, age, score } = cat
  
  return (
    <View>
      <Image style={{ width: 100, height: 100 }} source={{uri: image}} />
      <Text style={styles.text}>{name + ' - ' + age}</Text>
      <Text style={styles.score}>Cat score: {score}/10</Text>
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

export default ImageScreen
