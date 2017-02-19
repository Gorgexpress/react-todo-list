import React, { PropTypes } from 'react';
import Todo from './Todo';

const TodoList = ({todos, onToggleTodo, onRemoveTodo}) => {
  return (
  <ul>
    {todos.map(todo =>
      <div key={todo.id}>
        <Todo
          {...todo}
          onClick={() => onToggleTodo(todo.id)}
        />
        <button type="button" onClick={() => onRemoveTodo(todo.id)}>
          X
        </button>
      </div>
    )}
  </ul>);
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

export default TodoList;