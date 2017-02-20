import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import App from './App';
import TodoList from './TodoList'
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('<App />', () => {
  //Probably unecessary, but I want to know how to use mount with redux involved.
  it('renders without error (not shallow)', () => {
    let store = mockStore({todos: [], visibilityFilter: 'SHOW_ALL'});
    const wrapper = mount(
      <Provider store={store}>
        <App /> 
      </Provider>
    );
    expect(wrapper.find(TodoList)).to.have.length(1);
  });
});