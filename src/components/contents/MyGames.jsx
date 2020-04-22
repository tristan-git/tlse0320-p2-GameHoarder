import React from 'react';
import PropTypes from 'prop-types';
import ListMyGameCards from './my-games/ListMyGameCards';
import Filters from './filter/Filters';
import './mygames.scss';

const MyGames = ({ value, handleChange }) => {
  return (
    <div className="my-games">
      <Filters value={value} handleChange={handleChange} location="mygameInputValue" />
      <ListMyGameCards value={value} />
    </div>
  );
};

MyGames.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default MyGames;
