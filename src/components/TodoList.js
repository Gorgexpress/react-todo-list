import React, { PropTypes } from 'react';
import Todo from './Todo';

const TodoList = ({todos, onToggleTodo, onRemoveTodo}) => {
  return (
  <ul 
    className="todoList"
  >
    {todos.map(todo =>
      <div
        className="todoDiv" 
        key={todo.id}>
        <Todo
          {...todo}
          onClick={() => onToggleTodo(todo.id)}
        />
        <div 
          className="removeTodo" 
          onClick={() => onRemoveTodo(todo.id)}
        >
          X
        </div>
      </div>
    )}
  </ul>);
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

export default TodoList;