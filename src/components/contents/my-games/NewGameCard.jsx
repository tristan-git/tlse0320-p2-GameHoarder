import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import './MyGameCard';

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

  // getDataGame() {
  //   const img = this.props.url;
  //   const title = this.props.name;
  //   const { rating } = this.props;
  //   const isWishlist = this.state;

  //   const values = {
  //     title,
  //     img,
  //     rating,
  //     isWishlist
  //   };

  //   if (isWishlist !== { isWishlist }) {
  //     this.setState({
  //       isWishlist: true
  //     });
  //     localStorage.setItem(title, JSON.stringify(values));
  //     this.showModal();
  //   } else {
  //     this.setState({
  //       isWishlist: false
  //     });
  //     localStorage.setItem(title, JSON.stringify(values));
  //   }
  // }

  /*   componentDidUpdate(prevProps) {
    // Utilisation classique (pensez bien à comparer les props) :
    if (this.isWishlist !== prevProps.isWishlist) {
      this.setState({
        isWishlist: true
      });
    }
  } */

  getDataGame() {
    const { url: img, name: title, rating, handleGamesList, id, isWishlist } = this.props;
    const values = {
      addingDate: new Date(),
      title,
      img,
      rating,
      isWishlist,
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
                <img src="/img/svg/add.svg" alt="icon library" />
              </button>
            </div>
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
  rating: PropTypes.string.isRequired,
  isWishlist: PropTypes.string.isRequired
};

export default NewGameCard;
