import React, { useState } from 'react';
import Icon from './Icon';

const StarRating = () => {
  const [rating, setRating] = useState(null);
  return (
    <div className="Stars">
      {[...Array(5)].map((icons, i) => {
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
            <Icon />
            {/* <IconFull className="fullStar" onClick={} /> */}
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
