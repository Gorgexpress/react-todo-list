const todo = (state = {}, action) => {
  switch (action.type) {
    case 'NEW_TODO':
      return {
        id: action.id,
        text: action.text
      };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'NEW_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'REMOVE_TODO':
      return state.filter(t => t.id !== action.id);
    default:
      return state;
  }
}

export default todos;