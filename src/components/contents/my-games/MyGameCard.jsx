/* eslint-disable no-useless-constructor */
import React from 'react';
import './MyGameCard.scss';
import PropTypes from 'prop-types';
import StarRating from './StarRating';

class MyGameCard extends React.Component {
  constructor(props) {
    super(props);
  }

  getRemoveGame(event) {
    const getDataNode = event.target.parentNode.parentNode;
    const imgUrl = getDataNode.children[1].style.cssText;
    const title = getDataNode.children[0].children[0].innerText;
    const values = {
      title,
      imgUrl
    };
    localStorage.removeItem(title, JSON.stringify(values));
  }

  render() {
    const { url, name } = this.props;
    const urlImg = url.substring(23, url.length - 3);

    return (
      <section className="Card">
        <div className="header">
          <h3>{name}</h3>
          <button onClick={this.getRemoveGame} className="close-btn" type="submit">
            X
          </button>
        </div>
        <div className="image" style={{ backgroundImage: `url(${urlImg})` }} />
        <div className="footer">
          <StarRating className="Stars" />

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
}

MyGameCard.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};
export default MyGameCard;
