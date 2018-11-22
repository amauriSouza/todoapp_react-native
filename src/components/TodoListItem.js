import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const TodoListItem = ({ todo, onPressTodo }) => (
  <TouchableOpacity onPress={onPressTodo}>
    <View style={styles.row}>
      <Text style={[
            styles.lineText,
            todo.done ? styles.lineThrough : null
            ]}>{todo.text}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  row: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ebebeb'
  },

  lineThrough: {
    textDecorationLine: 'line-through', 
    color: 'gray'
  },

  lineText: {
    fontSize: 18,
    paddingLeft: 15,
    flex: 7,
    color: '#545454'
  }
});

export default TodoListItem;
