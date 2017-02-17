import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import {PureNewTodo as NewTodo} from './NewTodo';

describe('<NewTodo />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NewTodo />);
    expect(wrapper).to.have.length(1);
  });
});