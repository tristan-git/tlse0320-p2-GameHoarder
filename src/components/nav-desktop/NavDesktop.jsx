import React from 'react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './navDesktop.scss';
import DisplayWishlist from '../contents/my-games/DisplayWishlist';

class NavDesktop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.handleWishlistGame = this.handleWishlistGame.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  handleWishlistGame() {
    this.setState(state => ({
      show: !state.show
    }));
  }

  hideModal() {
    this.setState({ show: false });
  }

  render() {
    console.log(this.props.handleRemoveWishlistGame);

    const { show } = this.state;
    const { wishlist, listGamesLib, handleRemoveWishlistGame } = this.props;

    return (
      <div className="navDesktop">
        <div className="logo">
          <img src="./img/svg/logo-black.svg" alt="logo " />
        </div>
        <ul>
          <NavLink to="/ajouter-un-jeu">
            <li>Ajouter un jeu</li>
          </NavLink>
          <NavLink to="/">
            <li>Ma bibliothèque</li>
          </NavLink>
          <DisplayWishlist
            show={show}
            handleClose={this.hideModal}
            wishlist={wishlist}
            listGamesLib={listGamesLib}
            handleRemoveWishlistGame={handleRemoveWishlistGame}
          />
          <button
            type="button"
            onClick={this.handleWishlistGame}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <li>
              <img
                src="./img/svg/navWishlist.svg"
                alt="icon wishlist"
                style={{
                  width: '30px'
                }}
              />
            </li>
          </button>
        </ul>
      </div>
    );
  }
}

NavDesktop.propTypes = {
  /*   wishlist: propTypes.string.isRequired */
};

export default NavDesktop;
