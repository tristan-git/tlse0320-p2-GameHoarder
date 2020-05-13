import React from 'react';
import './header.scss';
import DisplayRating from '../contents/my-games/DisplayRating';

export default class HeaderLib extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastGameImg: [],
      lastGameName: null,
      lastGameRating: null,
      isThereIsGame: true,
      lastGameAdded: null
    };
    this.removeGameFromHeader = this.removeGameFromHeader.bind(this);
  }

  componentDidMount() {
    this.handleLastGameAdded();
  }

  componentDidUpdate() {
    const { listGamesLib } = this.props;
    const { lastGameName } = this.state;
    if (listGamesLib && listGamesLib.length > 0 && lastGameName !== listGamesLib[0].title) {
      this.handleLastGameAdded();
    } else if (listGamesLib.length === 0 && lastGameName !== "Ajouter d'abord un jeu") {
      this.handleLastGameAdded();
    }
  }

  handleLastGameAdded() {
    const { listGamesLib } = this.props;
    if (listGamesLib && listGamesLib.length > 0) {
      const lastGameInfo = listGamesLib[0];
      this.setState({
        isThereIsGame: true,
        lastGameName: lastGameInfo.title,
        lastGameRating: lastGameInfo.rating,
        lastGameImg: lastGameInfo.img
      });
    } else {
      this.setState({
        lastGameName: "Ajouter d'abord un jeu",
        lastGameImg: "url('/img/svg/20200410190035_1.jpg')",
        isGame: false
      });
    }
  }

  removeGameFromHeader() {
    const { gameToRemove } = this.props;
    const { lastGameName } = this.state;
    gameToRemove(lastGameName);
    this.handleLastGameAdded();
  }

  render() {
    const { lastGameName, lastGameImg, lastGameRating, isThereIsGame } = this.state;
    if (isThereIsGame) {
      return (
        <div className="headerContainer" style={{ backgroundImage: `url(${lastGameImg})` }}>
          <div className="filter">
            <div className="gameSugg">
              <div style={{ backgroundImage: `url(${lastGameImg})` }} />
            </div>

            <div className="wrapper">
              <div className="infoHeaderContainer">
                <h2>{lastGameName}</h2>
              </div>

              <div className="infoHeaderContainer">
                <div className="ratingSuggestion">
                  <DisplayRating rating={lastGameRating} />
                </div>
              </div>
              <div className="infoHeaderContainer blue">
                <div className="crossContainer" onClick={() => this.removeGameFromHeader()}>
                  <img src="./img/svg/delete-white.svg" alt="bouton plus" />
                </div>
              </div>

              <div className="infoHeaderContainer blue">
                <label htmlFor="gameStatusHeader">
                  <select name="gameStatus" id="gameStatusHeader">
                    <option value="0">statut</option>
                    <option value="1">pas commencé</option>
                    <option value="2">En cours</option>
                    <option value="3">terminés</option>
                  </select>
                </label>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="headerContainer" style={{ backgroundImage: `${lastGameImg}` }}>
        <div className="filter">
          <img src="./img/logo.svg" alt="logo du site" />
          <h1>{lastGameName}</h1>
        </div>
      </div>
    );
  }
}
