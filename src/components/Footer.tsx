import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__label">
          Make with{' '}
          <span aria-label="heart" role="img">
            ❤️
          </span>
        </div>
        <div className="footer__label">
          <a className="footer__link" href="/">
            Ours Team
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
