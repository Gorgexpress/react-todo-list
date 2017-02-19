let nextTodoId = 0;

export const newTodo = (text) => {
  let newTodo = {
    text,
    type: 'NEW_TODO',
    id: nextTodoId,
  };
  nextTodoId += 1;
  return newTodo;
};

export const toggleTodo = (id) => {
  return {
    id,
    type: 'TOGGLE_TODO'
  };
};

export const removeTodo = (id) => {
  return {
    id,
    type: 'REMOVE_TODO'
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    filter,
    type: 'SET_VISIBILITY_FILTER',
  };
};
