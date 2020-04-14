import React from 'react';
// import PropTypes from 'prop-types';
import ListNewGameCards from './my-games/ListNewGameCards';
import './newgames.scss';

const NewGames = () => {
  return (
    <div className="new-games">
      <ListNewGameCards />
    </div>
  );
};

// NewGames.propTypes = {};

export default NewGames;
