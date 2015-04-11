'use strict';

var React = require('react-native');
var TodoItem = require('./TodoItem');
var {
  StyleSheet,
  ListView,
} = React;

var TodoList = React.createClass({

  componentWillMount: function() {
    var dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
  },

  render: function() {
    var dataSource = this.dataSource.cloneWithRows(this.props.items);

    return (
      <ListView
        style = {styles.listView}
        dataSource = {dataSource}
        renderRow={(rowData) => <TodoItem data = {rowData} />}
      />
    );
  }
});

var styles = StyleSheet.create({
  listView: {
    paddingTop: 20,
  }
});

module.exports = TodoList;
