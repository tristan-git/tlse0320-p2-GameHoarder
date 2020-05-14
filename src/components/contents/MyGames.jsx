import React from 'react';
import PropTypes from 'prop-types';
import ListMyGameCards from './my-games/ListMyGameCards';
import Filters from './filter/Filters';
import Title from './title/Title';
import './mygames.scss';

const MyGames = ({ value, handleChange, gameToRemove, listGamesLib, handleChangeStatue }) => {
  return (
    <div className="my-games container-box">
      <Title title="Ma bibliothèque " span="de jeux" />
      <Filters value={value} handleChange={handleChange} location="mygameInputValue" />
      <ListMyGameCards
        gameToRemove={gameToRemove}
        value={value}
        listGamesLib={listGamesLib}
        handleChangeStatue={handleChangeStatue}
      />
    </div>
  );
};

MyGames.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  listGamesLib: PropTypes.func.isRequired,
  gameToRemove: PropTypes.func.isRequired
};

export default MyGames;
