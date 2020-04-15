import React from 'react';
// import PropTypes from 'prop-types';
import ListMyGameCards from './my-games/ListMyGameCards';
import Filters from './filter/Filters';
import './mygames.scss';

const MyGames = props => {
  const { value, handleChange } = props;
  return (
    <div className="my-games">
      <Filters value={value} handleChange={handleChange} />
      <ListMyGameCards value={value} />
    </div>
  );
};

// MyGames.propTypes = {};

export default MyGames;
