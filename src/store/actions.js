import { GET_SHOW_WITH_EPISODES, GET_EPISODES_DETAILS } from './actionTypes';

export const getShowWithEpisodesAction = () => {
  return {
    type: GET_SHOW_WITH_EPISODES,
    payload: null
  }
}

export const getEpisodeDetailsAction = (season, number) => {
  return {
    type: GET_EPISODES_DETAILS,
    payload: {
      season,
      number
    }
  }
}
