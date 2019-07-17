import { apiUrl, showPath, episodesPath, episodePath } from './config';

export const retrieveShowWithEpisodesList = async (showId) => {
  const retrievedShow = retrieveShow(showId);
  const retrievedEpisodesList = retrieveEpisodesList(showId);

  const showWithEpisodesList = await Promise.all([retrievedShow, retrievedEpisodesList]);
  return showWithEpisodesList;
}

const retrieveShow = (showId) => {
    return fetch(`${apiUrl}${showPath}/${showId}`)
    .then(data => data.json())
    .then(data => {
        return data;
    })
    .catch(e => {
        console.error(`Can't retrieve show data, ${e}`);
    });
}

const retrieveEpisodesList = (showId) => {
  return fetch(`${apiUrl}${showPath}/${showId}${episodesPath}`)
    .then(data => data.json())
    .then(data => {
      return data;
    })
    .catch(e => {
      console.error(`Can't retrieve episodes list data, ${e}`);
    });
}

export const retrieveEpisode = (showId, season, number) => {
  return fetch(`${apiUrl}${showPath}/${showId}${episodePath}?season=${season}&number=${number}`)
  .then(data => data.json())
  .then(data => {
    return data;
  })
  .catch(e => {
    console.error(`Can't retrieve episode data, ${e}`);
  });
}