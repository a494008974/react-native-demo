import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import Immutable from 'immutable';

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

export default class Counter extends Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.instanceOf(Immutable.Map).isRequired
  };

  constructor(props) {
    super(props);
    const { incrementAsync } = props;
    this.incrementAsync = () => incrementAsync();
  }

  render() {
    const { increment, incrementIfOdd, decrement, counter } = this.props;
    return (
      <View>
        <Text style={styles.text}  >Clicked: {counter.get('counter')} times</Text>
        <Button  onPress={increment} title="increment" color="#841584"/>
        <Text/>
        <Button  onPress={decrement} title="decrement"  />
        <Text/>
        <Button  onPress={incrementIfOdd} title="incrementIfOdd"  />
        <Text/>
        <Button  onPress={this.incrementAsync} title="incrementAsync"  />
        
      </View>
    );
  }
}
