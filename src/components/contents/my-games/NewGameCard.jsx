import React from 'react';
// import StarRating from './StarRating';
import PropTypes from 'prop-types';

class NewGameCard extends React.Component {
  constructor(props) {
    super(props);
  }

  getDataGame(event) {
    const getDataNode = event.target.parentNode.parentNode;
    const img = getDataNode.children[1].style.cssText;
    const title = getDataNode.children[0].children[0].innerText;
    const values = {
      title,
      img
    };
    localStorage.setItem(title, JSON.stringify(values));
  }

  render() {
    const { name } = this.props;
    const { url } = this.props;

    return (
      <section className="Card">
        <div className="header">
          <h3>{name}</h3>
          <p>note</p>
        </div>
        <div className="image" style={{ backgroundImage: `url(${url})` }} />
        <div className="footer">
          <button className="add-btn" type="submit" onClick={this.getDataGame}>
            Ajouter à ma bibliothèque
          </button>
        </div>
      </section>
    );
  }
}

NewGameCard.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default NewGameCard;
