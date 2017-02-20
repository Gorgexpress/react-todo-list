import { expect } from 'chai';
import reducer from './todos';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.deep.equal([]);
  });
  it('should handle NEW_TODO', () => {
    const newTodoAction = {
      type: 'NEW_TODO',
      text: 'do stuff',
      id: 0,
    };
    const expectedState = [
      {
        id: 0,
        text: 'do stuff',
        isDone: false,
      }
    ];
    expect(reducer([], newTodoAction)).to.deep.equal(expectedState);
  });
  it('should handle TOGGLE_TODO', () => {
    const state = [
      {
        id: 0,
        text: 'Do something',
        isDone: false,
      }
    ];
    const toggleAction = {
      id: 0,
      type: 'TOGGLE_TODO',
    };
    const expectedState = [
      {
        id: 0,
        text: 'Do something',
        isDone: true,
      }
    ];
    expect(reducer(state, toggleAction)).to.deep.equal(expectedState);
    //reverse the states to test toggling isDone from true to false
    expect(reducer(expectedState, toggleAction)).to.deep.equal(state);
  })
  it('should handle REMOVE_TODO', () => {
    const state = [
      {
        id: 0,
        text: 'Mop the floor.',
      },
      {
      id: 1,
      text: 'Clean the office.',
      }
    ];
    const removeAction = {
      type: 'REMOVE_TODO',
      id: 1,
    };
    const expectedState = state.filter(todo => todo.id === 0);
    expect(reducer(state, removeAction)).to.deep.equal(expectedState);
  });
})