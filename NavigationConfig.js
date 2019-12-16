import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './App';

import Call from './Call';
import Status from './Status';

const stackNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },

    Call: {
      screen: Call,
    },
    Status: {
      screen: Status,
    },
  },
  {
    headerMode: 'none',
  },
);

let AppContainer = createAppContainer(stackNavigator);

export default AppContainer;
