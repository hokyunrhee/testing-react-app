import React from 'react';
import { Todo, TodoProps } from 'components/todo';

type TodoType = TodoProps['todo'];
type DeleteTodoType = TodoProps['deleteTodo'];

export interface TodoListProps {
  todos: TodoType[];
  deleteTodo: DeleteTodoType;
  addTodo: (todo: TodoProps) => void;
}

export const TodoList = ({ todos, deleteTodo, addTodo }: TodoListProps) => {
  return (
    <ul data-cy="todo-list">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
};
