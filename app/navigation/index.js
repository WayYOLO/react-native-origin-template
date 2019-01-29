import React from 'react';
import {
  createAppContainer,
  createStackNavigator,
  StackActions,
  NavigationActions,
} from 'react-navigation';
import NavigationService from './navigation-service';
import WelcomeScreen from '../page/welcome';
import HomeSrcreen from '../page/home';

const AppNavigator = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
    },
    Home: {
      screen: HomeSrcreen,
    },
  },
  {
    initialRouteName: 'Welcome',
    headerMode: 'none',
  }
);
const AppContainer = createAppContainer(AppNavigator);

export default () => (
  <AppContainer
    ref={navigatorRef => {
      NavigationService.setTopLevelNavigator(navigatorRef);
    }}
  />
);
