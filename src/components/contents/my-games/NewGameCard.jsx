import React from 'react';
import PropTypes from 'prop-types';

class NewGameCard extends React.Component {
  constructor(props) {
    super(props);
    this.getDataGame = this.getDataGame.bind(this);
  }

  getDataGame() {
    const { url: img, name: title, rating, handleGamesList, id } = this.props;
    const values = {
      addingDate: new Date(),
      title,
      img,
      rating,
      id,
      addToLib: true
    };
    handleGamesList(values);
  }

  render() {
    const newAr = this.props.listGamesLib.filter(game => game.title === this.props.name);
    const isAddToLib = newAr.length > 0 && newAr[0].addToLib;
    const { rating, name, url } = this.props;
    return (
      <div className="Card">
        <div className="ImageCard" style={{ backgroundImage: `url(${url[0]})` }} />
        <div className="GameInfo">
          <div className="GameInfoTitle">
            <h3 className="GameName">{name}</h3>
            <div className="ButtonAddWishlist">
              <img src="/img/svg/wishlist.svg" alt="icon whislist" />
            </div>
          </div>
          <p className="GameSupport">Game support</p>
          <div className="GameRating">{rating / 10 / 2}</div>
          <div className="ButtonAddLibrary" onClick={isAddToLib ? null : this.getDataGame}>
            <img
              src="/img/svg/add.svg"
              alt="icon add or delete library"
              style={isAddToLib ? { transform: 'rotate(45deg)' } : { transform: 'rotate(0deg)' }}
            />
            {isAddToLib ? 'Déjà dans votre bibliothèque.' : 'Ajouter à votre bibliothèque.'}
          </div>
        </div>
      </div>
    );
  }
}
NewGameCard.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  listGamesLib: PropTypes.object.isRequired
};

export default NewGameCard;
