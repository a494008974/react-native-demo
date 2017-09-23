import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text} from 'react-native';

import { StackNavigator,TabNavigator,DrawerNavigator} from 'react-navigation';

import Splash from '../pages/Splash';
import CounterContainer from '../containers/CounterContainer';
import TodoListContainer from '../containers/TodoListContainer';
import * as Screens from '../screens';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});


const TabContainer = TabNavigator({
 
  Button: {screen: Screens.ButtonScreen},
  Choice: {screen: Screens.ChoiceScreen},
  Tab: {screen: Screens.TabScreen},
  Card: {screen: Screens.CardScreen},
  Avatar: {screen: Screens.AvatarScreen},
  Input: {screen: Screens.InputScreen},
  Image: {screen: Screens.ImageScreen},
  Settings: {screen: Screens.SettingsScreen}
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: 'white'
    }
  }
});

export default TabContainer;
