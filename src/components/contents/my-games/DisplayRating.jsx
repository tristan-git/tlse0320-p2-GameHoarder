import React from 'react';

function DisplayRating({ rating }) {
  const displayRating = () => {
    const starsHtml = svgPath => {
      return (
        <div key={Math.random() * 1000}>
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
  return displayRating();
}

DisplayRating.propTypes = {};

export default DisplayRating;
