import React from 'react';
import { mount } from '@cypress/react';
import { TodoList } from './todo-list';

describe('TodoList Component', () => {
  const todos = [
    { id: 1, title: '돈코츠 라멘 주문하기', isDone: false },
    { id: 2, title: '교자 주문하기', isDone: false },
    { id: 3, title: '생맥주 주문하기', isDone: false },
  ];

  it('contains correct number of todos', () => {
    mount(<TodoList todos={todos} />);

    cy.get('[data-cy=todo-list]').children().should('have.length', todos.length);
  });

  it('contains correct titles', () => {
    mount(<TodoList todos={todos} />);

    cy.get('[data-cy=todo-list]')
      .children()
      .each(($el, index) => {
        cy.wrap($el).should('contain.text', todos[index].title);
      });
  });
});
