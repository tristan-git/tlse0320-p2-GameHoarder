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
    listGamesLib
      .sort((a, b) => new Date(b.addingDate) - new Date(a.addingDate))
      .map((data, i) => {
        // const gamesNameLSt = JSON.parse(localStorage.getItem(localStorage.key(i))).title;

        // if (value && gamesNameLSt.toUpperCase().includes(value.toUpperCase())) {
        return (
          <div>
            <MyGameCard
              data={data}
              key={i}
              gameToRemove={gameToRemove}
              listGamesLib={listGamesLib}
            />
          </div>
        );
      });
  return <div className="grid-cards-display">{displayMyGameCard2()}</div>;
};

//   if (!value){
//     return (
//       <div>
//         <MyGameCard
//           rating={JSON.parse(localStorage.getItem(localStorage.key(i))).rating}
//           id={JSON.parse(localStorage.getItem(localStorage.key(i))).id}
//           name={JSON.parse(localStorage.getItem(localStorage.key(i))).title}
//           url={JSON.parse(localStorage.getItem(localStorage.key(i))).img}
//           key={`my-game-${JSON.parse(localStorage.getItem(localStorage.key(i))).title}`}
//           handleGameDelete={handleGameDelete}
//         />
//       </div>
//     );
// });

ListMyGameCards.propTypes = {
  value: PropTypes.string.isRequired,
  listGamesLib: PropTypes.array.isRequired
};
export default ListMyGameCards;
