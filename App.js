import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen"
import ImageScreen from "./src/screens/ImageScreen"
import CounterScreen from "./src/screens/CounterScreen"
import ColorScreen from "./src/screens/ColorScreen"
import SquareScreen from './src/screens/SquareScreen'
import CounterScreenReducer from './src/screens/CounterScreenReducer'
import TextScreen from './src/screens/TextScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Images: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    RCounter: CounterScreenReducer,
    TextS : TextScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "myApp",
    },
  }
);

export default createAppContainer(navigator);
