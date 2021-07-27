import React, { useReducer } from 'react';

import { TodoList, TodoListProps } from './todo-list';
import reducer, { State } from './todo-list-reducer';

const initialState: State = {
  todos: [],
};

export const TodoListContainer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo: TodoListProps['addTodo'] = (todo) => {
    dispatch({ type: 'CREATE', payload: todo });
  };

  const deleteTodo: TodoListProps['deleteTodo'] = (id) => {
    dispatch({ type: 'DELETE', payload: id });
  };

  return <TodoList todos={state.todos} addTodo={addTodo} deleteTodo={deleteTodo} />;
};
