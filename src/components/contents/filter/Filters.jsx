import React from 'react';
// import PropTypes from 'prop-types';

import './filter.scss';

function Filters(props) {
  const { value, handleChange } = props;
  return (
    <div className="filter-container">
      <div className="input-filter">
        <input value={value} onChange={handleChange} />
      </div>
      {/* <div>valeur value input recherche = {value}</div> */}
    </div>
  );
}

// Filters.propTypes = {};

export default Filters;
