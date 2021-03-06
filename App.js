import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from "./src/screens/HomeScreen"
import ComponentScreen from './src/screens/ComponentScreen'
import ListScreen from './src/screens/ListScreen'
import ImageScreen from './src/screens/ImageScreens'
import CounterScreen from './src/screens/CounterScreen'
import ColorScreen from './src/screens/ColorScreen'
import RedGreenBlueScreen from './src/screens/RedGreenBlueScreen'
import InputField from './src/screens/InputField'
import FlexLayout from './src/screens/FlexLayout'


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    List: ListScreen,
    ImageList: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    RGB: RedGreenBlueScreen,
    Input: InputField,
    Layout: FlexLayout
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
)

export default createAppContainer(navigator)
