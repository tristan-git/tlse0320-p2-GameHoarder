import React from 'react';
import PropTypes from 'prop-types';
import MyGameCard from './MyGameCard';

const ListMyGameCards = ({ value }) => {
  const displayMyGameCard2 = value =>
    new Array(localStorage.length).fill().map((data, i) => (
      <div>
        <MyGameCard
          name={JSON.parse(window.localStorage.getItem(localStorage.key(i))).title}
          url={JSON.parse(window.localStorage.getItem(localStorage.key(i))).img}
          key={`my-game-${JSON.parse(window.localStorage.getItem(localStorage.key(i))).title}`}
        />
      </div>
    ));

  return <div className="grid-cards-display">{displayMyGameCard2()}</div>;
};

ListMyGameCards.propTypes = {
  value: PropTypes.string.isRequired
};
export default ListMyGameCards;
