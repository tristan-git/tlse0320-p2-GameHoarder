import React from 'react';
// import PropTypes from 'prop-types';

class NewGameCard extends React.Component {
  constructor(props) {
    super(props);
    this.name = 'name';
    this.url = 'url';
    this.rating = 'rating';
  }

  render() {
    return (
      <div className="Card">
        <div className="ImageCard">
          <img className="ImageGame" src={this.props.url} alt="Game cover." />
        </div>
        <div className="GameInfo">
          <h3 className="GameName">{this.props.name}</h3>
          <p className="GameSupport">Game support</p>
          <div className="GameRating">Game Rating</div>
          <div className="ButtonAddLibrary">Add to library</div>
        </div>
        <div className="ButtonAddWishlist">Add to wishlist</div>
      </div>
    );
  }
}

// NewGameCard.propTypes = {
//   avatarName: PropTypes.string,
//   avatarImg: PropTypes.string,
//   avatarOnline: PropTypes.bool
// };

export default NewGameCard;
