import React from 'react';
import PropTypes from 'prop-types';
import MyGameCard from './MyGameCard';

const ListMyGameCards = ({ value, listGamesLib, gameToRemove }) => {
  if (listGamesLib.length === 0) {
    return (
      <div className="alert">
        Vous n&apos;avez pas encore de jeux dans votre bibliothèque,
        <span>vous pouvez en ajouter ici</span>
      </div>
    );
  }
  const displayMyGameCard2 = () =>
    listGamesLib.map((data, i) => {
      const gamesNameLSt = data.title;

      if (value && gamesNameLSt.toUpperCase().includes(value.toUpperCase())) {
        return (
          <div key={i}>
            <MyGameCard data={data} gameToRemove={gameToRemove} />
          </div>
        );
      }

      if (!value) {
        return (
          <div key={i}>
            <MyGameCard data={data} gameToRemove={gameToRemove} />
          </div>
        );
      }
    });

  return <div className="grid-cards-display">{displayMyGameCard2()}</div>;
};

ListMyGameCards.propTypes = {
  value: PropTypes.string,
  listGamesLib: PropTypes.array.isRequired
};
export default ListMyGameCards;
