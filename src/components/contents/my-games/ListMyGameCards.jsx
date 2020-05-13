import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import MyGameCard from './MyGameCard';

const ListMyGameCards = ({ value, listGamesLib, gameToRemove }) => {
  if (listGamesLib.filter(el => el.addToLib).length === 0) {
    return (
      <div className="alert">
        Vous n&apos;avez pas encore de jeux dans votre bibliothèque,
        <span>
          <NavLink to="/ajouter-un-jeu">vous pouvez en ajouter ici</NavLink>
        </span>
      </div>
    );
  }
  const displayMyGameCard2 = () =>
    listGamesLib
      .filter(game => game.addToLib)
      .map((data, i) => {
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
  value: PropTypes.string.isRequired,
  listGamesLib: PropTypes.string.isRequired,
  gameToRemove: PropTypes.func.isRequired
};
export default ListMyGameCards;
