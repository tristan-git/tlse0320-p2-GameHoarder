import React from 'react';
import PropTypes from 'prop-types';
import './MyGameCard.scss';

export default function InfoCard({ handleClose, show, children }) {
  return (
    <div className={show ? 'modal display-block' : 'modal display-none'}>
      <section className="InfoCard">
        {children}
        <div className="modal-div">
          <h2>Nom du jeu</h2>
          <p>rating</p>
          <div>
            <div>
              <img src="/img/svg/add.svg" alt="Cover" />
            </div>
            <div>
              <p>Description</p>
              <p>plateforme</p>
              <p>genre</p>
            </div>
          </div>
          <div>
            <img src="/img/svg/add.svg" alt="Artwork" />
            <img src="/img/svg/add.svg" alt="Artwork" />
            <img src="/img/svg/add.svg" alt="Artwork" />
          </div>
          <button className="InfoButton" type="button" onClick={handleClose}>
            Well done
          </button>
        </div>
      </section>
    </div>
  );
}

InfoCard.propTypes = {
  handleClose: PropTypes.string.isRequired,
  show: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};
