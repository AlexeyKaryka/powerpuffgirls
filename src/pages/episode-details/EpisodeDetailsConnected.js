import { connect } from 'react-redux';
import { fetchEpisodeDetailsAction } from '../../store/actions';
import EpisodeDetails from './EpisodeDetails';

const mapStateToProps = state => ({
  name: state.episodeName,
  img: state.episodeImg,
  summary: state.episodeSummary
})
const mapDispatchToProps = dispatch => ({
  fetchEpisodeDetails: (season, number) => dispatch(fetchEpisodeDetailsAction(season, number))
})

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeDetails);