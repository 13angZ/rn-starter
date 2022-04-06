import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import RandomColorsScreen from "./src/screens/RandomColorsScreen";
import ColorCounterScreen from "./src/screens/ColorCounterScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    RandomColors: RandomColorsScreen,
    ColorCounter: ColorCounterScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
