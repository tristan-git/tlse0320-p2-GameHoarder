import React from 'react';

import Header from './components/header/Header';
import MyGames from './components/contents/MyGames';
import NewGames from './components/contents/NewGames';
import Footer from './components/footer/Footer';
import MobileNav from './components/mobile-nav/MobileNav';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <section id="content">
        <MyGames />
        <NewGames />
      </section>
      <Footer />
      <MobileNav />
    </div>
  );
}

export default App;
