import React from 'react';
// import PropTypes from 'prop-types'

class MyGameCard extends React.Component {
  constructor(props) {
    super(props);
    this.name = 'name';
    this.url = 'url';
  }

  render() {
    return (
      <section className="Card">
        <div className="header">
          <h3>{this.props.name}</h3>
          <p>BIN</p>
        </div>
        <div className="image" style={{ backgroundImage: `url(${this.props.url})` }} />
        <div className="footer">
          <p>NOTATION</p>
          <p>FILTER</p>
        </div>
      </section>
    );
  }
}
export default MyGameCard;
