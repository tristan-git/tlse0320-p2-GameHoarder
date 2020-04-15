import React from 'react';
// import PropTypes from 'prop-types'
import MyGameCard from './MyGameCard';

const ListMyGameCards = () => {
  return (
    <div className="grid-cards-display">
      <div>
        <MyGameCard
          name="Who Wants to be a Millionaire: 1st Edition"
          url="//images.igdb.com/igdb/image/upload/t_thumb/haz3ksilxulos1kcdpux.jpg"
        />
      </div>
      <div>
        <MyGameCard
          name="Woodpunk"
          url="//images.igdb.com/igdb/image/upload/t_thumb/yvepazkit8g5bcmeur7b.jpg"
        />
      </div>
      <div>
        <MyGameCard
          name="Oppai Puzzle"
          url="//images.igdb.com/igdb/image/upload/t_thumb/s4ymcvgk9lhmapvaeprl.jpg"
        />
      </div>
      <div>
        <MyGameCard
          name="Panzer Corps"
          url="//images.igdb.com/igdb/image/upload/t_thumb/efukb4yrq64r659oujwa.jpg"
        />
      </div>
      <div>
        <MyGameCard
          name="DreadEye VR"
          url="//images.igdb.com/igdb/image/upload/t_thumb/ptxwv7se4ponk3eo9wqr.jpg"
        />
      </div>
      <div>
        <MyGameCard
          name="Beasts of Bermuda"
          url="//images.igdb.com/igdb/image/upload/t_thumb/omzxoh8snokejg2psykk.jpg"
        />
      </div>
    </div>
  );
};

// ListMyGameCards.propTypes = {

// }

export default ListMyGameCards;
