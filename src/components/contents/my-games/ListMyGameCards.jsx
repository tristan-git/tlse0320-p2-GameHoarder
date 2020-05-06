import React from 'react';
import PropTypes from 'prop-types';
import MyGameCard from './MyGameCard';

const ListMyGameCards = ({ value, handleGameDelete, listGamesLib }) => {
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
      // const gamesNameLSt = JSON.parse(localStorage.getItem(localStorage.key(i))).title;

      // if (value && gamesNameLSt.toUpperCase().includes(value.toUpperCase())) {
      return (
        <div>
          <MyGameCard data={data} key={i} handleGameDelete={handleGameDelete} />
        </div>
      );
    });

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
  return <div className="grid-cards-display">{displayMyGameCard2()}</div>;
};

ListMyGameCards.propTypes = {
  value: PropTypes.string.isRequired
};
export default ListMyGameCards;
