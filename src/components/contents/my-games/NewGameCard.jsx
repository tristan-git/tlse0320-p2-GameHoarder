import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import './MyGameCard';

class NewGameCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.getDataGame = this.getDataGame.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
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

  showModal() {
    this.setState({ show: true });
  }

  hideModal() {
    this.setState({ show: false });
  }

  render() {
    const { rating, name, url } = this.props;
    const { show } = this.state;
    return (
      <div className="Card">
        <div className="ImageCard" style={{ backgroundImage: `url(${url})` }} />
        <div className="GameInfo">
          <div className="GameInfoTitle">
            <h3 className="GameName">{name}</h3>
            <div className="btn">
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
                <img src="/img/svg/wishlist.svg" alt="icon wishlist" />
              </button>
            </div>
            <p className="GameSupport">Game support</p>
            <div className="GameRating">{rating / 10 / 2}</div>
            <div className="ButtonAddLibrary">
              <button type="button" onClick={this.getDataGame}>
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
