import React from 'react';
import './App.scss';
import axios from 'axios';
import HeaderLib from './components/header/HeaderLib';
import HeaderSugg from './components/header/HeaderSugg';
import MyGames from './components/contents/MyGames';
import NewGames from './components/contents/NewGames';
import Footer from './components/footer/Footer';
import MobileNav from './components/mobile-nav/MobileNav';

axios.defaults.headers.common['user-key'] = 'e98a7b482e71cbb9d2b90309b365e3b4';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mygameInputValue: null,
      newgameInputValue: null,
      idNewGameDelete: null,
      prevListGamesLib: [],
      listGamesLib: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.gameToRemove = this.gameToRemove.bind(this);
    this.handleGamesList = this.handleGamesList.bind(this);
  }

  componentDidMount() {
    if (window.localStorage.getItem('gamesList')) {
      let gamesList = window.localStorage.getItem('gamesList');
      gamesList = JSON.parse(gamesList);
      this.setState({ listGamesLib: gamesList });
      console.log(`componentDidMount${this.state.listGamesLib}`);
    }
  }

  componentDidUpdate() {
    console.log('compo did up');
    const { listGamesLib, prevListGamesLib } = this.state;
    window.localStorage.setItem('gamesList', JSON.stringify(listGamesLib));
    const gamesList = window.localStorage.getItem('gamesList');
    console.log(listGamesLib + JSON.parse(window.localStorage.getItem('gamesList')).length);
    // if (prevListGamesLib.length !== listGamesLib.length) {
    //   console.log(true)
    //   this.setState({ prevListGamesLib: listGamesLib });
    // }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`${{ ...prevState }} ${{ ...prevProps }}`);
    if (prevState.listGamesLib !== this.state.listGamesLib) {
      this.setState({ prevListGamesLib: prevState.listGamesLib });
    }
  }

  handleGamesList(values) {
    console.log(`handleGamesList before${this.state.listGamesLib}`);
    this.setState(prevState => {
      return {
        ...prevState,
        listGamesLib: [...prevState.listGamesLib, values]
      };
    });
    console.log(`handleGamesList after${this.state.listGamesLib}`);
  }

  gameToRemove(gameToRemove) {
    const { listGamesLib } = this.state;
    const newTab = listGamesLib;
    let index = newTab.map(game => {
      if (gameToRemove === game.title) {
        return newTab.indexOf(game);
      }
    });
    index = index.filter(el => el !== undefined);
    if (index[0] > -1) {
      newTab.splice(index[0], 1);
      this.setState({ listGamesLib: newTab });
    }
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
        <HeaderLib idNewGameAdded={idNewGameAdded} gameToRemove={this.gameToRemove} />
        <section id="content">
          <MyGames
            value={mygameInputValue}
            gameToRemove={this.gameToRemove}
            handleChange={handleChange}
            listGamesLib={this.state.listGamesLib}
          />
          <HeaderSugg handleGameAdded={this.handleGameAdded} />
          <NewGames
            value={newgameInputValue}
            handleGamesList={this.handleGamesList}
            handleChange={handleChange}
          />
        </section>
        <Footer />
        <MobileNav />
      </div>
    );
  }
}

export default App;
