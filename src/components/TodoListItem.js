import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const TodoListItem = ({ todo, onPressTodo, onLongPressTodo }) => (
  <TouchableOpacity onPress={onPressTodo} onLongPress={onLongPressTodo}>
      <View style={styles.itemTask}>
        <Text style={[styles.lineText, todo.done ? styles.lineThrough : null]}>
          {todo.text}
        </Text>
      </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  // row: {
  //   height: 60,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   borderBottomWidth: 1,
  //   borderBottomColor: '#ebebeb'
  // },

  // rowTex: {
  //   flexDirection: 'row'
  // },

  itemTask: {
    padding: 10,
    borderRadius: 5,
    elevation: 2,
    backgroundColor: '#fff',
    marginBottom: 10,
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
