import React from 'react';
// import PropTypes from 'prop-types'

class MyGameCard extends React.Component {
  constructor(props) {
    super(props);
    this.name = 'name';
    this.url = 'url';
    this.popularity = 'popularity';
    this.rating = 'rating';
  }

  render() {
    return (
      <section className="MyGameCard">
        <span>
          <h3>{this.props.name}</h3>
        </span>
        <img alt={this.props.name} style={{ backgroundImage: `url(${this.props.url})` }} />
        <div>
          <span>
            <p>Popularité {this.props.popularity}</p>
            <p>Notation {this.props.rating}</p>
          </span>
        </div>
      </section>
    );
  }
}
export default MyGameCard;
