import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './App';
import Page2 from './App2';
import Status from './Status';

const stackNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },

  Page: {
    screen: Page2,
  },
  Status: {
    screen: Status,
  },
});

let AppContainer = createAppContainer(stackNavigator);

export default AppContainer;
