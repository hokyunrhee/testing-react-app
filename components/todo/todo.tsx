import React from 'react';

type TodoType = {
  id: number;
  title: string;
};

export interface TodoProps {
  todo: TodoType;
  deleteTodo: (id: number) => void;
}

export const Todo = ({ todo, deleteTodo }: TodoProps) => {
  return (
    <li data-cy="todo">
      <span>{todo.title}</span>
      <button onClick={() => deleteTodo(todo.id)}>완료</button>
    </li>
  );
};
