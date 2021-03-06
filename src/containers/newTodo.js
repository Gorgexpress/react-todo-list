import React from 'react';
import { connect } from 'react-redux';
import { newTodo } from '../actions';

let NewTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <form onSubmit={e=> {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(newTodo(input.value));
        input.value = '';
        }}>
        <input ref={node => {
          input = node;
        }} />
        <button type="submit">
          Add
        </button>
      </form>
    </div>
  );
};
export default connect()(NewTodo);
export {NewTodo as PureNewTodo};