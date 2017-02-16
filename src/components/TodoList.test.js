import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import {PureTodoList as TodoList} from './TodoList'
import Todo from './Todo'

describe('<TodoList />', () => {
  it('initializes with an empty list', () => {
    const wrapper = shallow(<TodoList />);
    expect(wrapper.find(Todo)).to.have.length(0);
  });
  it('size of todos property and number of Todo elements rendered should be 1 to 1', () => {
      let todos = [
        {text: 'todo1', id: 0},
        {text: 'todo2', id: 1},
        {text: 'todo3', id: 2},
        {text: 'todo4', id: 3}
      ];
    const wrapper = shallow(<TodoList todos={todos}/>);
    expect(wrapper.find(Todo)).to.have.length(4);
  });

  it('renders without crashing', () => {
    const wrapper = mount(<TodoList />);
  });
});