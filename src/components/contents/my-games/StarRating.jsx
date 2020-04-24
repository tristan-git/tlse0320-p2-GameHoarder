import React, { useState } from 'react';

function StarRating() {
  const [rating, setRating] = useState(0);

  return (
    <div className="Stars">
      {[...Array(5)].map(i => {
        /* const star = document.getElementById('star') */
        const ratingValue = i + 1;
        return (
          // eslint-disable-next-line jsx-a11y/label-has-associated-control
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <img
              id="star"
              value="star"
              src="./img/star-white.svg"
              alt="empty star"
              color={ratingValue < rating ? '#ffd700' : '#808080'}
            />
          </label>
        );
      })}
    </div>
  );
}
export default StarRating;
