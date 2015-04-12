'use strict';

var React = require('react-native');
var TodoForm = require('./TodoForm');
var {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = React;

var TodoItem = React.createClass({
  
  render: function() {
    var item = this.props.item;

    return (
      <View style={styles.view}>
        <TouchableHighlight
          onPress={this.props.onPressItem}
          onLongPress={this.props.onLongPressItem}
          style={styles.highlight}
          underlayColor={'#34AADC'}>
          <Text style={styles.textContainer}>
            <Text>
              {item.title}
            </Text>
            <Text style={item.completed && styles.itemCompleted}>
              {item.completed && ' (Completed)'}
            </Text>
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  itemCompleted: {
    fontWeight: 'bold',
  },
  view: {
    borderBottomWidth: 1,
    borderColor: '#F7F7F7',
    height: 40,
  },
  highlight: {
    height: 40,
    justifyContent: 'center',
  },
  textContainer: {
    marginLeft: 15,
    fontSize: 16,
  },
});

module.exports = TodoItem;
