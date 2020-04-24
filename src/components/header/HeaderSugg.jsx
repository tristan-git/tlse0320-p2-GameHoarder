import React from 'react';
import './header.scss';
// import PropTypes from 'prop-types';
import games from '../data/games.json';
// import StarRating from '../contents/my-games/StarRating';

class HeaderSugg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: games[3].url,
      name: games[3].name
    };
    this.handleHeaderChange = this.handleHeaderChange.bind(this);
  }

  handleHeaderChange() {
    const key = games.key(0);
    const gameInfo = JSON.parse(window.localStorage.setItem(key));
    this.setState({
      url: gameInfo.url,
      name: gameInfo.name
    });
  }

  AddGameToLibrary() {
    localStorage.setItem({ url: this.state });
    this.handleHeaderChange();
  }

  render() {
    const { url } = this.state;
    const { name } = this.state;

    return (
      <div className="HeaderSugg" style={{ backgroundImage: `url(${url})` }}>
        <img src="./img/logo.svg" alt="logo icon" />
        {/*         <div className="HeaderStars">
          <StarRating />
        </div> */}
        <div className="infoHeaderContainerSugg">
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
