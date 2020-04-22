import React, { useState } from 'react';
import Icon from './Icon';

const StarRating = () => {
  const [rating, setRating] = useState(1);

  return (
    <div className="Stars">
      {[...Array(5)].map((star, i) => {
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
              <Icon
                icon="star-empty"
                className="star"
                image={ratingValue < rating ? 'icons.starEmpty' : 'icons.starFull'}
              />
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
