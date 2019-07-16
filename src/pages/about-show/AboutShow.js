import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ShowInfo from "./ShowInfo";
import EpisodesList from "./EpisodesList";
import './AboutShow.scss';


function AboutShow(props) {
  const {
    fetchShowWithEpisodes,
    name,
    summary,
    img,
    network,
    status,
    type,
    genres,
    officialSite,
    rating,
    episodes
  } = props;

  useEffect(() => {
    fetchShowWithEpisodes();
  }, [fetchShowWithEpisodes]);

  return (
    <div className="container">
      <h2>
        {name}
      </h2>
      <div className="descriptionBlock">
        <img className="showImg" src={img} alt="show"/>
        <div className="descriptionText" dangerouslySetInnerHTML={{__html: summary}} />
        <ShowInfo
          network={network}
          status={status}
          showType={type}
          genres={genres}
          officialSite={officialSite}
          rating={rating}
        />
      </div>
      <EpisodesList episodes={episodes}/>
    </div>
  );
}

AboutShow.propTypes = {
  fetchShowWithEpisodes: PropTypes.func,
  name: PropTypes.string,
  summary: PropTypes.string,
  img: PropTypes.string,
  network: PropTypes.string,
  status: PropTypes.string,
  type: PropTypes.string,
  genres: PropTypes.array,
  officialSite: PropTypes.string,
  rating: PropTypes.number,
  episodes: PropTypes.array
}

export default AboutShow;