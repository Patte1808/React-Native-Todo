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
  AlertIOS,
  ActivityIndicatorIOS,
  View,
  Text,
} = React;

var API_URI = 'http://localhost:3000/api/todo';

var Todo = React.createClass({

  getInitialState: function() {
    return {
      items: null
    };
  },

  componentDidMount: function() {
    this.fetchTodos();
  },

  fetchTodos: function() {
    fetch(API_URI)
      .then((response) => response.json())
      .then((responseText) => {
        console.log(responseText);
        this.setState({
          items: responseText
        });
      })
      .done();
  },

  onPressItem: function(item, id) {
    this.refs.nav.navigator.push({
      title: item.title,
      component: TodoForm,
      passProps: {item: item, id: id, onUpdateOrCreateItem: this.onUpdateOrCreateItem}
    });
  },

  onLongPressItem: function(id) {
    AlertIOS.alert(
      'Delete item?',
      'You can\'t revert the deletion.',
      [
        {text: 'Cancel'},
        {text: 'Delete', onPress: () => this.onDeleteItem(id)},
      ]
    );
  },

  onDeleteItem: function(index) {
    var items = this.state.items;
    items.splice(index, 1);

    this.setState({
      items: items
    });
  },

  onUpdateOrCreateItem: function(item, index) {
    var items = this.state.items;

    if(index) {
      items[index] = item;
    } else {
      items.push(item);
    }

    var postItem = {
      title: item.title,
      completed: item.completed
    };

    fetch(API_URI, {
      method: 'POST',
      body: "title=" + item.title + "&completed=" + item.completed,
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
    })
    .then((response) => response.json())
    .then((responseText) => {
      this.setState({
        items: items
      });
    });

    this.refs.nav.navigator.pop();
  },

  renderLoadingView: function() {
    return (
      <View style={[styles.container, styles.centering]}>
        <ActivityIndicatorIOS
          animating={true}
          style={[styles.centering, {height: 80}]}
          size="large"
        />
      </View>
    );
  },

  render: function() {

    if(!this.state.items) {
      return this.renderLoadingView();
    }

    return (
      <NavigatorIOS
        ref='nav'
        style={styles.container}
        initialRoute={{
          component: TodoList,
          title: 'Your todos',
          passProps: {
            items: this.state.items,
            onPressItem: this.onPressItem,
            onLongPressItem: this.onLongPressItem
          },
          rightButtonTitle: 'New Todo',
          onRightButtonPress: () => { this.refs.nav.navigator.push({
            title: 'New Todo',
            component: TodoForm,
            passProps: { onUpdateOrCreateItem: this.onUpdateOrCreateItem }
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
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('Todo', () => Todo);
