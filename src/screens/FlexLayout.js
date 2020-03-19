import React, { useState } from "react"
import { StyleSheet, View} from "react-native"

const FlexLayout = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between' 
  },
  box1: {
    height: 100,
    width: 100,
    backgroundColor: 'rgb(255, 255, 0)'
  },
  box2: {
    height: 100,
    width: 100,
    backgroundColor: 'rgb(0, 255, 255)',
    top: 100
  },
  box3: {
    height: 100,
    width: 100,
    backgroundColor: 'rgb(255, 0, 255)'
  }
})

export default FlexLayout
