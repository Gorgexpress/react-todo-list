import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Link from './Link';

describe('<Link />', () => {
  it('renders without error', () => {
    const wrapper = shallow(
      <Link
        active={true}
        children={(<p>hello!</p>)}
        onClick={() => 0}
      />
    );
    expect(wrapper).to.have.length(1);
  });
});