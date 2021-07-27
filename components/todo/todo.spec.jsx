import React from 'react';
import { mount } from '@cypress/react';
import { Todo } from './todo';

describe('Todo Component', () => {
  beforeEach(function () {
    cy.fixture('todos.json').as('todos');

    this.deleteTodo = cy.stub();
  });

  it('contains correct title', function () {
    const todo = this.todos[0];

    mount(<Todo todo={todo} deleteTodo={this.deleteTodo} />);

    cy.get('[data-cy=todo]').find('span').should('contain.text', todo.title);
  });

  it('calls delete function', function () {
    const todo = this.todos[0];

    mount(<Todo todo={todo} deleteTodo={this.deleteTodo} />);

    expect(this.deleteTodo).not.to.be.called;

    cy.get('[data-cy=todo]')
      .find('button')
      .click()
      .then(() => {
        expect(this.deleteTodo).to.be.called;
      });
  });
});
