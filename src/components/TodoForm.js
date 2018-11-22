import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

import Header from './Header';
import Input from './Input';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  onChangeText(text) {
    this.setState({
      text
    });
  }

  onPress() {
    this.props.dispatchAddTodo(this.state.text);
    this.setState({ text: '' });
  }

  render() {
    const { text } = this.state;
    return (
      <View>
        <Header />
        <View style={styles.formContainer}>
          <View>
            <Input
              onChangeText={text => this.onChangeText(text)}
              value={text}
            />
          </View>
          <View>
            <Button
              onPress={() => this.onPress()}
              title="Adicionar"
              color="#39bcd3"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    padding: 10
  }
});

export default connect(
  null,
  { dispatchAddTodo: addTodo }
)(TodoForm);
