import React from 'react';
// import PropTypes from 'prop-types';
import ListNewGameCards from './my-games/ListNewGameCards';
import Filters from './filter/Filters';
import './newgames.scss';

function NewGames(props) {
  const { value, handleChange } = props;

  return (
    <div className="new-games">
      <Filters value={value} handleChange={handleChange} />
      <ListNewGameCards value={value} />
    </div>
  );
}

// NewGames.propTypes = {};

export default NewGames;
