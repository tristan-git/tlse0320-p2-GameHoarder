import React from 'react';
import './header.scss';
import Swal from 'sweetalert2';

export default class HeaderLib extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastGameImg: null,
      lastGameName: null,
      lastGameRating: null,
      isGame: true
    };
    this.RemoveGameFromHeader = this.RemoveGameFromHeader.bind(this);
  }

  componentDidMount() {
    this.handleLastGameAdded();
  }

  handleLastGameAdded() {
    if (this.state.isGame && window.localStorage.length > 0) {
      const key = window.localStorage.key(0);
      const lastGameInfo = JSON.parse(window.localStorage.getItem(key));
      console.log(lastGameInfo.rating);
      this.setState({
        isGame: true,
        lastGameName: lastGameInfo.title,
        lastGameRating: lastGameInfo.rating,
        lastGameImg: lastGameInfo.img
      });
    } else {
      this.setState({
        lastGameName: "Ajouter d'abord un jeu",
        lastGameImg: "url('/img/20200410190035_1.jpg')",
        isGame: false
      });
    }
  }

  RemoveGameFromHeader() {
    Swal.fire({
      title: 'Etes-vous sûr?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'var(--primary-color)',
      cancelButtonColor: 'var(--alert-color)',
      confirmButtonText: 'Oui, je supprime!',
      cancelButtonText: 'Annuler'
    }).then(result => {
      if (result.value) {
        Swal.fire({
          title: 'Supprimé!',
          text: 'Votre jeu a été supprimé.',
          icon: 'success',
          showConfirmButton: false,
          timer: 900
        });
        localStorage.removeItem(this.state.lastGameName);
        this.handleLastGameAdded();
        setTimeout(function reload() {
          window.location.reload(true);
        }, 1000);
      }
    });
  }

  render() {
    if (this.state.isGame) {
      return (
        <div
          className="headerContainer"
          style={{ backgroundImage: `url(${this.state.lastGameImg})` }}
        >
          <div className="filter">
            <img src="./img/logo.svg" alt="logo du site" />
            <h1>{this.state.lastGameName}</h1>
            <div className="infoHeaderContainer">
              <div className="crossContainer" onClick={this.RemoveGameFromHeader}>
                <div className="crossLine"></div>
                <div className="crossLine"></div>
              </div>
              <p>{this.state.lastGameRating / 10 / 2}/5</p>
              <label htmlFor="gameStatusHeader">
                <select name="gameStatus" id="gameStatusHeader">
                  <option value="0">statuts</option>
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
