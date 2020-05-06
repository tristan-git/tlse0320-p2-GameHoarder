import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './navDesktop.scss';

function NavDesktop(props) {
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
        <a href="#">
          <li>Ma Whislist</li>
        </a>
      </ul>
    </div>
  );
}

NavDesktop.propTypes = {};

export default NavDesktop;
