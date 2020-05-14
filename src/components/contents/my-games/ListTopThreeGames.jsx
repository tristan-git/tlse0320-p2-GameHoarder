import React from 'react';
import PropTypes from 'prop-types';
import TopThreeGame from './TopThreeGame';

function ListTopThreeGames({
  handleGamesList,
  games,
  handleWishlistGame,
  listGamesLib,
  handleRemoveWishlistGame,
  handleremoveDataGame
}) {
  let ascendingGameRating = [...games];
  ascendingGameRating = ascendingGameRating.sort(function sort(a, b) {
    return b.popularity - a.popularity;
  });
  const topThree = ascendingGameRating.splice(0, 3);

  const listTopThree = () =>
    topThree.map(game => (
      <TopThreeGame
        name={game.name}
        handleGamesList={handleGamesList}
        handleWishlistGame={handleWishlistGame}
        rating={game.rating}
        url={game.url}
        key={`top-${game.name}`}
        platformsName={game.platformsName}
        listGamesLib={listGamesLib}
        handleRemoveWishlistGame={handleRemoveWishlistGame}
        handleremoveDataGame={handleremoveDataGame}
      />
    ));

  return <div className="container-list-top-five">{listTopThree()}</div>;
}

ListTopThreeGames.propTypes = {
  handleGamesList: PropTypes.func.isRequired,
  games: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleWishlistGame: PropTypes.func.isRequired,
  listGamesLib: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleRemoveWishlistGame: PropTypes.func.isRequired,
  handleremoveDataGame: PropTypes.func.isRequired
};

export default ListTopThreeGames;
