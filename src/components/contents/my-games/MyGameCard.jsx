import React from 'react';
import './MyGameCard.scss';
// import PropTypes from 'prop-types'

class MyGameCard extends React.Component {
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

  getRemoveGame(event) {
    const getDataNode = event.target.parentNode.parentNode;
    const imgUrl = getDataNode.children[1].style.cssText;
    const title = getDataNode.children[0].children[0].innerText;
    const values = {
      title: title,
      img: imgUrl
    };
    localStorage.removeItem(title, JSON.stringify(values));
  }

  render() {
    const urlImg = this.props.url.substring(23, this.props.url.length - 3);

    console.log(urlImg);

    return (
      <section className="Card">
        <div className="header">
          <h3>{this.props.name}</h3>
          <button onClick={this.getRemoveGame} className="close-btn" type="submit">
            X
          </button>
        </div>
        <div className="image" style={{ backgroundImage: `url(${urlImg})` }} />
        <div className="footer">
          <p onClick={this.getDataGame}>STATUTS</p>

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
