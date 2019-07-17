import React from 'react';
import renderer from 'react-test-renderer';
import ShowInfo from './ShowInfo';

test('ShowInfo renders correctly', () => {
  const fixture = (
    <ShowInfo
      network=""
      status=""
      showType=""
      genres={[]}
      officialSite=""
      rating={1}
    />
  );
  const component = renderer.create(fixture);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
