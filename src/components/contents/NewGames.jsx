import React from 'react';
import PropTypes from 'prop-types';
import ListNewGameCards from './my-games/ListNewGameCards';
import ListTopThreeGames from './my-games/ListTopThreeGames';
import Filters from './filter/Filters';
import Title from './title/Title';
import './newgames.scss';

function NewGames({ value, handleChange }) {
  return (
    <div className="new-games">
      <div className="container-box">
        <Filters value={value} handleChange={handleChange} location="newgameInputValue" />
        <ListNewGameCards value={value} />
      </div>
      <div className="container-top-five">
        <div className="container-box">
          <Title title="Les jeux " span="du moment" />
          <ListTopThreeGames />
        </div>
      </div>
    </div>
  );
}

NewGames.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};
export default NewGames;
