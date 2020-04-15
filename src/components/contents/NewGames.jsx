import React from 'react';
import PropTypes from 'prop-types';
import ListNewGameCards from './my-games/ListNewGameCards';
import Filters from './filter/Filters';
import './newgames.scss';

function NewGames({ value, handleChange }) {
  return (
    <div className="new-games">
      <Filters value={value} handleChange={handleChange} location={'mew-game'} />
      <ListNewGameCards value={value} />
    </div>
  );
}

NewGames.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};
export default NewGames;
