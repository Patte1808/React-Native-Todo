'use strict';

var React = require('react-native');
var t = require('tcomb-form-native');
var {
  StyleSheet,
  ListView,
  View,
  Text,
  TouchableHighlight,
} = React;

var Form = t.form.Form;

var TodoItem = t.struct({
  title: t.Str,
  completed: t.Bool
});

var options = {
  fields: {
    title: {
      label: 'Title',
      placeholder: 'The title of your todo'
    }
  }
};

var TodoForm = React.createClass({

  onPressSaveButton: function() {
    var todo = this.refs.form.getValue();

    console.log(todo);

    this.props.onPressSaveButton(todo);
    this.props.navigator.pop();
  },

  render: function() {

    return (
      <View style={styles.container}>
        <Form
          ref='form'
          type={TodoItem}
          options={options}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPressSaveButton} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

module.exports = TodoForm;
