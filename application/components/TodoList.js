'use strict';

var React = require('react-native');
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
        dataSource = {dataSource}
        renderRow={(rowData) => <TodoItem data = {rowData} />}
      />
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

module.exports = TodoList;
