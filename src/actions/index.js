let nextTodoId = 0;

export const newTodo = (text) => {
  let newTodo = {
    type: 'NEW_TODO',
    id: nextTodoId,
    text
  };
  nextTodoId += 1;
  return newTodo;
};

export const removeTodo = (id) => ({
  type: 'REMOVE_TODO',
  id: id
});