import React from 'react';
import axios from 'axios';

export default class GetGames extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    axios({
      url: 'https://api-v3.igdb.com/games/',
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
        'user-key': 'a24e579741a0cdba8423e33cf6267698'
      },
      data: 'fields'
    })
      .then(res => res.data)
      .then(res => this.setState({ games: res }))
      .catch(err => console.log(err));
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
