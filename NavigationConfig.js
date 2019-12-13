import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './App';
import Page2 from './App2';

const stackNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },

  Page: {
    screen: Page2,
  },
});

let AppContainer = createAppContainer(stackNavigator);

export default AppContainer;
