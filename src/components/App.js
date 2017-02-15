import React from 'react';
import NewTodo from '../containers/NewTodo';
import TodoList from './TodoList';

const App = () => (
  <div>
    <NewTodo />
    <TodoList />
  </div>
);

export default App;