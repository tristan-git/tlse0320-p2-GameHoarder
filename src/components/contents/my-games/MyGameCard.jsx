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
    this.getRemoveGame = this.getRemoveGame.bind(this);
  }

  componentDidMount() {
    this.setState({
      url: this.props.data.img,
      name: this.props.data.title
    });
  }

  getRemoveGame() {
    const { url, name } = this.state;
    console.log(this.props);
    const { handleGameDelete, id, rating } = this.props.data;
    const img = url;
    const title = name;
    const values = {
      id,
      title,
      img,
      rating
    };
    handleGameDelete(id);
    localStorage.removeItem(id, JSON.stringify(values));
  }

  render() {
    console.log('my game card:' + this.props.data);
    const { url, name } = this.state;
    return (
      <section className="Card">
        <div className="header">
          <h3>{name}</h3>
          <button onClick={this.getRemoveGame} className="close-btn" type="submit">
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
