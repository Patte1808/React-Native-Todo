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
        <Text>{item.title}</Text>
      </TouchableHighlight>
    );
  }
});

var styles = StyleSheet.create({

});

module.exports = TodoItem;
