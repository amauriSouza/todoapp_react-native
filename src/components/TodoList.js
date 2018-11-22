import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions'

import TodoListItem from './TodoListItem';



const TodoList = ({ todos, dispatchToggleTodo }) => (
  //   usando o ScrollView
  <ScrollView style={styles.container}>
    {todos.map(todo => (
      <TodoListItem 
        key={todo.id} 
        todo={todo} 
        onPressTodo={()=> dispatchToggleTodo(todo.id)}
        />
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});

const mapStateToProps = state => {
  const { todos } = state;
  return { todos };
};

export default connect(mapStateToProps,
  { dispatchToggleTodo: toggleTodo}
)(TodoList);
