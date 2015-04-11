/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var TodoList = require('./application/components/TodoList');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var Todo = React.createClass({

  getInitialState: function() {
    return {
      todoItems: [
        {title: 'First todo item', completed: false},
        {title: 'Second todo item', completed: true}
      ]
    };
  },

  render: function() {
    return (
      <TodoList items = {this.state.todoItems} />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Todo', () => Todo);
