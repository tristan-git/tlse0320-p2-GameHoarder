import React from 'react';

/* const emptyStar = "./stars.ico/emptyStar.png";
const fullStar = "fullStar.png"; */

const StarRating = () => {
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          // eslint-disable-next-line jsx-a11y/label-has-associated-control
          <label>
            <input type="radio" name="rating" value={ratingValue} />
            <img src="emptyStar.png" alt="empty star" className="star" />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
