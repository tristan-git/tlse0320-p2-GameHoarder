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
    axios
      .post('https://api-v3.igdb.com/games')
      .then(res => {
        return { games: res.data };
      })
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
