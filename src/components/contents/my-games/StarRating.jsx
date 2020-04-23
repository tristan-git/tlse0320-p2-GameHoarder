import React /* , { useState } */ from 'react';

const StarRating = () => {
  // const [rating, setRating] = useState(null);
  return (
    <div className="Stars">
      {[...Array(5)].map((_icons, i) => {
        const ratingValue = i + 1;
        return (
          // eslint-disable-next-line jsx-a11y/label-has-associated-control
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              /* onClick={()=> setRating(ratingValue)} */
            />
            {/* <IconFull className="fullStar" onClick={} /> */}
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
