import React from 'react';

import Header from './components/header/Header';
import MyGames from './components/contents/MyGames';
import NewGames from './components/contents/NewGames';
import Footer from './components/footer/Footer';
import MobileNav from './components/mobile-nav/MobileNav';

import './App.scss';

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
    const { valueInputFilter } = this.state;
    const { handleChange } = this;

    return (
      <div className="App">
        <Header />
        <section id="content">
          <MyGames value={valueInputFilter} handleChange={handleChange} />
          <NewGames value={valueInputFilter} handleChange={handleChange} />
        </section>
        <Footer />
        <MobileNav />
      </div>
    );
  }
}

export default App;
