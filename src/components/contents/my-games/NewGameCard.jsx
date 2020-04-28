import React from 'react';
import PropTypes from 'prop-types';

class NewGameCard extends React.Component {
  constructor(props) {
    super(props);
    this.getDataGame = this.getDataGame.bind(this);
  }

  getDataGame() {
    const img = this.props.url;
    const title = this.props.name;
    const { rating } = this.props;

    const values = {
      title,
      img,
      rating
    };

    localStorage.setItem(title, JSON.stringify(values));
  }

  render() {
    const { rating, name, url } = this.props;
    return (
      <div className="Card">
        <div className="ImageCard" style={{ backgroundImage: `url(${url})` }} />
        <div className="GameInfo">
          <div className="GameInfoTitle">
            <h3 className="GameName">{name}</h3>
            <div className="ButtonAddWishlist">Wishlist</div>
          </div>
          <p className="GameSupport">Game support</p>
          <div className="GameRating">{rating / 10 / 2}</div>
          <div className="ButtonAddLibrary" onClick={this.getDataGame}>
            Ajouter à ma bibliothèque
          </div>
        </div>
      </div>
    );
  }
}
NewGameCard.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired
};

export default NewGameCard;
