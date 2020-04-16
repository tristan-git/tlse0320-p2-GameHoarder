import React from 'react';
import PropTypes from 'prop-types';
import NewGameCard from './NewGameCard';
import games from '../../data/games.json';

const ListNewGameCards = ({ value }) => {
  const displayNewGameCards = value =>
    games
      .filter(game => (value ? game.name.includes(value) : game))
      .map(game => (
        <div>
          <NewGameCard {...game} key={`new-game-${game.name}`} />
        </div>
      ));

  return <div className="grid-cards-display">{displayNewGameCards(value)}</div>;
};

ListNewGameCards.propTypes = {
  value: PropTypes.string.isRequired
};

export default ListNewGameCards;
