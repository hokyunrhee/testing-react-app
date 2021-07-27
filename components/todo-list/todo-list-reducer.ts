import { TodoListProps } from 'components/todo-list';

export type State = {
  todos: TodoListProps['todos'];
};

export type Action = {
  type: 'READ' | 'CREATE' | 'UPDATE' | 'DELETE';
  payload: any;
};

export default function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'READ':
      return { ...state, todos: action.payload };
    case 'CREATE':
      return { ...state, todos: [action.payload, ...state.todos] };
    case 'UPDATE':
      return { ...state, todos: state.todos.map((todo) => (todo.id === action.payload.id ? action.payload : todo)) };
    case 'DELETE':
      return { ...state, todos: state.todos.filter((todo) => todo.id !== action.payload) };
    default:
      return state;
  }
}
