import React from 'react';
import PropTypes from 'prop-types';

function TopThreeGame(props) {
  const { name, url, rating } = props;

  const setDatasGameLocalStorage = event => {
    const getDataNode = event.target.parentNode.parentNode.parentNode.parentNode.parentNode;
    const img = getDataNode.style.cssText;
    const title = getDataNode.children[0].children[0].children[0].innerText;
    const values = {
      title,
      img
    };
    window.localStorage.setItem(title, JSON.stringify(values));
  };

  const displayRating = () => {
    const starsHtml = svgPath => {
      return (
        <div>
          <img src={`/img/svg/${svgPath}`} alt="icon stars" />
        </div>
      );
    };
    const repeatStars = nbRepeatYellowStars => {
      const nbrepeatArr = [...Array(5)];
      return nbrepeatArr.map((val, i) => {
        return i + 1 <= nbRepeatYellowStars
          ? starsHtml('start-yellow.svg')
          : starsHtml('white-stars-little.svg');
      });
    };

    if (rating <= 20) {
      return repeatStars(1);
    }
    if (rating < 40) {
      return repeatStars(2);
    }
    if (rating < 60) {
      return repeatStars(3);
    }
    if (rating < 80) {
      return repeatStars(4);
    }
    return repeatStars(5);
  };

  return (
    <div className="card" style={{ backgroundImage: `url('${url}')` }}>
      <div className="container">
        <div className="header">
          <div className="title-card">
            <h3>{name}</h3>
          </div>
          <div className="group">
            <div className="wishlist">
              <img src="/img/svg/wishlist.svg" alt="icon whislist" />
            </div>
            <button className="add" type="submit" onClick={setDatasGameLocalStorage}>
              <img src="/img/svg/add.svg" alt="icon add" />
            </button>
          </div>
        </div>
        <div className="footer">{displayRating()}</div>
      </div>
    </div>
  );
}

TopThreeGame.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

export default TopThreeGame;
