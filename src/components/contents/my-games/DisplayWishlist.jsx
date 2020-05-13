import React from 'react';
import PropTypes from 'prop-types';
import './MyGameCard.scss';
import NewGameCard from './NewGameCard';

export default function DisplayWishlist({
  handleClose,
  show,
  children,
  listGamesLib,
  handleRemoveWishlistGame
}) {
  const displayWhislist = () =>
    listGamesLib
      .filter(game => game.addToWish)
      .map(game => (
        <NewGameCard
          url={game.img}
          name={game.title}
          rating={game.rating}
          addToWish={game.addToWish}
          handleRemoveWishlistGame={handleRemoveWishlistGame}
        />
      ));

  return (
    <div className={show ? 'modal display-block' : 'modal display-none'}>
      <section className="modal-main">
        {children}
        <div className="modal-div">
          <div className="wrap">
            <button type="button" onClick={handleClose}>
              <img src="/img/svg/close.svg" alt="icon close" />
            </button>
          </div>

          <img className="WishlistImg" src="/img/svg/wishlist.jpg" alt="wishlist" />

          <h2>Ma Wishlist</h2>

          {displayWhislist()}
        </div>
      </section>
    </div>
  );
}

DisplayWishlist.propTypes = {
  handleClose: PropTypes.string.isRequired,
  show: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  listGamesLib: PropTypes.string.isRequired,
  handleRemoveWishlistGame: PropTypes.func.isRequired
};
