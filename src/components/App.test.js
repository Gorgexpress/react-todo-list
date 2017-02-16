import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import App from './App';
import TodoList from './TodoList'
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('<App />', () => {
  it('renders without crashing', () => {
    let store = mockStore([]);
    const wrapper = mount(
      <Provider store={store}>
        <App /> 
      </Provider>
    );
    expect(wrapper.find(TodoList)).to.have.length(1);
  });
});