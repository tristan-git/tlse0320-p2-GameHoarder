import React from 'react';
import './App.scss';
import axios from 'axios';
import HeaderLib from './components/header/HeaderLib';
import HeaderSugg from './components/header/HeaderSugg';
import MyGames from './components/contents/MyGames';
import NewGames from './components/contents/NewGames';
import Footer from './components/footer/Footer';
import MobileNav from './components/mobile-nav/MobileNav';
import Title from './components/contents/title/Title';
// import GetGames from './components/data/getCardData/GetCardData';

axios.defaults.headers.common['user-key'] = 'e98a7b482e71cbb9d2b90309b365e3b4';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mygameInputValue: null };
    this.state = { newgameInputValue: null };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const valueToChange = event.target.value;
    const inputSearchInputValue = event.target.name;
    this.setState({ [inputSearchInputValue]: valueToChange });
  }

  render() {
    const { mygameInputValue } = this.state;
    const { newgameInputValue } = this.state;
    const { handleChange } = this;

    return (
      <div className="App">
        <HeaderLib />
        <section id="content">
          <MyGames value={mygameInputValue} handleChange={handleChange} />
          <HeaderSugg
            name={JSON.parse(window.localStorage.getItem(localStorage.key(i))).title}
            url={JSON.parse(window.localStorage.getItem(localStorage.key(i))).img}
          />
          <Title title="Ajouter des " span="jeux" />
          <NewGames value={newgameInputValue} handleChange={handleChange} />
        </section>
        <Footer />
        <MobileNav />
      </div>
    );
  }
}

export default App;
