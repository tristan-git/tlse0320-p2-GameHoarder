import React from 'react';
// import PropTypes from 'prop-types'
import NewGameCard from './NewGameCard';
import games from '../../data/games.json';

const displayNewGameCards = () =>
  games.map(game => (
    <div>
      <NewGameCard {...game} />
    </div>
  ));

const ListNewGameCards = () => {
  return <div className="grid-cards-display">{displayNewGameCards()}</div>;
};

//  ListNewGameCards.propTypes = {

// }

export default ListNewGameCards;
