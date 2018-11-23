import { ADD_TODO, TOGGLE_TODO, UPDATE_TODO } from '../actions';
let nextId = 1;

const todoListReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: nextId++,
        text: action.text,
        done: false
      };
      //unindo dois arrays, tarefa sendo inserida,
      //dentro de um conjunto de outras tarefas ja inserida
      return [...state, newTodo];

    case UPDATE_TODO:
      return state.map(todo => {
        if (todo.id === action.todo.id) {
          return action.todo;
        }
        return todo;
      });

    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.todoId) {
          // return Object.assing({}, todo, { done: !todo.done });
          return { ...todo, done: !todo.done };
        }
        return todo;
      });
    default:
      return state;
  }
};

export default todoListReducer;
