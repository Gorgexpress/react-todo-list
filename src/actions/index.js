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

export const toggleTodo = (id) => ({
  id,
  type: 'TOGGLE_TODO'
});

export const removeTodo = (id) => ({
  id,
  type: 'REMOVE_TODO'
});