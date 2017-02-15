import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

const todoList = ({todos}) => {
  console.log(todos);
  return (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
      />
    )}
  </ul>);
};

todoList.propTypes = {
  todos: PropTypes.array.isRequired
};

const getTodos = (todos) => {
  if(todos)
    return todos;
  return [];
}
const mapStateToProps = (state) => ({
  todos: getTodos(state)
});

const TodoList = connect(mapStateToProps)(todoList);



export default TodoList;