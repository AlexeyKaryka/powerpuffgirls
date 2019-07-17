import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import renderer from 'react-test-renderer';

test('Header renders correctly', () => {
  const fixture = (
    <BrowserRouter>
      <Header/>
    </BrowserRouter>
  );
  const component = renderer.create(fixture);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});