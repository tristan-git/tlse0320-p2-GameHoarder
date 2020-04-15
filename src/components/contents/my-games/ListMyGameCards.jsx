import React from 'react';
import PropTypes from 'prop-types';
import MyGameCard from './MyGameCard';
import games from '../../data/games.json';

const ListMyGameCards = props => {
  const { value } = props;
  const displayMyGameCard = value =>
    games
      .filter(game => game.name.includes(value))
      .map(game => (
        <div>
          <MyGameCard {...game} key={`my-game-${game.name}`} />
        </div>
      ));

  return <div className="grid-cards-display">{displayMyGameCard(value)}</div>;
};

ListMyGameCards.propTypes = {
  value: PropTypes.string.isRequired
};
export default ListMyGameCards;
