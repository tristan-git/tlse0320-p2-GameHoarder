import React from 'react';
import axios from 'axios';
// work in progress
export default class GetGames extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.games.length < 25) {
      axios({
        url: 'https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games',
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        data:
          'fields id, category, cover, name, popularity, rating;\nwhere popularity >= 20 & cover!=null & rating != null & rating >= 75;\nlimit 25;'
      })
        .then(response => response.data)
        .then(games =>
          axios({
            url: 'https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/covers',
            method: 'POST',
            headers: {
              Accept: 'application/json'
            },
            data: `fields game, url;\nwhere ${games
              .map(game =>
                games.indexOf(game) !== 24 ? 'game=' + game.id + ' | ' : 'game=' + game.id
              )
              .join('')};limit 50;`
          })
            .then(gameCover => gameCover.data)
            .then(gameCover => {
              games.map(game => {
                game.url = [];
                for (let i = 0; i < gameCover.length; i++) {
                  if (game.id === gameCover[i].game) {
                    game.url = [...game.url, gameCover[i].url.replace('t_thumb', 't_1080p')];
                  }
                }
              });
              window.localStorage.setItem('allGames', JSON.stringify(games));
              this.props.handleAllGames(games);
            })
        )
        .catch(err => {
          console.error(err);
        });
    }
  }

  render() {
    return '';
  }
}
