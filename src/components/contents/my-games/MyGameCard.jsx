import React from 'react';
import './MyGameCard.scss';
import PropTypes from 'prop-types';

function MyGameCard(props) {
  const { img, title } = props.data;
  return (
    <section className="Card">
      <div className="header">
        <h3>{title}</h3>
        <button onClick={() => props.gameToRemove(title)} className="close-btn" type="submit">
          X
        </button>
      </div>
      <div className="image" style={{ backgroundImage: `url(${img})` }} />
      <div className="footer">
        <select name="statuts" className="statuts">
          <option value="Statuts">STATUTS</option>
          <option value="Pas commencé">Pas commencé</option>
          <option value="En cours">En cours</option>
          <option value="Terminé">Terminé</option>
        </select>
      </div>
    </section>
  );
}

MyGameCard.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};
export default MyGameCard;
