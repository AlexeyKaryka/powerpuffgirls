import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import { powerpuffGirlsShowId } from '../config';
import { apiUrl, showPath, episodesPath, episodePath } from '../api/config';
import {
  fetchShowWithEpisodesAction,
  fetchEpisodeDetailsAction,
  GET_SHOW_WITH_EPISODES,
  GET_EPISODES_DETAILS
} from './actions';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  test('fetchShowWithEpisodesAction returns correct action', async () => {
    fetchMock.getOnce(`${apiUrl}${showPath}/${powerpuffGirlsShowId}`, {
      body: { data: ['test data for show'] },
      headers: { 'content-type': 'application/json' }
    })
    fetchMock.getOnce(`${apiUrl}${showPath}/${powerpuffGirlsShowId}${episodesPath}`, {
      body: { data: ['test data for episodes list'] },
      headers: { 'content-type': 'application/json' }
    })

    const expectedActions = [{
        type: GET_SHOW_WITH_EPISODES,
        payload: [
          { data: ['test data for show'] },
          { data: ['test data for episodes list']}
        ]
    }]
    const store = mockStore({ todos: [] })

    await store.dispatch(fetchShowWithEpisodesAction());
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('fetchEpisodeDetailsAction returns correct action', async () => {
    const testSeason = 1;
    const testNumber = 1;

    fetchMock.getOnce(`${apiUrl}${showPath}/${powerpuffGirlsShowId}${episodePath}?season=${testSeason}&number=${testNumber}`, {
      body: { data: ['test data for episode details'] },
      headers: { 'content-type': 'application/json' }
    })

    const expectedActions = [{
        type: GET_EPISODES_DETAILS,
        payload: { data: ['test data for episode details'] }
    }]
    const store = mockStore({ todos: [] })

    await store.dispatch(fetchEpisodeDetailsAction(testSeason, testNumber));
    expect(store.getActions()).toEqual(expectedActions);
  });
})