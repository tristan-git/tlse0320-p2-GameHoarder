import React from 'react';
import PropTypes from 'prop-types';
import ListMyGameCards from './my-games/ListMyGameCards';
import Filters from './filter/Filters';
import Title from './title/Title';
import './mygames.scss';

const MyGames = ({ value, handleChange, gameToRemove, listGamesLib }) => {
  return (
    <div className="my-games container-box">
      <Title title="Ma bibliothèque " span="de jeux" />
      <Filters value={value} handleChange={handleChange} location="mygameInputValue" />
      <ListMyGameCards gameToRemove={gameToRemove} value={value} listGamesLib={listGamesLib} />
    </div>
  );
};

MyGames.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default MyGames;
