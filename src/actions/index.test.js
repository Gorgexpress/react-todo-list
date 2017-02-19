import { expect } from 'chai';
import * as actions from './';

describe('actions', () => {
  it('should create an action to create a new todo', () => {
    const text = 'Clean the office';
    const expectedAction = {
      text,
      id: 0,
      type: 'NEW_TODO',
    };
    expect(actions.newTodo(text)).to.deep.equal(expectedAction);
  });
  it('should create an action to toggle a todo', () => {
    const id = 0;
    const expectedAction = {
      id,
      type: 'TOGGLE_TODO',
    };
    expect(actions.toggleTodo(id)).to.deep.equal(expectedAction);
  })
  it('should create an action to remove a todo', () => {
    const id = 1;
    const expectedAction = {
      id,
      type: 'REMOVE_TODO',
    };
    expect(actions.removeTodo(id)).to.deep.equal(expectedAction);
  });
  it('should create an action to set a visibility filter', () => {
    const filter = 'SHOW_ALL'
    const expectedAction = {
      filter,
      type: 'SET_VISIBILITY_FILTER',
    };
    expect(actions.setVisibilityFilter(filter)).to.deep.equal(expectedAction);
  });
});