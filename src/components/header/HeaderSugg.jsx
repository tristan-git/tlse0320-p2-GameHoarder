import React from 'react';
import './header.scss';
import games from '../data/games.json';
// import PropTypes from 'prop-types';
// import StarRating from '../contents/my-games/StarRating';

function HeaderSugg() {
  return (
    <div className="HeaderSugg" style={{ backgroundImage: `url(${games[0].url})` }}>
      <img src="./img/logo.svg" alt="logo icon" />
      <div className="infoHeaderContainerSugg">
        <div className="crossLineSugg">{/* <StarRating /> */}</div>
        <h1>Notre suggestion</h1>
        <h2>{games[0].name}</h2>
        <button className="crossContainerSugg" type="button">
          PLUS
        </button>
      </div>
      {/* fonctionnalité supp */}
    </div>
  );
}

export default HeaderSugg;
