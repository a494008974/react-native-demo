import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import App from './containers/AppContainer'
import configureStore from './store/configureStore'


const store = configureStore();

class MGame extends Component {

  render() {
    return (
      <Provider store={store}>
      	  <App />
  	  </Provider>
    );
  }
}

AppRegistry.registerComponent('MGame', () => MGame);