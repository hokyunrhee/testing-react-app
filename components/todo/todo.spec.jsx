import React from 'react';
import { mount } from '@cypress/react';
import { Todo } from './todo';

describe('Todo Component', () => {
  it('contains correct title', () => {
    const todo = { id: 1, title: '돈코츠 라멘 주문하기', isDone: false };

    mount(<Todo {...todo} />);
  });

  it('shows line-through if isDone', () => {
    const todo = { id: 2, title: '교자 주문하기', isDone: true };

    mount(<Todo {...todo} />);

    cy.get('[data-cy=todo]').should('have.class', 'done');
  });
});
