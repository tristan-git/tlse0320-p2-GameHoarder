import React from 'react';
import './MyGameCard.scss';
import DisplayRating from './DisplayRating';
import PropTypes from 'prop-types';

function MyGameCard(props) {
  const { img, title, rating } = props.data;
  return (
    <section className="Card">
      <div className="header">
        <h3>{title}</h3>
        <button onClick={() => props.gameToRemove(title)} className="close-btn" type="submit">
          <img
            src="./img/svg/delete-black.svg"
            alt="delete"
            style={{ backgroundColor: 'transparent' }}
          />
        </button>
      </div>
      <div className="image" style={{ backgroundImage: `url(${img[0]})` }} />
      <div className="footer">
        <div className="ratingSuggestion">
          <DisplayRating rating={rating} />
        </div>

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
  url: PropTypes.string.isRequired,
  gameToRemove: PropTypes.func.isRequired
};
export default MyGameCard;
