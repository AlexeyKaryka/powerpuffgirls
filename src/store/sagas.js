import { all, takeLatest, call, put } from 'redux-saga/effects'
import {
  GET_SHOW_WITH_EPISODES,
  GET_SHOW_WITH_EPISODES_SUCCESS,
  GET_SHOW_WITH_EPISODES_FAIL,
  GET_EPISODES_DETAILS,
  GET_EPISODES_DETAILS_SUCCESS,
  GET_EPISODES_DETAILS_FAIL
} from './actionTypes';
import * as api from '../api';
import { powerpuffGirlsShowId } from '../config';

function* getShowDetails() {
  try {
    const data = yield call(api.retrieveShowWithEpisodesList, powerpuffGirlsShowId);
    yield put({ type: GET_SHOW_WITH_EPISODES_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: GET_SHOW_WITH_EPISODES_FAIL, error });
  }
}

function* watchGetShowDetails() {
  yield takeLatest(GET_SHOW_WITH_EPISODES, getShowDetails);
}

function* getEpisodesDetails(action) {
  try {
    const { season, number } = action.payload;
    const data = yield call(api.retrieveEpisode, ...[powerpuffGirlsShowId, season, number]);
    yield put({ type: GET_EPISODES_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    yield put({ type: GET_EPISODES_DETAILS_FAIL, error });
  }
}

function* watchGetEpisodesDetails() {
  yield takeLatest(GET_EPISODES_DETAILS, getEpisodesDetails);
}

export default function* rootSaga() {
  yield all([
    watchGetShowDetails(),
    watchGetEpisodesDetails()
  ]);
}
