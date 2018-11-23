import { createStackNavigator } from "react-navigation";

import Play from '../../screen/Play';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Play,
  },
});

export default AppNavigator;
