import React from 'react';

export interface TodoProps {
  id: number;
  title: string;
  isDone: boolean;
}

export const Todo = ({ title, isDone }: TodoProps) => {
  const className = isDone ? 'done' : '';
  const style = isDone ? { color: 'lightgray', textDecoration: 'line-through' } : undefined;

  return (
    <li className={className} style={style} data-cy="todo">
      {title}
    </li>
  );
};
