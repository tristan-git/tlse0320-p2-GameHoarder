import React from 'react';
import PropTypes from 'prop-types';
import NewGameCard from './NewGameCard';

const ListNewGameCards = ({ value, games }) => {
  const displayNewGameCards = value =>
    games
      .filter(game => (value ? game.name.toUpperCase().includes(value.toUpperCase()) : game))
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
