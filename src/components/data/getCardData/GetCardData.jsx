import axios from 'axios';
import React from 'react';

class GetGames extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    const API_KEY = 'e98a7b482e71cbb9d2b90309b365e3b4';
    axios({
      url: 'https://api-v3.igdb.com/games',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'user-key': API_KEY
      },
      data: 'fields id,name;limit 10'
    })
      .then(response => response.data)
      .then(res => this.setState({ games: res }))

      .catch(err => {
        console.error(err + 'erreur');
      });
  }
  render() {
    return (
      <div>
        <p>
          {this.state.game
            ? this.state.game.map(game => <li key={game.id}>{game.name}</li>)
            : 'erreur'}
        </p>
      </div>
    );
  }
}
export default GetGames;
