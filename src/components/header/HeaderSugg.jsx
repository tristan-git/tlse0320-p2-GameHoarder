import React from 'react';
import './header.scss';
// import PropTypes from 'prop-types';
import games from '../data/games.json';
// import StarRating from '../contents/my-games/StarRating';

class HeaderSugg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: games[0].url,
      name: games[0].name
    };
    this.AddGameToLibrary = this.AddGameToLibrary.bind(this);
  }

  AddGameToLibrary() {
    const values = {
      title: this.state.name,
      img: this.state.url,
      rating: this.state.rating
    };
    localStorage.setItem(this.state.name, JSON.stringify(values));
    window.location.reload(true);
  }

  render() {
    const { url } = this.state;
    const { name } = this.state;
    return (
      <div className="HeaderSugg" style={{ backgroundImage: `url(${url})` }}>
        <div className="filter">
          <img src="./img/logo.svg" alt="logo icon" />
          <div className="infoHeaderContainerSugg">
            {/* <p>STARS</p> */}
            <h1>Notre suggestion</h1>
            <h2>{name}</h2>
            <button
              className="crossContainerSugg"
              type="button"
              onClick={this.AddGameToLibrary}
              style={{ color: 'black' }}
            >
              <img src="./img/add.svg" alt="bouton plus" />
            </button>
          </div>
        </div>
        {/* fonctionnalité supp */}
      </div>
    );
  }
}
/* HeaderSugg.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}; */
export default HeaderSugg;
