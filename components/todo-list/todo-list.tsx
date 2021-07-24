import React from 'react';
import { Todo, TodoProps } from 'components/todo';

export interface TodoListProps {
  todos: TodoProps[];
}

export const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ul data-cy="todo-list">
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  );
};
