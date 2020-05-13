import React from 'react';
import PropTypes from 'prop-types';
import './MyGameCard.scss';

export default function InfoCard({
  handleClose,
  show,
  children,
  name,
  rating,
  url,
  platformsName,
  genresName,
  artworkUrl,
  summary
}) {
  return (
    <div className={show ? 'modal display-block' : 'modal display-none'}>
      <section className="PopupInfo">
        {children}
        <div className="InfoCard">
          <h2>{name}</h2>
          <p>{rating}</p>
          <div>
            <div>{url}</div>
            <div>
              <p>{summary}</p>
              <p>{platformsName}</p>
              <p>{genresName}</p>
            </div>
          </div>
          <div>
            <div>{artworkUrl}</div>
          </div>
        </div>
        <div />
      </section>
      <button className="InfoButton" type="button" onClick={handleClose}>
        Close Me
      </button>
    </div>
  );
}

InfoCard.propTypes = {
  handleClose: PropTypes.string.isRequired,
  show: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  platformsName: PropTypes.array.isRequired,
  genresName: PropTypes.array.isRequired,
  artworkUrl: PropTypes.array.isRequired,
  summary: PropTypes.string.isRequired
};
