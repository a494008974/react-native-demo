'use strict';

import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import {
  Dimensions,
  StyleSheet,
  View,
  Animated,
} from 'react-native';

import Storage from '../utils/Storage';

const maxHeight = Dimensions.get('window').height;
const maxWidth = Dimensions.get('window').width;
const splashImg = require('../images/load.png');

class Splash extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(1)
    };
  }
  componentDidMount() {
    Animated.timing(
      this.state.bounceValue, { toValue: 1.2, duration: 1000 }
    ).start();
    this.timer = setTimeout(() => {
      const { navigate } = this.props.navigation;
      Storage.get('isInit')
      .then((isInit) => {
        if (!isInit) {
          navigate('TabContainer');
          Storage.save('isInit', true);
        } else {
          navigate('TabContainer');
        }
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <Animated.Image
        style={{ width: maxWidth,
             height: maxHeight,
             transform: [{ scale: this.state.bounceValue }] }}
        source={splashImg}
      />
    );
  }
}

const styles = StyleSheet.create({

});

export default Splash;