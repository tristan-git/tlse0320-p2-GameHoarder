import React from 'react';
import axios from 'axios';

export default class GetGames extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.games.length < 25 && !window.localStorage.hasOwnProperty('allGames')) {
      axios({
        url: 'https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games',
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        data:
          'fields id, platforms, summary , category, cover, name, popularity, rating;\nwhere summary!=null & popularity >= 20 & cover!=null & rating != null & rating >= 75;\nlimit 25;'
      })
        .then(res => res.data)
        .then(allGamesTab => {
          window.localStorage.setItem('allGames', JSON.stringify(allGamesTab));
          this.props.handleAllGames(allGamesTab);
          axios({
            url: 'https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/covers',
            method: 'POST',
            headers: {
              Accept: 'application/json'
            },
            data: `fields game, url;\nwhere ${allGamesTab
              .map(game =>
                allGamesTab.indexOf(game) !== 24 ? `game=${game.id} | ` : `game=${game.id}`
              )
              .join('')};limit 50;`
          })
            .then(gamesCovers => gamesCovers.data)
            .then(gamesCovers => {
              allGamesTab.map(game => {
                game.url = [];
                for (let i = 0; i < gamesCovers.length; i++) {
                  if (game.id === gamesCovers[i].game) {
                    game.url = [...game.url, gamesCovers[i].url.replace('t_thumb', 't_1080p')];
                  }
                }
              });

              window.localStorage.setItem('allGames', JSON.stringify(allGamesTab));
              this.props.handleAllGames(allGamesTab);
            });
          axios({
            url: 'https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/platforms',
            method: 'POST',
            headers: {
              Accept: 'application/json'
            },
            data: `fields name;\nwhere ${allGamesTab
              .map(game => game.platforms.map(platform => `id=${platform} | `).join(''))
              .join('')
              .slice(0, -2)};limit 50;`
          })
            .then(gamePlatform => gamePlatform.data)
            .then(gamePlatform => {
              allGamesTab.map(game => {
                game.platformsName = [];
                for (let i = 0; i < gamePlatform.length - 1; i++) {
                  for (let x = 0; x < game.platforms.length; x++) {
                    if (game.platforms[x] === gamePlatform[i].id) {
                      if (gamePlatform[i].name === 'PC (Microsoft Windows)') {
                        game.platformsName = [...game.platformsName, 'Windows'];
                      } else {
                        game.platformsName = [...game.platformsName, gamePlatform[i].name];
                      }
                    }
                  }
                }
              });
              window.localStorage.setItem('allGames', JSON.stringify(allGamesTab));
              this.props.handleAllGames(allGamesTab);
            });
        })
        .catch(err => {
          console.error(err);
        });
    } else {
      const games = JSON.parse(window.localStorage.getItem('allGames'));
      this.setState({ allGames: games });
      this.props.handleAllGames(games);
    }
  }

  render() {
    return '';
  }
}
