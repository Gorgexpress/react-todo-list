import { connect } from 'react-redux';
import { toggleTodo, removeTodo } from '../actions';
import TodoList from '../components/TodoList';

const filterTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.isDone);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.isDone);
    default:
      return 'SHOW_ALL';
  }
};

const mapStateToProps = (state) => {
  return {
    todos: filterTodos(state.todos, state.visibilityFilter)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveTodo: (id) => dispatch(removeTodo(id)),
    onToggleTodo: (id) => dispatch(toggleTodo(id))
  };
};

const FilteredTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default FilteredTodoList;