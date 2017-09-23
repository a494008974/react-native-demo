import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    backgroundColor: '#225588'
  }
});

export default class Footer extends Component {
  render() {
   
    return (
      <View>
        <Text style={styles.text}>Footer......................</Text>
      </View>
    );
  }
}
