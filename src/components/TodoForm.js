import React from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';
import { connect } from 'react-redux';
import { addTodo, setTodoText, updateTodo } from '../actions';

import Header from './Header';
import Input from './Input';

class TodoForm extends React.Component {
  onChangeText(text) {
    this.props.dispatchSetTodoText(text);
  }

  onPress() {
    const { todo } = this.props;
    const { text } = todo;

    if (text === '') {
      Alert.alert('Aviso', 'Digite alguma tarefa!', [{ text: 'OK' }], {
        cancelable: false
      });
    } else {
      if (todo.id) {
        this.props.dispatchUpdateTodo(todo);
      } else {
        this.props.dispatchAddTodo(text);
      }
    }
  }

  render() {
    const { text, id } = this.props.todo;
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
              title={!id ? 'Adicionar' : 'Salvar'}
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

const mapStateToProps = state => {
  return {
    todo: state.editingTodo
  };
};

export default connect(
  mapStateToProps,
  {
    dispatchAddTodo: addTodo,
    dispatchSetTodoText: setTodoText,
    dispatchUpdateTodo: updateTodo
  }
)(TodoForm);
