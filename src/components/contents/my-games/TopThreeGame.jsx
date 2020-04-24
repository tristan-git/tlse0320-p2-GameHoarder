// import React from 'react';
// import PropTypes from 'prop-types';

// function TopThreeGame(props) {
//   const { name, url, rating } = props;

//   const setDatasGameLocalStorage = event => {
//     const getDataNode = event.target.parentNode.parentNode.parentNode.parentNode.parentNode;
//     const img = getDataNode.style.cssText;
//     const title = getDataNode.children[0].children[0].children[0].innerText;
//     const values = {
//       title,
//       img
//     };
//     window.localStorage.setItem(title, JSON.stringify(values));
//   };

//   const displayRating = () => {
//     const starsHtml = () => {
//       return (
//         <div>
//           <img src="/img/svg/start-yellow.svg" alt="icon stars" />
//         </div>
//       );
//     };

//     const repeatStart = nbRepeat => {
//       const nbrepeatArr = [...Array(nbRepeat)];
//       return nbrepeatArr.map(() => starsHtml());
//     };

//     if (rating <= 20) {
//       return repeatStart(1);
//     }
//     if (rating < 40) {
//       return repeatStart(2);
//     }
//     if (rating < 60) {
//       return repeatStart(3);
//     }
//     if (rating < 80) {
//       return repeatStart(4);
//     }
//     return repeatStart(5);
//   };

//   return (
//     <div className="card" style={{ backgroundImage: `url('${url}')` }}>
//       <div className="container">
//         <div className="header">
//           <div className="title-card">
//             <h3>{name}</h3>
//           </div>
//           <div className="group">
//             <div className="wishlist">
//               <img src="/img/svg/wishlist.svg" alt="icon whislist" />
//             </div>
//             <button className="add" type="submit" onClick={setDatasGameLocalStorage}>
//               <img src="/img/svg/add.svg" alt="icon add" />
//             </button>
//           </div>
//         </div>
//         <div className="footer">{displayRating()}</div>
//       </div>
//     </div>
//   );
// }

// TopThreeGame.propTypes = {
//   name: PropTypes.string.isRequired,
//   url: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired
// };

// export default TopThreeGame;

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
    const starsHtml = () => {
      return (
        <div>
          <img src="/img/svg/start-yellow.svg" alt="icon stars" />
        </div>
      );
    };

    const starsHtmlWhite = () => {
      return (
        <div>
          <img src="/img/svg/white-stars-little.svg" alt="icon stars" />
        </div>
      );
    };

    const repeatStartYellow = nbRepeatYellow => {
      const nbrepeatArr = [...Array(nbRepeatYellow)];
      return nbrepeatArr.map(() => starsHtml());
    };

    const repeatStartWhite = nbRepeatWhite => {
      const nbrepeatArrWhite = [...Array(nbRepeatWhite)];
      return nbrepeatArrWhite.map(() => starsHtmlWhite());
    };

    if (rating <= 20) {
      return repeatStartYellow(1);
    }
    if (rating < 40) {
      return repeatStartYellow(1);
    }
    if (rating < 60) {
      return repeatStartYellow(1);
    }
    if (rating < 80) {
      return repeatStartYellow(4);
    }
    return repeatStartYellow(1);
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
