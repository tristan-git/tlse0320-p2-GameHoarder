import React from 'react';
import PropTypes from 'prop-types';
import TopFiveGames from './TopFiveGames';
import games from '../../data/games.json';

function ListTopFiveGames(props) {
  let ascendingGameRating = [...games];
  ascendingGameRating = ascendingGameRating.sort(function(a, b) {
    return b.rating - a.rating;
  });
  const topThree = ascendingGameRating.splice(0, 3);
  const listTopThree = () => topThree.map(game => <TopFiveGames {...game} />);

  return <div className="container-list-top-five">{listTopThree()}</div>;
}

ListTopFiveGames.propTypes = {};

export default ListTopFiveGames;
