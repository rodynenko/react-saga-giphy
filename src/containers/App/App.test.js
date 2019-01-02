import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('renders without crashing', () => {
    const wrap = shallow(<App />);
    expect(wrap.exists()).toBe(true);
  });
});
