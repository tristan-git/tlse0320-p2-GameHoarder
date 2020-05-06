import React from 'react';
import './header.scss';
import games from '../data/games.json';

class HeaderSugg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: games[0].url,
      name: games[0].name,
      rating: games[0].rating,
      id: games[0].id
    };
    this.AddGameToLibrary = this.AddGameToLibrary.bind(this);
  }

  AddGameToLibrary() {
    const values = {
      id: this.state.id,
      title: this.state.name,
      img: this.state.url,
      rating: this.state.rating
    };
    const { handleGameAdded } = this.props;
    handleGameAdded(values.id);
    localStorage.setItem(values.id, JSON.stringify(values));
  }

  render() {
    const { url, name } = this.state;

    return (
      <div className="HeaderSugg" style={{ backgroundImage: `url(${url})` }}>
        <div className="filter">
          <img src="./img/logo.svg" alt="logo icon" />
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
        </div>
      </div>
    );
  }
}

export default HeaderSugg;
