import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import MyGames from './components/contents/MyGames';
import NewGames from './components/contents/NewGames';
import Footer from './components/footer/Footer';
import MobileNav from './components/mobile-nav/MobileNav';
import Title from './components/contents/title/Title';
import GetGames from './components/data/getCardData/GetCardData';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { valueInputFilter: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ valueInputFilter: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <section id="content">
          <GetGames />
          <Title title="Ma bibliothèque " span="de jeux" />
          <MyGames value={this.state.valueInputFilter} handleChange={this.handleChange} />
          <Title title="Ajouter des " span="jeux" />
          <NewGames value={this.state.valueInputFilter} handleChange={this.handleChange} />
        </section>
        <Footer />
        <MobileNav />
      </div>
    );
  }
}

export default App;
