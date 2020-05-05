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
      listGamesLib: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleGameDelete = this.handleGameDelete.bind(this);
    this.handleGamesList = this.handleGamesList.bind(this);
  }

  componentDidMount() {
    if (window.localStorage.getItem('gamesList')) {
      const gamesList = window.localStorage.getItem('gamesList');
      const gameListReverse = JSON.parse(gamesList).sort(
        (a, b) => new Date(b.addingDate) - new Date(a.addingDate)
      );
      this.setState({ listGamesLib: gameListReverse });
    }
  }

  componentDidUpdate() {
    const { listGamesLib } = this.state;
    const gameListReverse = listGamesLib.sort(
      (a, b) => new Date(b.addingDate) - new Date(a.addingDate)
    );
    window.localStorage.setItem('gamesList', JSON.stringify(gameListReverse));
  }

  handleGamesList(values) {
    this.setState(prevState => {
      return {
        ...prevState,
        listGamesLib: [values, ...prevState.listGamesLib]
      };
    });
  }

  handleChange(event) {
    const valueToChange = event.target.value;
    const inputSearchInputValue = event.target.name;
    this.setState({ [inputSearchInputValue]: valueToChange });
  }

  handleGameDelete(idGame) {
    this.setState({ idNewGameDelete: idGame });
  }

  render() {
    const { mygameInputValue, idNewGameAdded } = this.state;
    const { newgameInputValue } = this.state;
    const { handleChange } = this;

    return (
      <div className="App">
        <HeaderLib idNewGameAdded={idNewGameAdded} handleGameDelete={this.handleGameDelete} />
        <section id="content">
          <MyGames
            value={mygameInputValue}
            handleGameDelete={this.handleGameDelete}
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
