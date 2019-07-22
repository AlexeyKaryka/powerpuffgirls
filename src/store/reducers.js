import { GET_SHOW_WITH_EPISODES_SUCCESS, GET_EPISODES_DETAILS_SUCCESS } from './actionTypes';

const initialState = {
  showName: "",
  showImg: "",
  showSummary: "",
  showNetwork: "",
  showStatus: "",
  showType: "",
  showGenres: [],
  showOfficialSite: "",
  showRating: null,
  showEpisodes: [],
  episodeName: "",
  episodeImg: "",
  episodeSummary: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SHOW_WITH_EPISODES_SUCCESS:
      const { name, image, summary, network, status, type, genres, officialSite, rating } = action.payload[0];
      // Just to limit list size in order not to implement paging since it's a bit time consuming
      const episodes = action.payload[1].slice(0, 10);

      return {
        ...state,
        showName: name,
        showImg: image && image.medium ? image.medium : "",
        showSummary: summary,
        showNetwork: network && network.name ? network.name : "",
        showStatus: status,
        showType: type,
        showGenres: genres,
        showOfficialSite: officialSite,
        showRating: rating && rating.average ? rating.average : "",
        showEpisodes: episodes
      }
    
    case GET_EPISODES_DETAILS_SUCCESS:
      const { name: episodeName, image: episodeImg, summary: episodeSummary } = action.payload;

      return {
        ...state,
        episodeName,
        episodeImg: episodeImg && episodeImg.medium ? episodeImg.medium : "",
        episodeSummary
      }

    default:
      return state;
  }
 }