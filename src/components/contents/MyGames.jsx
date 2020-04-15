import React from 'react';
// import PropTypes from 'prop-types';
import ListMyGameCards from './my-games/ListMyGameCards';
import Filters from './filter/Filters';
import './mygames.scss';

const MyGames = () => {
  return (
    <div className="my-games">
      <Filters />
      <ListMyGameCards />
    </div>
  );
};

// MyGames.propTypes = {};

export default MyGames;
