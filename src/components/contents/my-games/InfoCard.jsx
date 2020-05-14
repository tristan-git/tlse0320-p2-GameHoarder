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
  summary
}) {
  return (
    <div className={show ? 'modal display-block' : 'modal display-none'}>
      <section className="PopupInfo">
        {children}
        <div className="InfoCard">
          <button className="InfoButton" type="button" onClick={handleClose}>
            <img src="/img/svg/close.svg" alt="icon close" />
          </button>
          <div className="Info">
            <div>
              <h2 className="InfoTitle">{name}</h2>
            </div>
            <div className="InfoSupp">
              <p>{rating}</p>
              <p
                style={{
                  margin: '0 2%'
                }}
              >
                {platformsName}
              </p>
              <p>{genresName}</p>
            </div>
          </div>
          <div className="InfoMain">
            <img src={url[0]} alt="cover of the game" className="InfoCover" />
            <div className="InfoGame">
              <p>{summary}</p>
            </div>
          </div>
          <div className="Images">
            {url.map(cover => (
              <img src={cover} alt="cover of the game" className="CoverSupp" />
            ))}
          </div>
        </div>
        <div />
      </section>
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
  platformsName: PropTypes.arrayOf(PropTypes.string).isRequired,
  genresName: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired
};
