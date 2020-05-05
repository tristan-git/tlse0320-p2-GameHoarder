import React from 'react';
import DisplayRating from './DisplayRating';
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
        <div className="footer">
          <DisplayRating rating={rating} />
        </div>
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
