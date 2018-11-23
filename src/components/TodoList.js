import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { toggleTodo, setEditingTodo } from '../actions'

import TodoListItem from './TodoListItem';



const TodoList = ({ todos, dispatchToggleTodo, dispatchSetEditingTodo }) => (
  //   usando o ScrollView
  <ScrollView style={styles.container}>
    {todos.map(todo => (
      <TodoListItem 
        key={todo.id} 
        todo={todo} 
        onPressTodo={()=> dispatchToggleTodo(todo.id)}
        onLongPressTodo={()=> dispatchSetEditingTodo(todo)}
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
  { 
    dispatchToggleTodo: toggleTodo,
    dispatchSetEditingTodo: setEditingTodo
  }
)(TodoList);
