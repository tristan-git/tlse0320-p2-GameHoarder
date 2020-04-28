import React from 'react';
import PropTypes from 'prop-types';
import ListNewGameCards from './my-games/ListNewGameCards';
import Filters from './filter/Filters';
import './newgames.scss';
import Title from './title/Title';

function NewGames({ value, handleChange }) {
  return (
    <div className="new-games" id="newGames">
      <Title title="Ajouter des " span="jeux" />
      <Filters value={value} handleChange={handleChange} location="newgameInputValue" />
      <ListNewGameCards value={value} />
    </div>
  );
}

NewGames.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};
export default NewGames;
