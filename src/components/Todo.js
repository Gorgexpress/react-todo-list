import React, { PropTypes } from 'react';

const Todo = ({text, id, isDone, onClick}) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: isDone ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  isDone: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};



export default Todo;