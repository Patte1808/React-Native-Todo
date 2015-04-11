'use strict';

var React = require('react-native');
var TodoItem = require('./TodoItem');
var {
  StyleSheet,
  ListView,
  View,
} = React;

var TodoList = React.createClass({

  componentWillMount: function() {
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
  },

  render: function() {
    var dataSource = this.dataSource.cloneWithRows(this.props.items);

    return (
      <View style={styles.container}>
        <ListView
          style = {styles.listView}
          dataSource = {dataSource}
          renderRow={(rowData) => <TodoItem data = {rowData} />}
        />
      </View>
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
  listView: {
    paddingTop: 100,
  }
});

module.exports = TodoList;
