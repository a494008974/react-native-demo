import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text} from 'react-native';

import { StackNavigator,TabNavigator,DrawerNavigator} from 'react-navigation';

import SplashContainer from '../containers/SplashContainer';

import TabContainer from '../containers/TabContainer';
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


const AppContainer = StackNavigator({
  SplashContainer: {screen: SplashContainer,
                    navigationOptions:({navigation}) => ({  
                            header:null,
                    }),
  },
  TabContainer: {screen: TabContainer,
                 navigationOptions:({navigation}) => ({  
                            header:null,
                            cardStack: {
                                gesturesEnabled: false  // 是否可以右滑返回
                            }
                 }),
  },
  CounterContainer: {screen: CounterContainer},
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: 'white'
    }
  }
});

export default AppContainer;
