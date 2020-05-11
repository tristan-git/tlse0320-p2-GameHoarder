import React from 'react';
import './header.scss';
import games from '../data/games.json';
import DisplayRating from '../contents/my-games/DisplayRating';

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
      addingDate: new Date(),
      id: this.state.id,
      title: this.state.name,
      img: this.state.url,
      rating: this.state.rating
    };
    const { handleGamesList } = this.props;
    handleGamesList(values);
    localStorage.setItem(values.id, JSON.stringify(values));
  }

  render() {
    const { url, name, rating } = this.state;

    return (
      <div className="HeaderSugg" style={{ backgroundImage: `url(${url})` }}>
        <div className="filter">
          <div className="gameSugg">
            <div style={{ backgroundImage: `url(${url})` }}>
              <button
                className="crossContainerSugg"
                type="button"
                onClick={this.AddGameToLibrary}
                style={{ color: 'black' }}
              >
                <img src="./img/svg/add.svg" alt="bouton plus" />
              </button>
            </div>
          </div>

          <div>
            <div className="infoHeaderContainerSugg">
              <div className="ratingSuggestion">
                <DisplayRating rating={rating} />
              </div>
              <h1>Notre suggestion</h1>

              <h2>{name}</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderSugg;
