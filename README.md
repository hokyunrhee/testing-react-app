# Testing React App With Cypress

cypress를 이용하여 `component tests`와 `e2e tests`하는 방법을 다룹니다.

## Setup

```bash
npm install --save-dev cypress @cypress/webpack-dev-server @cypress/react html-webpack-plugin@5 webpack@5 webpack-dev-server@3
```

## Opening Cypress

```
npx cypress open
```

해당 명령을 이용하여 cypress test runner를 동작시키면 `cypress.json` 등을 생성해줍니다.

## Configuration

- cypress/plugins/index.js

```js
const injectDevServer = require('@cypress/react/plugins/next');

module.exports = (on, config) => {
  injectDevServer(on, config);

  return config;
};
```

- cypress.json

```json
{
  "component": {
    "componentFolder": "components",
    "testFiles": "**/*spec.{js,jsx,ts,tsx}"
  }
}
```

## Writing Component Test

```jsx
// components/index.spec.jsx
import React from 'react';
import { mount } from '@cypress/react';
import IndexPage from '../pages/index';

it('should work', () => {
  mount(<IndexPage />);
  cy.contains('Welcome to Next.js');
});
```

- component testing mode 실행

```
npx cypress open-ct
```

- terminal에서 실행

```
npx cypress run-ct
```

## Reference

- [Introducing the Cypress Component Test Runner](https://www.cypress.io/blog/2021/04/06/introducing-the-cypress-component-test-runner/)
- [Getting Started with Cypress Component Testing (React)](https://www.cypress.io/blog/2021/04/06/cypress-component-testing-react/)
- [Framework Configuration](https://docs.cypress.io/guides/component-testing/framework-configuration)
