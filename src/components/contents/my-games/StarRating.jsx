import React, { useState } from 'react';

const StarRating = () => {
  const [rating, setRating] = useState(null);
  return (
    <div className="Stars">
      {[...Array(5)].map(i => {
        /* const star = document.getElementById('star') */
        const ratingValue = i + 1;
        return (
          <div>
            <label htmlFor="rating">
              <input
                className="starInput"
                type="radio"
                name="rating"
                id="rating"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />
              <img
                className="Stars"
                src="./img/star-white.svg"
                alt="white star"
                color={ratingValue < rating ? '#ffd700' : '#808080'}
              />
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
