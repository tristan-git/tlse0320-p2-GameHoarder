import React from 'react';
// import PropTypes from 'prop-types'
import NewGameCard from './NewGameCard';
import games from '../../data/games.json';

const ListNewGameCards = props => {
  const { value } = props;
  const displayNewGameCards = value =>
    games
      .filter(game => game.name.includes(value))
      .map(game => (
        <div>
          <NewGameCard {...game} />
        </div>
      ));

  return <div className="grid-cards-display">{displayNewGameCards(value)}</div>;
};

//  ListNewGameCards.propTypes = {

// }

export default ListNewGameCards;
