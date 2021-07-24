import React from 'react';
import { mount } from '@cypress/react';
import { Hello } from './hello';

describe('Hello Component', () => {
  it('contains correct user name', () => {
    const userName = 'Ken';

    mount(<Hello userName={userName} />);

    cy.get('[data-cy=greeting]').should('contain.text', userName);
  });
});
