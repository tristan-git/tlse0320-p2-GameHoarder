import React from 'react';
// import PropTypes from 'prop-types'
import MyGameCard from './MyGameCard';

const ListMyGameCards = () => {
  return (
    <div className="grid-cards-display">
      <div>
        <MyGameCard />
      </div>
      <div>
        <MyGameCard />
      </div>
      <div>
        <MyGameCard />
      </div>
      <div>
        <MyGameCard />
      </div>
      <div>
        <MyGameCard />
      </div>
      <div>
        <MyGameCard />
      </div>
    </div>
  );
};

// ListMyGameCards.propTypes = {

// }

export default ListMyGameCards;
