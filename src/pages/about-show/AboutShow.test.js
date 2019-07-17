import React from 'react';
import renderer from 'react-test-renderer';
import ShowInfo from './ShowInfo';
import EpisodesList from './EpisodesList';
import AboutShow from './AboutShow';

test('AboutShow renders correctly and contains sub components', () => {
  const fixture = (
    <AboutShow
      name=""
      summary=""
      img=""
      network=""
      status=""
      type=""
      genres={[]}
      officialSite=""
      rating={1}
      episodes={[]}
      fetchShowWithEpisodes={() => {}}
    />
  );
  const component = renderer.create(fixture);
  const componentInstance = component.root;
  expect(componentInstance.findByType(ShowInfo)).toBeTruthy();
  expect(componentInstance.findByType(EpisodesList)).toBeTruthy();

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});