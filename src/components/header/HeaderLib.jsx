import React from 'react';
import './header.scss';

export default class HeaderLib extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastGameImg: null,
      lastGameName: null,
      lastGameRate: null,
      isGame: false
    };
    this.RemoveGameFromHeader = this.RemoveGameFromHeader.bind(this);
    this.checkIsGameInLibrairy = this.checkIsGameInLibrairy.bind(this);
  }

  componentDidUpdate() {
    if (this.state.lastGameName !== null && window.localStorage.lenght > 0) {
      if (
        this.state.lastGameName !== window.localStorage.getItem(window.localStorage.key(0)).title
      ) {
        this.checkIsGameInLibrairy();
      }
    }
  }

  componentDidMount() {
    this.checkIsGameInLibrairy();
  }

  checkIsGameInLibrairy() {
    if (localStorage.length > 0) {
      this.handleLastGameAdded();
    } else {
      this.setState({
        lastGameName: "Ajouter d'abord un jeux",
        lastGameImg: "url('/img/20200410190035_1.jpg')",
        isGame: false
      });
    }
  }

  handleLastGameAdded() {
    const key = window.localStorage.key(0);
    const lastGameInfo = JSON.parse(window.localStorage.getItem(key));
    this.setState({
      isGame: true,
      lastGameName: lastGameInfo.title,
      lastGameImg: lastGameInfo.img.substring(18, lastGameInfo.img.length - 1)
    });
  }

  RemoveGameFromHeader() {
    localStorage.removeItem(this.state.lastGameName);
    this.checkIsGameInLibrairy();
  }

  render() {
    if (this.state.isGame) {
      return (
        <div className="headerContainer" style={{ backgroundImage: `${this.state.lastGameImg}` }}>
          <div className="filter">
            <img src="./img/logo.svg" alt="logo du site" />
            <h1>{this.state.lastGameName}</h1>
            <div className="infoHeaderContainer">
              <div className="crossContainer" onClick={this.RemoveGameFromHeader}>
                <div className="crossLine"></div>
                <div className="crossLine"></div>
              </div>
              <p>4.5</p>
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
      );
    } else {
      return (
        <div className="headerContainer" style={{ backgroundImage: `${this.state.lastGameImg}` }}>
          <div className="filter">
            <img src="./img/logo.svg" alt="logo du site" />
            <h1>{this.state.lastGameName}</h1>
          </div>
        </div>
      );
    }
  }
}
