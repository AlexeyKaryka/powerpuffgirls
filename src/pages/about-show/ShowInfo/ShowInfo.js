import React from 'react';
import PropTypes from 'prop-types';
import './ShowInfo.scss';

function ShowInfo(props) {
  const {
    network,
    status,
    showType,
    genres,
    officialSite,
    rating
  } = props;

  const getShowItem = (title, value) => {
    return (
      <div className="showInfoItemBlock">
        <h4 className="showInfoItemTitle">
          {`${title}:`}
        </h4>
        <div>{value}</div>
      </div>
    )
  }

  const processShowUrl = stringifiedUrl => {
    try {
      const urlObject = new URL(stringifiedUrl);
      return (
        <a href={stringifiedUrl}>{urlObject.host}</a>
      )
    } catch {
      return "";
    }
  }

  const processGenresValue = genresArray => {
    return genresArray.join(' | ');
  }

  return (
    <div className="showInfoBlock">
      <h3 className="showInfoHeading">
        Show info:  
      </h3>
      {getShowItem('Network', network)}
      {getShowItem('Status', status)}
      {getShowItem('Show Type', showType)}
      {getShowItem('Genres', processGenresValue(genres))}
      {getShowItem('Official Site', processShowUrl(officialSite))}
      {getShowItem('Rating', rating)}
    </div>
  );
}

ShowInfo.propTypes = {
  network: PropTypes.string,
  status: PropTypes.string,
  showType: PropTypes.string,
  genres: PropTypes.array,
  officialSite: PropTypes.string,
  rating: PropTypes.number
}

export default ShowInfo;