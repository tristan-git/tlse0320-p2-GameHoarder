import React from 'react';
import PropTypes from 'prop-types';

class MyGameCard extends React.Component {
  constructor(props) {
    super(props);
  }

  getDataGame(event) {
    const getDataNode = event.target.parentNode.parentNode;
    const imgUrl = getDataNode.children[1].style.cssText;
    const title = getDataNode.children[0].children[0].innerText;
    const values = {
      title,
      img: imgUrl
    };
    localStorage.setItem(title, JSON.stringify(values));
  }

  render() {
    const { url, name } = this.props;
    const urlImg = url.substring(23, url.length - 3);

    console.log(urlImg);

    return (
      <section className="Card">
        <div className="header">
          <h3>{name}</h3>
          <p>SUPPRIMER</p>
        </div>
        <div className="image" style={{ backgroundImage: `url(${urlImg})` }} />
        <div className="footer">
          <p onClick={this.getDataGame}>STATUTS</p>

          {/* <StarRating /> */}
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
MyGameCard.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};
