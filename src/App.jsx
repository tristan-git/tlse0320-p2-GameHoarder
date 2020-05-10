import React from 'react';
import './App.scss';
import axios from 'axios';
import HeaderLib from './components/header/HeaderLib';
import HeaderSugg from './components/header/HeaderSugg';
import MyGames from './components/contents/MyGames';
import NewGames from './components/contents/NewGames';
import Footer from './components/footer/Footer';
import MobileNav from './components/mobile-nav/MobileNav';
import GetGames from './components/data/GetGames';

axios.defaults.headers.common['user-key'] = 'e98a7b482e71cbb9d2b90309b365e3b4';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mygameInputValue: null };
    this.state = {
      newgameInputValue: null,
      allGames: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAllGames = this.handleAllGames.bind(this);
  }

  // componentDidUpdate(){
  //   if(this.state.games.length !== window.localStorage.getItem('allGames').length){
  //     this.setState({allGames: [...window.localStorage.getItem('allGames')]})
  //   }
  // }

  handleAllGames(games) {
    this.setState({ allGames: [...games] });
  }

  handleChange(event) {
    const valueToChange = event.target.value;
    const inputSearchInputValue = event.target.name;
    this.setState({ [inputSearchInputValue]: valueToChange });
  }

  render() {
    const { mygameInputValue } = this.state;
    const { newgameInputValue } = this.state;
    const { handleChange, handleAllGames } = this;

    return (
      <div className="App">
        <GetGames games={this.state.allGames} handleAllGames={handleAllGames} />
        <HeaderLib />
        <section id="content">
          <MyGames value={mygameInputValue} handleChange={handleChange} />
          <HeaderSugg />
          <NewGames
            games={this.state.allGames}
            value={newgameInputValue}
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
