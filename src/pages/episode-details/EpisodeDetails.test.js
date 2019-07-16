import React from 'react';
import EpisodeDetails from './EpisodeDetails';
import renderer from 'react-test-renderer';

test('EpisodeDetails renders correctly', () => {
  const fixture = (
    <EpisodeDetails
      match={{ params: { season: 1, number: 1 } }}
      name=""
      img=""
      summary=""
      fetchEpisodeDetails={() => {}}
    />
  );
  const component = renderer.create(fixture);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});