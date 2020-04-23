import React from 'react';
import PropTypes from 'prop-types';

function TopFiveGames(props) {
  const { name, url, rating } = props;

  const setDatasGameLocalStorage = event => {
    const getDataNode = event.target.parentNode.parentNode.parentNode.parentNode.parentNode;
    const img = getDataNode.style.cssText;
    const title = getDataNode.children[0].children[0].children[0].innerText;
    console.log(title);
    const values = {
      title,
      img
    };
    localStorage.setItem(title, JSON.stringify(values));
  };

  const displayRating = () => {
    const starsHtml = () => {
      return (
        <div>
          <img src="/img/svg/start-yellow.svg" alt="icon stars" />
        </div>
      );
    };

    const repeatStart = nbRepeat => {
      const nbrepeatArr = [...Array(nbRepeat)];
      return nbrepeatArr.map(() => starsHtml());
    };

    if (rating <= 20) {
      return repeatStart(1);
    }
    if (rating < 40) {
      return repeatStart(2);
    }
    if (rating < 60) {
      return repeatStart(3);
    }
    if (rating < 80) {
      return repeatStart(4);
    }
    if (rating >= 80) {
      return repeatStart(5);
    }
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
            <div className="add" onClick={setDatasGameLocalStorage}>
              <img src="/img/svg/add.svg" alt="icon add" />
            </div>
          </div>
        </div>
        <div className="footer">{displayRating()}</div>
      </div>
    </div>
  );
}

TopFiveGames.propTypes = {};

export default TopFiveGames;
