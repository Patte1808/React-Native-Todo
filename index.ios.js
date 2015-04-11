/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var TodoList = require('./application/components/TodoList');
var TodoForm = require('./application/components/TodoForm');
var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  Navigator,
} = React;

var Todo = React.createClass({

  getInitialState: function() {
    return {
      items: [
        {title: 'First todo item', completed: false},
        {title: 'Second todo item', completed: true}
      ]
    };
  },

  onNewTodo: function(todo) {
    var items = this.state.items.slice();
    items.push(todo);
    
    this.setState({
      items: items
    });
  },

  render: function() {
    return (
      <NavigatorIOS
        ref='nav'
        style={styles.container}
        initialRoute={{
          component: TodoList,
          title: 'Your todos',
          passProps: { items: this.state.items },
          rightButtonTitle: 'New Todo',
          onRightButtonPress: () => { this.refs.nav.navigator.push({
            title: 'New Todo',
            component: TodoForm,
            passProps: { onPressSaveButton: this.onNewTodo }
            });
          }
        }}
      />
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
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
