import React from 'react';
import './header.scss';
import PropTypes from 'prop-types';
// import StarRating from '../contents/my-games/StarRating';

class HeaderSugg extends React.Component {
  constructor(props) {
    super(props);
    this.getSuggGame = this.getSuggGame.bind(this);
  }

  getSuggGame(event) {
    const getDataNode = event.target.parentNode.parentNode;
    console.log(getDataNode);
    const imgUrl = getDataNode.children[1].style.cssText;
    const title = getDataNode.children[0].children[0].innerText;
    const values = {
      title,
      imgUrl
    };
    localStorage.setItem(title, JSON.stringify(values));
  }

  render() {
    const { name } = this.props;
    const urlImg = url.substring(23, url.length - 3);

    return (
      <div className="HeaderSugg" style={{ backgroundImage: `url(${urlImg})` }}>
        <img src="./img/logo.svg" alt="logo icon" />
        <div className="infoHeaderContainer">
          <div className="crossLine">{/* <StarRating /> */}</div>
          <h1>Notre suggestion</h1>
          <h2>{name}</h2>
          <button className="crossContainer" type="button">
            PLUS
          </button>
        </div>
        {/* fonctionnalité supp */}
      </div>
    );
  }
}

HeaderSugg.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default HeaderSugg;
