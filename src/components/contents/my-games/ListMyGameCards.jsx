import React from 'react';
import PropTypes from 'prop-types';
import MyGameCard from './MyGameCard';

const ListMyGameCards = ({ value }) => {
  if (localStorage.length === 0) {
    return (
      <div className="alert">
        Vous n'avez pas encore de jeux dans votre bibliothèque,
        <span>vous pouvez en ajouter ici</span>
      </div>
    );
  }

  const displayMyGameCard2 = () =>
    new Array(localStorage.length).fill().map((data, i) => {
      let test = JSON.parse(window.localStorage.getItem(localStorage.key(i))).title;

      if (value && test.toUpperCase().includes(value.toUpperCase())) {
        return (
          <div>
            <MyGameCard
              name={JSON.parse(window.localStorage.getItem(localStorage.key(i))).title}
              url={JSON.parse(window.localStorage.getItem(localStorage.key(i))).img}
              key={`my-game-${JSON.parse(window.localStorage.getItem(localStorage.key(i))).title}`}
            />
          </div>
        );
      }

      if (!value) {
        return (
          <div>
            <MyGameCard
              name={JSON.parse(window.localStorage.getItem(localStorage.key(i))).title}
              url={JSON.parse(window.localStorage.getItem(localStorage.key(i))).img}
              key={`my-game-${JSON.parse(window.localStorage.getItem(localStorage.key(i))).title}`}
            />
          </div>
        );
      }
    });
  return <div className="grid-cards-display">{displayMyGameCard2()}</div>;
};

ListMyGameCards.propTypes = {
  value: PropTypes.string.isRequired
};
export default ListMyGameCards;
