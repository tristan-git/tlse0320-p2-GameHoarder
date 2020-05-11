import React from 'react';
import Modal from './Modal';
import PropTypes from 'prop-types';

class NewGameCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      isWishlist: false
    };
    this.getDataGame = this.getDataGame.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handleClick() {
    this.setState(state => ({
      isWishlist: !state.isWishlist,
      show: !state.show
    }));
    this.getDataGame();
  }

  hideModal() {
    this.setState({ show: false });
  }

  render() {
    const { rating, name, url, addToLib } = this.props;
    const { isWishlist, show } = this.state;
    return (
      <div className="Card">
        <div className="ImageCard" style={{ backgroundImage: `url(${url})` }} />
        <div className="GameInfo">
          <div className="GameInfoTitle">
            <h3 className="GameName">{name}</h3>
            <Modal show={show} handleClose={this.hideModal} />
            <button
              value={isWishlist}
              type="button"
              onClick={this.handleClick}
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
          <div className="ButtonAddLibrary" onClick={this.getDataGame}>
            <img
              src={addToLib ? '/img/svg/delete-white.svg' : '/img/svg/add.svg'}
              alt="icon add library"
            />
            {addToLib ? 'Déjà dans votre bibliothèque.' : 'Ajouter à votre bibliothèque.'}
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
