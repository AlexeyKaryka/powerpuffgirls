import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { episodeDetails } from '../../../router/routes';
import './EpisodesList.scss';

function EpisodesList(props) {
  const { episodes } = props;

  return (
    <Fragment>
      <h3>
        List of episodes:
      </h3>
      <ul className="episodesList">
        {episodes.map(episode => {
          const { name, number, season } = episode;
          return (
            <li key={name} className="episodeItem">
              <Link className="episodeLink" to={`${episodeDetails}/${season}/${number}`}>{name}</Link>
              <div className="episodeInfoChunk">Episode number: {number}</div>
              <div className="episodeInfoChunk">Season: {season}</div>
            </li>
          )
        })}
      </ul>
    </Fragment>
  );
}

EpisodesList.propTypes = {
  episodes: PropTypes.array
};
EpisodesList.defaultProps = {
  episodes: []
};

export default EpisodesList;
