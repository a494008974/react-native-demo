import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Counter from '../components/Counter';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CounterActions from '../actions/counter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#996688'
  },
  backcolor: {
    backgroundColor: '#996688'
  },
  back: {
    margin: 10,
    fontSize: 20
  }
});

class CounterContainer extends Component {

  render() {
    return (
      <View style={styles.container}>
          <Text>Counter</Text>
          <Counter {...this.props} />
      </View>
    );
  }
}

export default connect(
  state => ({
    counter: state.counter,
  }),
  dispatch => bindActionCreators(CounterActions, dispatch)
)(CounterContainer);
