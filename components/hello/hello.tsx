import React from 'react';

export interface HelloProps {
  userName: string;
}

export const Hello = ({ userName }: HelloProps) => {
  return <div data-cy="greeting">Hello, {userName}!</div>;
};
