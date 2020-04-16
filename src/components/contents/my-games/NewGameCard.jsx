import React from 'react';
// import StarRating from './StarRating';
// import PropTypes from 'prop-types'

class NewGameCard extends React.Component {
  constructor(props) {
    super(props);
  }

  getDataGame(event) {
    const getDataNode = event.target.parentNode.parentNode;
    const imgUrl = getDataNode.children[1].style.cssText;
    const title = getDataNode.children[0].children[0].innerText;
    const values = {
      title: title,
      img: imgUrl
    };
    localStorage.setItem(title, JSON.stringify(values));
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
          <button onClick={this.getDataGame}>Ajouter à ma bibliothèque</button>
        </div>
      </section>
    );
  }
}
export default NewGameCard;
