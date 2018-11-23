import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import rootReducer from './reducers';
import devToolsEnhancer from 'remote-redux-devtools';

const store = createStore(rootReducer, devToolsEnhancer());

export default class TodoApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <TodoForm />
          <View style={styles.positionTitle}>
            <Text style={styles.titleTasks}>Tarefas</Text>
          </View>
          <TodoList/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  titleTasks: {
    fontSize: 18,
    color: '#545454',
    fontWeight: 'bold'
  },

  positionTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20
  }
});
