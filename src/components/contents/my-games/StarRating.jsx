import React, { useState } from 'react';

const StarRating = () => {
  // const [rating, setRating] = useState(null);
  return (
    <div className="Stars">
      {[...Array(5)].map((_icons, i) => {
        const ratingValue = i + 1;
        return (
          <div>
            <label htmlFor="rating">
              <input
                type="radio"
                name="rating"
                id="rating"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
