import React from 'react';
import './App.scss';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeaderLib from './components/header/HeaderLib';
import HeaderSugg from './components/header/HeaderSugg';
import MyGames from './components/contents/MyGames';
import NewGames from './components/contents/NewGames';
import Footer from './components/footer/Footer';
import MobileNav from './components/mobile-nav/MobileNav';
import NavDesktop from './components/nav-desktop/NavDesktop';
import DisplayWishlist from './components/contents/my-games/DisplayWishlist';

axios.defaults.headers.common['user-key'] = 'e98a7b482e71cbb9d2b90309b365e3b4';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mygameInputValue: null,
      newgameInputValue: null,
      idNewGameDelete: null,
      prevListGamesLib: [],
      listGamesLib: [],
      whislist: [],
      isWishlist: false,
      show: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.gameToRemove = this.gameToRemove.bind(this);
    this.handleGamesList = this.handleGamesList.bind(this);
  }

  componentDidMount() {
    if (window.localStorage.getItem('gamesList')) {
      let gamesList = window.localStorage.getItem('gamesList');
      gamesList = JSON.parse(gamesList);
      gamesList = gamesList.sort((a, b) => new Date(b.addingDate) - new Date(a.addingDate));
      this.setState({ listGamesLib: gamesList });
    }

    if (window.localStorage.getItem('whislist')) {
      let whislist = window.localStorage.getItem('whislist');
      whislist = JSON.parse(whislist);
      // whislist = gamesList.sort((a, b) => new Date(b.addingDate) - new Date(a.addingDate));
      this.setState({ whislist });
    }
  }

  componentDidUpdate() {
    const { listGamesLib } = this.state;
    const listGamesLibReverse = listGamesLib.sort(
      (a, b) => new Date(b.addingDate) - new Date(a.addingDate)
    );
    window.localStorage.setItem('gamesList', JSON.stringify(listGamesLibReverse));
    window.localStorage.setItem('wishlist', JSON.stringify(listGamesLib));
    if (this.state.prevListGamesLib.length !== listGamesLibReverse.length) {
      console.log('setstate');
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

  handleClick(values) {
    this.setState(prevState => {
      return {
        ...prevState,
        wishlist: [...prevState.wishlist, values]
      };
    });
    this.addToWishlist();
  }

  gameToRemove(gameToRemove) {
    console.log('gametoremove');
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

  handleChange(event) {
    const valueToChange = event.target.value;
    const inputSearchInputValue = event.target.name;
    this.setState({ [inputSearchInputValue]: valueToChange });
  }

  render() {
    const { mygameInputValue, idNewGameAdded } = this.state;
    const { newgameInputValue } = this.state;
    const { handleChange } = this;

    console.log('render');

    return (
      <div className="App">
        <Router>
          <section id="content">
            <NavDesktop />

            <Switch>
              <Route exact path="/">
                <HeaderLib
                  gameToRemove={this.gameToRemove}
                  listGamesLib={this.state.listGamesLib}
                />
                <MyGames
                  value={mygameInputValue}
                  gameToRemove={this.gameToRemove}
                  handleChange={handleChange}
                  listGamesLib={this.state.listGamesLib}
                />
              </Route>
              <Route exact path="/ajouter-un-jeu">
                <HeaderSugg handleGameAdded={this.handleGameAdded} />
                <NewGames
                  value={newgameInputValue}
                  handleGamesList={this.handleGamesList}
                  handleChange={handleChange}
                />
              </Route>
            </Switch>
          </section>
          <Footer />
          <MobileNav />
        </Router>
      </div>
    );
  }
}

export default App;
