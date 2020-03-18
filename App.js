import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from "./src/screens/HomeScreen"
import ComponentScreen from './src/screens/ComponentScreen'
import ListScreen from './src/screens/ListScreen'
import ImageScreen from './src/screens/ImageScreens'
import CounterScreen from './src/screens/CounterScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    List: ListScreen,
    ImageList: ImageScreen,
    Counter: CounterScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
)

export default createAppContainer(navigator)
