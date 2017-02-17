import { expect } from 'chai';
import * as actions from './';

describe('actions', () => {
  it('should create an action to create a new todo', () => {
    const text = 'Clean the office';
    const expectedAction = {
      id: 0,
      type: 'NEW_TODO',
      text
    };
    expect(actions.newTodo(text)).to.deep.equal(expectedAction);
  });
  it('should create an action to remove a todo', () => {
    const id = 1;
    const expectedAction = {
      type: 'REMOVE_TODO',
      id
    };
    expect(actions.removeTodo(id)).to.deep.equal(expectedAction);
  });
});