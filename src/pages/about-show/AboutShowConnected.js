import { connect } from 'react-redux';
import { fetchShowWithEpisodesAction } from '../../store/actions';
import AboutShow from './AboutShow';

const mapStateToProps = state => ({
  name: state.showName,
  img: state.showImg,
  summary: state.showSummary,
  network: state.showNetwork,
  status: state.showStatus,
  type: state.showType,
  genres: state.showGenres,
  officialSite: state.showOfficialSite,
  rating: state.showRating,
  episodes: state.showEpisodes
})
const mapDispatchToProps = dispatch => ({
  fetchShowWithEpisodes: () => dispatch(fetchShowWithEpisodesAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(AboutShow);