'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
} = React;

var TodoItem = React.createClass({

  render: function() {
    var item = this.props.data;

    return (
      <Text>{item.title}</Text>
    );
  }
});

var styles = StyleSheet.create({

});

module.exports = TodoItem;
