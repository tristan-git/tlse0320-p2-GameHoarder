import React from 'react';
import axios from 'axios';
// work in progress
export default class GetGames extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    if (this.state.games.length < 20) {
      axios({
        url: 'https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games',
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        data:
          'fields id, category, cover, name, popularity, rating;\nwhere cover!=null & rating != null;\nlimit 20;'
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
                games.indexOf(game) !== 19 ? 'game=' + game.id + ' | ' : 'game=' + game.id
              )
              .join('')};limit 50;`
          })
            .then(gameCover => gameCover.data)
            .then(gameCover => {
              games.map(game => {
                for (let i = 0; i < gameCover.length; i++) {
                  if (game.id === gameCover[i].game) {
                    game.url = gameCover[i].url;
                  }
                }
              });
              window.localStorage.setItem('allGames', JSON.stringify(games));
              this.setState({ games: [...games] });
            })
        )
        .catch(err => {
          console.error(err);
        });
    }
  }

  render() {
    const { games } = this.state;
    return (
      <div>
        <p>
          {games.length > 0
            ? games.map(game => <li key={game.id}>{game.name}</li>)
            : 'erreur requête api'}
        </p>
      </div>
    );
  }
}
