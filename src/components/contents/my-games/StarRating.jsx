import React, { useState } from 'react';
import Icon from './Icon';

const StarRating = () => {
  const [rating, setRating] = useState(1);

  return (
    <div>
      {[...Array(3)].map((star, i) => {
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
            <Icon
              icon="star-empty"
              className="star"
              image={ratingValue < rating ? 'icons.star-empty' : 'icons.star-full'}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
