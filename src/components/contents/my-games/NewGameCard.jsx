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
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
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

  getDataGame(isWhislist) {
    const { url: img, name: title, rating } = this.props;

    const values = {
      title,
      img,
      rating,
      isWishlist: isWhislist
    };
  }

  showModal() {
    this.setState({ show: true });
  }

  hideModal() {
    this.setState({ show: false });
  }

  render() {
    const { rating, name, url } = this.props;
    const { show, isWishlist } = this.state;
    return (
      <div className="Card">
        <div className="ImageCard" style={{ backgroundImage: `url(${url})` }} />
        <div className="GameInfo">
          <div className="GameInfoTitle">
            <div className="NameWish">
              <h3 className="GameName">{name}</h3>
              <Modal show={show} handleClose={this.hideModal} />
              <button
                type="button"
                onClick={this.showModal}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                <img src="img/svg/start-white.svg" alt="icon star" />
              </button>
              <button
                value={isWishlist}
                type="button"
                onClick={this.getDataGame('true')}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                {/* {isWishlist ? this.getDataGame() : null} */}
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
