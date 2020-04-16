import React from 'react';
import StarRating from './components/StarRating';
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
          <StarRating />
          <select name="statuts" className="statuts">
            <option value="Statuts">STATUTS</option>
            <option value="Pas commencé">Pas commencé</option>
            <option value="En cours">En cours</option>
            <option value="Terminé">Terminé</option>
          </select>
        </div>
      </section>
    );
  }
}
export default MyGameCard;
