import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import TodoList from './TodoList'
import Todo from './Todo';

describe('<TodoList />', () => {
  it('initializes with an empty list of todos', () => {
    const testFunc = () => 0;
     const wrapper = shallow(
      <TodoList 
        todos={[]}
        onToggleTodo={testFunc}
        onRemoveTodo={testFunc}
      />
    );
    expect(wrapper.find(Todo)).to.have.length(0);
  });
  it('size of todos property and number of Todo elements rendered should be 1 to 1', () => {
    const todos = [
      {text: 'todo1', id: 0, isDone: false},
      {text: 'todo2', id: 1, isDone: true},
      {text: 'todo3', id: 2, isDone: false},
      {text: 'todo4', id: 3, isDone: true}
    ];
    const testFunc = () => 0;
    const wrapper = shallow(
      <TodoList 
        todos={todos}
        onToggleTodo={testFunc}
        onRemoveTodo={testFunc}
      />
    );
    expect(wrapper.find(Todo)).to.have.length(4);
  });
});