import React from 'react';
// import PropTypes from 'prop-types';
import ListNewGameCards from './my-games/ListNewGameCards';
import Filters from './filter/Filters';
import './newgames.scss';

class NewGames extends React.Component {
  constructor(props) {
    super(props);

    this.state = { valueInputFilter: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ valueInputFilter: event.target.value });
  }

  render() {
    return (
      <div className="new-games">
        <Filters value={this.state.valueInputFilter} handleChange={this.handleChange} />
        <ListNewGameCards value={this.state.valueInputFilter} />
      </div>
    );
  }
}

// NewGames.propTypes = {};

export default NewGames;
