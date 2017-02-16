import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import { removeTodo}  from '../actions'

const TodoList = ({todos, onRemoveTodo}) => {
  return (
  <ul>
    {todos.map(todo =>
      <div key={todo.id}>
        <Todo
          {...todo}
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

TodoList.defaultProps = {
  todos: []
};


const mapStateToProps = (todos) => ({
  'todos': todos
});

const mapDispatchToProps = (dispatch) => ({
  onRemoveTodo: (id) => {dispatch(removeTodo(id));}
});


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
export {TodoList as PureTodoList};