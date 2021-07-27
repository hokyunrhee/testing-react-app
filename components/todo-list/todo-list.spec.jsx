import React from 'react';
import { mount } from '@cypress/react';
import { TodoList } from './todo-list';

describe('TodoList Component', () => {
  beforeEach(function () {
    cy.fixture('todos.json').as('todos');

    this.deleteTodo = cy.stub();
    this.addTodo = cy.stub();
  });

  it('contains correct number of todos', function () {
    mount(<TodoList todos={this.todos} addTodo={this.addTodo} deleteTodo={this.deleteTodo} />);

    cy.get('[data-cy=todo-list]').children().should('have.length', this.todos.length);
  });

  it('renders "완료" button', function () {
    mount(<TodoList todos={this.todos} addTodo={this.addTodo} deleteTodo={this.deleteTodo} />);

    cy.get('[data-cy=todo-list]')
      .children()
      .each(($el) => {
        cy.wrap($el).find('button').should('contain.text', '완료');
      });
  });
});
