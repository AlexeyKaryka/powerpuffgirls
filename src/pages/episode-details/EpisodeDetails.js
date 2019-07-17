import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './EpisodeDetails.scss';


function EpisodeDetails(props) {
  const {
    match: { params: { season, number } },
    name,
    img,
    summary,
    fetchEpisodeDetails
  } = props;

  useEffect(() => {
    fetchEpisodeDetails(season, number);
  }, [season, number, fetchEpisodeDetails]);

  return (
    <div className="container">
      <h2>
        {name}
      </h2>
      <div className="descriptionBlock">
        <img className="showImg" src={img} alt="show"/>
        <div className="descriptionText" dangerouslySetInnerHTML={{__html: summary}} />
      </div>
    </div>
  );
}

EpisodeDetails.propTypes = {
  match: PropTypes.object,
  episodeName: PropTypes.string,
  episodeImg: PropTypes.string,
  episodeSummary: PropTypes.string,
  fetchEpisodeDetails: PropTypes.func
}

export default EpisodeDetails;