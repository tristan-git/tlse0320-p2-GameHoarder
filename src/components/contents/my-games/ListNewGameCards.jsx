import React from 'react';
// import PropTypes from 'prop-types'
import NewGameCard from './NewGameCard';

const ListNewGameCards = () => {
  return (
    <div className="grid-cards-display">
      <div>
        <NewGameCard />
      </div>
      <div>
        <NewGameCard />
      </div>
      <div>
        <NewGameCard />
      </div>
      <div>
        <NewGameCard />
      </div>
      <div>
        <NewGameCard />
      </div>
      <div>
        <NewGameCard />
      </div>
    </div>
  );
};

//  ListNewGameCards.propTypes = {

// }

export default ListNewGameCards;
