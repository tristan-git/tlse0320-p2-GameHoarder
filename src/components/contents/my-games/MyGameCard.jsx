import React from 'react';
import PropTypes from 'prop-types';

class MyGameCard extends React.Component {
  constructor(props) {
    super(props);
    this.name = 'name';
    this.url = 'url';
  }

  render() {
    const { name, url } = this.props;
    return (
      <section className="Card">
        <div className="header">
          <h3>{name}</h3>
          <p>BIN</p>
        </div>
        <div className="image" style={{ backgroundImage: `url(${url})` }} />
        <div className="footer">
          <p>NOTATION</p>
          <p>STATUTS</p>
        </div>
      </section>
    );
  }
}
export default MyGameCard;
MyGameCard.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};
