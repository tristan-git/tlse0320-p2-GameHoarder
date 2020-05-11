import React from 'react';
import './App.scss';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HeaderLib from './components/header/HeaderLib';
import HeaderSugg from './components/header/HeaderSugg';
import MyGames from './components/contents/MyGames';
import NewGames from './components/contents/NewGames';
import Footer from './components/footer/Footer';
import MobileNav from './components/mobile-nav/MobileNav';
import NavDesktop from './components/nav-desktop/NavDesktop';

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
        <Router>
          <section id="content">
            <NavDesktop />

            <Switch>
              <Route exact path="/">
                <HeaderLib />
                <MyGames value={mygameInputValue} handleChange={handleChange} />
              </Route>
              <Route exact path="/ajouter-un-jeu">
                <HeaderSugg />
                <NewGames value={newgameInputValue} handleChange={handleChange} />
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
