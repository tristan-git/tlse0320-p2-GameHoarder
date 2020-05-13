import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <footer id="footer">
      <div>
        {' '}
        <img src="./img/svg/logo.svg" alt="logo " />
      </div>
      <div>Game-Hoarder.com. Tous droits réservés © 2000 - 2020</div>
      <div className="social">
        <div>
          {' '}
          <img src="./img/svg/social-1.svg" alt="bouton insta" />
        </div>
        <div>
          {' '}
          <img src="./img/svg/social-2.svg" alt="bouton youtube" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
