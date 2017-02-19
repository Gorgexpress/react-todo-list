import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Todo from './Todo';

describe('<Todo />', () => {
  it('renders without error', () => {
    const wrapper = shallow(<Todo />);
    expect(wrapper).to.have.length(1);
  });
});