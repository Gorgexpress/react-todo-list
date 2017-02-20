import React from 'react';
import NewTodo from '../containers/NewTodo';
import Footer from './Footer';
import FilteredTodoList from '../containers/FilteredTodoList';
import RemainingTodos from '../containers/RemainingTodos';

const App = () => (
  <div id="app">
    <NewTodo />
    <FilteredTodoList />
    <RemainingTodos />
    <Footer />
  </div>
);

export default App;