import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text} from 'react-native';

import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as TodosActions from '../actions/todos';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#555555'
  },
  backcolor: {
    backgroundColor: '#993388'
  },
  back: {
    margin: 10,
    fontSize: 20
  }
});

class TodoListContainer extends Component {

  render() {
    return (
      <View>
          <Text>TodoList</Text>
          <AddTodo {...this.props} />
          <TodoList {...this.props} />
          <Footer {...this.props} />
      </View>
    );
  }
}

export default connect(
  state => ({
    todos: state.todos,
    visibilityfilter: state.visibilityfilter
  }),
  dispatch => bindActionCreators(TodosActions, dispatch)
)(TodoListContainer);
