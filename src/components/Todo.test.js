import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Todo from './Todo';

describe('<Todo />', () => {
  it('renders without error', () => {
    const wrapper = shallow(
      <Todo 
        text={'do a thing'}
        id={0}
        isDone={false}
        onClick={() => 0}
      />
    );
    expect(wrapper).to.have.length(1);
  });
});