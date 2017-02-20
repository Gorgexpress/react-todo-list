const todo = (state = {}, action) => {
  switch (action.type) {
    case 'NEW_TODO':
      return {
        id: action.id,
        text: action.text,
        isDone: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) return state;
      return Object.assign({}, state, {
        isDone: !state.isDone
      });
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
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    case 'REMOVE_TODO':
      return state.filter(t => t.id !== action.id);
    default:
      return state;
  }
}

export default todos;