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
    this.handleClick = this.handleClick.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      show: !state.show
    }));
  }

  hideModal() {
    this.setState({ show: false });
  }

  render() {
    const { show } = this.state;
    const { wishlist, url: img, name: title } = this.props;

    const newWhislist = [
      { url: wishlist.img },
      { name: wishlist.title },
      { rating: wishlist.rating }
    ];

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
          <DisplayWishlist show={show} handleClose={this.hideModal} wishlist={newWhislist} />
          <button
            type="button"
            onClick={this.handleClick}
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
