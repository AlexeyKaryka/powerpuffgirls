import * as api from "../api";
import { powerpuffGirlsShowId } from "../config";

export const GET_SHOW_WITH_EPISODES = 'GET_SHOW_WITH_EPISODES';
export const GET_EPISODES_DETAILS = 'GET_EPISODES_DETAILS';

export const fetchShowWithEpisodesAction = () => async (dispatch) => {
  const data = await api.retrieveShowWithEpisodesList(powerpuffGirlsShowId)
  dispatch({
    type: GET_SHOW_WITH_EPISODES,
    payload: data
  });
}

export const fetchEpisodeDetailsAction = (season, number) => async (dispatch) => {
  const data = await api.retrieveEpisode(powerpuffGirlsShowId, season, number);
  dispatch({
    type: GET_EPISODES_DETAILS,
    payload: data
  });
}
