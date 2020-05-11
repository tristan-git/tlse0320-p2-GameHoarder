import React from 'react';
import TopThreeGame from './TopThreeGame';
import games from '../../data/games.json';

function ListTopThreeGames({ handleGamesList }) {
  let ascendingGameRating = [...games];
  ascendingGameRating = ascendingGameRating.sort(function sort(a, b) {
    return b.rating - a.rating;
  });
  const topThree = ascendingGameRating.splice(0, 3);

  const listTopThree = () =>
    topThree.map(game => (
      <TopThreeGame
        name={game.name}
        handleGamesList={handleGamesList}
        rating={game.rating}
        url={game.url}
        key={`top-${game.name}`}
      />
    ));

  return <div className="container-list-top-five">{listTopThree()}</div>;
}

export default ListTopThreeGames;
