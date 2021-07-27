import reducer from './todo-list-reducer';

describe('TodoList Reducer', () => {
  const initialState = {
    todos: [],
  };

  beforeEach(function () {
    cy.fixture('todos.json').as('todos');
  });

  it('READ', function () {
    const action = { type: 'READ', payload: this.todos };

    const actual = reducer(initialState, action);

    expect(actual).to.deep.equal({ todos: this.todos });
  });

  it('CREATE', function () {
    const payload = { id: this.todos.length + 1, title: '누워서 유튜브 시청하기', isDone: false };

    const action = { type: 'CREATE', payload };

    const stateBefore = { todos: this.todos };

    const actual = reducer(stateBefore, action);

    expect(actual).to.deep.equal({ todos: [payload, ...this.todos] });
    expect(actual.todos).to.have.lengthOf(this.todos.length + 1);
  });

  it('UPDATE', function () {
    const payload = { ...this.todos[0], title: '매운맛 돈코츠 라멘 주문하기' };

    const action = { type: 'UPDATE', payload };

    const stateBefore = { todos: this.todos };

    const actual = reducer(stateBefore, action);

    expect(actual.todos[0]).to.equal(payload);
  });

  it('DELETE', function () {
    const payload = this.todos[0].id;

    const action = { type: 'DELETE', payload };

    const stateBefore = { todos: this.todos };

    const actual = reducer(stateBefore, action);

    expect(actual.todos).to.have.lengthOf(this.todos.length - 1);
  });

  it('without payload', function () {
    const action = { type: 'DELETE' };

    const stateBefore = { todos: this.todos };

    const actual = reducer(stateBefore, action);

    expect(actual.todos).to.deep.equal(this.todos);
  });
});
