import React from 'react';
import PropTypes from 'prop-types';
import './MyGameCard';
// import DisplayRating from './DisplayRating';
import Modal from './Modal';

class NewGameCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      isWishlist: false
    };
    this.getDataGame = this.getDataGame.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.addToWishlist = this.addToWishlist.bind(this);
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

  addToWishlist() {
    const { url: img, name: title, rating, handleClick } = this.props;
    const values = {
      title,
      img,
      rating,
      isWishlist: true
    };
    handleClick(values);
  }

  hideModal() {
    this.setState({ show: false });
  }

  render() {
    const { rating, name, url, addToLib } = this.props;
    const { show, isWishlist } = this.state;
    return (
      <div className="Card">
        <div className="ImageCard" style={{ backgroundImage: `url(${url})` }} />
        <div className="GameInfo">
          <div className="GameInfoTitle">
            <div className="NameWish">
              <h3 className="GameName">{name}</h3>
              {/* Afficher une popup contenant les jeux de la wishlist */}
              <Modal show={show} handleClose={this.hideModal} />
              <button
                value={isWishlist}
                type="button"
                onClick={this.addToWishlist}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                <img src="/img/svg/wishlist.svg" alt="icon wishlist" />
              </button>
            </div>
            <p className="GameSupport">Game support</p>
            <div className="GameRating">{rating / 10 / 2}</div>
            <div className="ButtonAddLibrary">
              <button
                type="button"
                onClick={this.getDataGame}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                <img
                  src={addToLib ? '/img/svg/delete-white.svg' : '/img/svg/add.svg'}
                  alt="icon add library"
                />
              </button>
              {addToLib ? 'Déjà dans votre bibliothèque.' : 'Ajouter à votre bibliothèque.'}
            </div>
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
  handleGamesList: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  show: PropTypes.string.isRequired,
  addToLib: PropTypes.string.isRequired,
  handleClick: PropTypes.string.isRequired,
  isWishlist: PropTypes.string.isRequired
};

export default NewGameCard;
