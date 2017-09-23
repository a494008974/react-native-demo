import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View, TouchableHighlight,FlatList } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    backgroundColor: '#443388'
  }
});

export default class TodoList extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { todos } = this.props;
    return (
      <View>
          <FlatList
            data={todos}
            renderItem={({item}) => <Text>{item.text}</Text>}
          />
      </View>
    );
  }
}
