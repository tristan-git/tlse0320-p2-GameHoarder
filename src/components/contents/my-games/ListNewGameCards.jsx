import React from 'react';
import PropTypes from 'prop-types';
import NewGameCard from './NewGameCard';

const ListNewGameCards = ({
  value,
  handleGamesList,
  games,
  handleWishlistGame,
  listGamesLib,
  handleRemoveWishlistGame,
  handleremoveDataGame
}) => {
  const displayNewGameCards = value =>
    games
      .filter(game => (value ? game.name.toUpperCase().includes(value.toUpperCase()) : game))
      .map(game => (
        <div key={game.id}>
          <NewGameCard
            {...game}
            listGamesLib={listGamesLib}
            key={`new-game-${game.name}`}
            handleWishlistGame={handleWishlistGame}
            handleGamesList={handleGamesList}
            handleRemoveWishlistGame={handleRemoveWishlistGame}
            handleremoveDataGame={handleremoveDataGame}
          />
        </div>
      ));

  return <div className="grid-cards-display">{displayNewGameCards(value)}</div>;
};

ListNewGameCards.propTypes = {
  value: PropTypes.string.isRequired,
  games: PropTypes.string.isRequired,
  handleGamesList: PropTypes.func.isRequired,
  handleWishlistGame: PropTypes.func.isRequired,
  listGamesLib: PropTypes.func.isRequired,
  handleRemoveWishlistGame: PropTypes.func.isRequired,
  handleremoveDataGame: PropTypes.func.isRequired
};

export default ListNewGameCards;
