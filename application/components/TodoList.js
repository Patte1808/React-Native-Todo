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
          renderRow={(rowData, sectionId, rowId) =>
            <TodoItem
              item = {rowData}
              onPressItem={() => this.props.onPressItem(rowData, rowId)}
              onLongPressItem={() => this.props.onLongPressItem(rowId)}
            />}
        />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  listView: {
    marginTop: 5,
  }
});

module.exports = TodoList;
