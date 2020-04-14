import React from 'react';
// import PropTypes from 'prop-types';
import ListMyGameCards from './my-games/ListMyGameCards';
import './mygames.scss';

const MyGames = () => {
  return (
    <div className="my-games">
      <ListMyGameCards />
    </div>
  );
};

// MyGames.propTypes = {};

export default MyGames;
