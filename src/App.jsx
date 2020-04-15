import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import MyGames from './components/contents/MyGames';
import NewGames from './components/contents/NewGames';
import Footer from './components/footer/Footer';
import MobileNav from './components/mobile-nav/MobileNav';
import Title from './components/contents/title/Title';
import GetGames from './components/data/getCardData/GetCardData';

function App() {
  return (
    <div className="App">
      <Header />
      <section id="content">
        <GetGames />
        <Title title="Ma bibliothèque " span="de jeux" />
        <MyGames />
        <Title title="Ajouter des " span="jeux" />
        <NewGames />
      </section>
      <Footer />
      <MobileNav />
    </div>
  );
}

export default App;
