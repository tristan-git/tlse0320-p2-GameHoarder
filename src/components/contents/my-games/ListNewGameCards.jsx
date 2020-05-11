import React from 'react';
import PropTypes from 'prop-types';
import NewGameCard from './NewGameCard';
import games from '../../data/games.json';

const ListNewGameCards = ({ value, handleGamesList }) => {
  const displayNewGameCards = value =>
    games
      .filter(game => (value ? game.name.toUpperCase().includes(value.toUpperCase()) : game))
      .map(game => (
        <div>
          <NewGameCard {...game} handleGamesList={handleGamesList} key={`new-game-${game.name}`} />
        </div>
      ));

  return <div className="grid-cards-display">{displayNewGameCards(value)}</div>;
};

ListNewGameCards.propTypes = {
  value: PropTypes.string.isRequired,
  handleGamesList: PropTypes.func.isRequired
};

export default ListNewGameCards;
