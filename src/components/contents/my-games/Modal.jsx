import React from 'react';
import PropTypes from 'prop-types';
import './MyGameCard.scss';

export default function Modal({ handleClose, show, children }) {
  return (
    <div className={show ? 'modal display-block' : 'modal display-none'}>
      <section className="modal-main">
        {children}
        <div className="modal-div">
          <p>Votre jeu a bien été ajouté à votre Wishlist</p>
          <button className="modal-button" type="button" onClick={handleClose}>
            Well done
          </button>
        </div>
      </section>
    </div>
  );
}

Modal.propTypes = {
  handleClose: PropTypes.string.isRequired,
  show: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};
