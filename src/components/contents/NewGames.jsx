import React from 'react';
import PropTypes from 'prop-types';
import ListNewGameCards from './my-games/ListNewGameCards';
import ListTopFiveGames from './my-games/ListTopFiveGames';
import Filters from './filter/Filters';
import Title from './title/Title';
import './newgames.scss';

function NewGames({ value, handleChange }) {
  return (
    <div className="new-games">
      <Filters value={value} handleChange={handleChange} location="newgameInputValue" />
      <ListNewGameCards value={value} />

      <div className="container-top-five">
        <Title title="Les jeux " span="du moment" />
        <ListTopFiveGames />
      </div>
    </div>
  );
}

NewGames.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};
export default NewGames;
