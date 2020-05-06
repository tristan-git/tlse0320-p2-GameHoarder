import React from 'react';
import './MyGameCard.scss';
import PropTypes from 'prop-types';

class MyGameCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: null,
      name: null
    };
  }

  componentDidMount() {
    this.setState({
      url: this.props.data.img,
      name: this.props.data.title
    });
  }

  render() {
    const { url, name } = this.state;
    return (
      <section className="Card">
        <div className="header">
          <h3>{name}</h3>
          <button onClick={() => this.props.gameToRemove(name)} className="close-btn" type="submit">
            X
          </button>
        </div>
        <div className="image" style={{ backgroundImage: `url(${url})` }} />
        <div className="footer">
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

MyGameCard.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};
export default MyGameCard;
