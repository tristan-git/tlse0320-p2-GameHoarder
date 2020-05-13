import React from 'react';
import TopThreeGame from './TopThreeGame';

function ListTopThreeGames({ handleGamesList, games, handleWishlistGame }) {
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
      />
    ));

  return <div className="container-list-top-five">{listTopThree()}</div>;
}

export default ListTopThreeGames;
