import React from 'react';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.root}>
      <div className={s.wrap}>
        <div className={s.footerLabel}>
          Make with{' '}
          <span aria-label="heart" role="img">
            ❤️
          </span>
        </div>
        <div className={s.footerLabel}>
          <a className={s.footerLink} href="/">
            Ours Team
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
