# Unit Testing React Components

Component Test를 작성하여 훨씬 더 간단하고 유지 관리하기 쉽고 다른 구성 요소와 함께 사용하고 재사용하기 쉬운 UI 구성 요소를 만들 수 있습니다.

**테스트 가능한 코드**를 작성하기 위해서는 관심사를 분리해야합니다. 다음과 같이 세가지 항목으로 나누어 볼 수 있습니다.

- **Display/UI Components**
- **Program logic/business rules** — the stuff that deals with the problem you’re solving for the user.
- **Side effects** (I/O, network, disk, etc.)

## How to write

- **Favor pure components for UI code:** given same props, always render the same component. If you need state from the app, you can wrap those pure components with a container component which manages state and side-effects.
- **Isolate application logic/business rules** in pure reducer functions.
- **Isolate side effects** using container components.

## Writing Component Test

- example1: pure component

```jsx
// hello.spec.jsx
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
```

```tsx
// hello.tsx
import React from 'react';

export interface HelloProps {
  userName: string;
}

export const Hello = ({ userName }: HelloProps) => {
  return <div data-cy="greeting">Hello, {userName}!</div>;
};
```

- example2: todo list

테스트를 작성하고, 테스트를 통과하는 코드를 작성하고, 작성한 코드를 리팩토링하는 과정을 반복해보겠습니다.

```jsx
// todo-list.spec.jsx
import React from 'react';
import { mount } from '@cypress/react';
import { TodoList } from './toto-list';

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
```

우선 어떤 식으로든 테스트를 통과하는 코드를 작성합니다.

```tsx
// todo-list.tsx
import React from 'react';

export interface TodoListProps {
  todos: any[];
}

export const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ul data-cy="todo-list">
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
```

todo를 분리하여 별도의 컴포넌트로 만들고 type을 명확하게 수정합니다.

```tsx
// todo.tsx
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
```

```tsx
// todo-list.tsx
import React from 'react';
import { Todo, TodoProps } from 'components/todo';

export interface TodoListProps {
  todos: TodoProps[];
}

export const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ul data-cy="todo-list">
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  );
};
```

## Reference

- [Unit Testing React Components](https://medium.com/javascript-scene/unit-testing-react-components-aeda9a44aae2)
- [[A5] 프론트엔드에서 TDD가 가능하다는 것을 보여드립니다.](https://www.youtube.com/watch?v=L1dtkLeIz-M&t=1357s)
