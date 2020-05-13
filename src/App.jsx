import React from 'react';
import './App.scss';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Swal from 'sweetalert2';
import { CommonLoading } from 'react-loadingg';
import HeaderLib from './components/header/HeaderLib';
import HeaderSugg from './components/header/HeaderSugg';
import MyGames from './components/contents/MyGames';
import NewGames from './components/contents/NewGames';
import Footer from './components/footer/Footer';
import GetGames from './components/data/GetGames';
import NavDesktop from './components/nav-desktop/NavDesktop';

axios.defaults.headers.common['user-key'] = '75f9926369d4142ff35731792bb25f29';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mygameInputValue: null,
      newgameInputValue: null,
      idNewGameDelete: null,
      prevListGamesLib: [],
      listGamesLib: [],
      show: false,
      allGames: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.gameToRemove = this.gameToRemove.bind(this);
    this.handleAllGames = this.handleAllGames.bind(this);
    this.handleGamesList = this.handleGamesList.bind(this);
    this.handleWishlistGame = this.handleWishlistGame.bind(this);
    this.handleRemoveWishlistGame = this.handleRemoveWishlistGame.bind(this);
    this.handleChangeStatue = this.handleChangeStatue.bind(this);
  }

  componentDidMount() {
    if (window.localStorage.getItem('gamesList')) {
      let gamesList = window.localStorage.getItem('gamesList');
      gamesList = JSON.parse(gamesList);
      gamesList = gamesList.sort((a, b) => new Date(b.addingDate) - new Date(a.addingDate));
      this.setState({ listGamesLib: gamesList });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { listGamesLib, prevListGamesLib } = this.state;
    const listGamesLibReverse = listGamesLib.sort(
      (a, b) => new Date(b.addingDate) - new Date(a.addingDate)
    );
    window.localStorage.setItem('gamesList', JSON.stringify(listGamesLibReverse));
    if (prevListGamesLib.length !== listGamesLibReverse.length || prevListGamesLib === []) {
      this.setState(prevState => {
        return {
          ...prevState,
          listGamesLib: listGamesLibReverse,
          prevListGamesLib: listGamesLibReverse
        };
      });
    }

    if (prevState.listGamesLib !== listGamesLib) {
      this.setState(prevState => {
        return {
          ...prevState,
          listGamesLib: listGamesLibReverse,
          prevListGamesLib: listGamesLibReverse
        };
      });
    }
  }

  handleGamesList(values) {
    this.setState(prevState => {
      return {
        ...prevState,
        listGamesLib: [...prevState.listGamesLib, values]
      };
    });
  }

  handleWishlistGame(values) {
    const { listGamesLib } = this.state;
    this.setState({
      listGamesLib: [...listGamesLib, values]
    });
  }

  handleRemoveWishlistGame(values) {
    const { listGamesLib } = this.state;
    let newlistGamesLib = listGamesLib;
    newlistGamesLib = newlistGamesLib.filter(game => game.title !== values.title);
    this.setState({ listGamesLib: newlistGamesLib });
  }

  handleChangeStatue(values) {
    const { listGamesLib } = this.state;
    let newlistGamesLib = listGamesLib;
    newlistGamesLib = newlistGamesLib.filter(game => game.title !== values.title);
    this.setState({ listGamesLib: [...newlistGamesLib, values] });
  }

  gameToRemove(gameToRemove) {
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
        const { listGamesLib } = this.state;
        const newTab = listGamesLib;
        let index = newTab.map(game => {
          if (gameToRemove === game.title) {
            return newTab.indexOf(game);
          }
          return undefined;
        });
        index = index.filter(el => el !== undefined);
        newTab.splice(index[0], 1);
        this.setState({ listGamesLib: newTab });
      }
    });
  }

  handleAllGames(games) {
    this.setState({ allGames: [...games] });
  }

  handleChange(event) {
    const valueToChange = event.target.value;
    const inputSearchInputValue = event.target.name;
    this.setState({ [inputSearchInputValue]: valueToChange });
  }

  render() {
    const { mygameInputValue, idNewGameAdded, allGames, listGamesLib } = this.state;
    const { newgameInputValue } = this.state;
    const { handleChange, handleAllGames, handleChangeStatue } = this;
    let addGameContent;
    if (
      allGames.length === 0 ||
      allGames[0].url === undefined ||
      allGames[0].platformsName === undefined
    ) {
      addGameContent = <CommonLoading color="#1047f5" />;
    } else {
      addGameContent = (
        <>
          <HeaderSugg games={allGames} handleGamesList={this.handleGamesList} />
          <NewGames
            value={newgameInputValue}
            handleGamesList={this.handleGamesList}
            handleChange={handleChange}
            games={allGames}
            handleWishlistGame={this.handleWishlistGame}
            handleRemoveWishlistGame={this.handleRemoveWishlistGame}
          />
        </>
      );
    }

    return (
      <div className="App">
        <Router>
          <section id="content">
            <NavDesktop
              listGamesLib={listGamesLib}
              handleRemoveWishlistGame={this.handleRemoveWishlistGame}
            />

            <Switch>
              <Route exact path="/">
                <HeaderLib gameToRemove={this.gameToRemove} listGamesLib={listGamesLib} />
                <MyGames
                  value={mygameInputValue}
                  gameToRemove={this.gameToRemove}
                  handleChange={handleChange}
                  listGamesLib={listGamesLib}
                  handleChangeStatue={handleChangeStatue}
                />
              </Route>
              <Route exact path="/ajouter-un-jeu">
                <GetGames games={allGames} handleAllGames={handleAllGames} />
                {addGameContent}
              </Route>
            </Switch>
          </section>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
