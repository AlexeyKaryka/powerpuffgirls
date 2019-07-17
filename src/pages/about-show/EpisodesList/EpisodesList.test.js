import React from 'react';
import renderer from 'react-test-renderer';
import EpisodesList from './EpisodesList';

test('EpisodesList renders correctly', () => {
  const fixture = (
    <EpisodesList
      episodes={[]}
    />
  );
  const component = renderer.create(fixture);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
