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
  text: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};



export default Todo;