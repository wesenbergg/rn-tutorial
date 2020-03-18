import React, { useState } from "react"
import { Text, StyleSheet, Button, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"

const HomeScreen = ({ navigation }) => {
  const [showNav, setShowNav] = useState(true)

  const showNavItems = () => (
      <>
        <TouchableOpacity onPress={() => navigation.navigate('List')} >
          <Text style={styles.text}>To List view</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ImageList')} >
          <Text style={styles.text}>To Image list view</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Counter')} >
          <Text style={styles.text}>Counter</Text>
        </TouchableOpacity>
      </>
  )

  return (
    <View>
      <Text style={styles.text}>"Heey! How you doing?" -Joey</Text>
      <Button style={styles.button} title="Toggle navigation" onPress={() => setShowNav(!showNav)} />
      {showNav ? showNavItems(): null}
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    padding: 5,
    marginBottom: 10
  },
  button: {
  }
})

export default HomeScreen;
