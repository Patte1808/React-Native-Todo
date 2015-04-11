'use strict';

var React = require('react-native');
var TodoForm = require('./TodoForm');
var {
  StyleSheet,
  Text,
  TouchableHighlight,
} = React;

var TodoItem = React.createClass({

  _onEditItem: function(item) {

  },

  _onPressItem: function(item) {
    this.props.navigator.push({
      title: 'Edit Todo',
      component: TodoForm,
      passProps: { item: item }
    });
  },

  render: function() {
    var item = this.props.item;

    return (
      <TouchableHighlight onPress={this.props.onPressItem}>
        <Text>
          <Text>
            {item.title}
          </Text>
          <Text style={item.completed && styles.completed}>
            {item.completed && ' (Completed)'}
          </Text>
        </Text>
      </TouchableHighlight>
    );
  }
});

var styles = StyleSheet.create({
  completed: {
    fontWeight: 'bold',
  }
});

module.exports = TodoItem;
