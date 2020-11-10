import React from 'react';
import cn from 'classnames';
import { A, usePath } from 'hookrouter';
import s from './Header.module.scss';
import { generalMenu } from '../../routes';
import { ReactComponent as HeaderLogo } from './assets/Logo.svg';

const Header = () => {
  const path = usePath();
  return (
    <header className={s.root}>
      <div className={s.wrap}>
        <div className={s.headerLogo}>
          <a href="/" aria-label="logo" className="headerLink">
            <HeaderLogo />
          </a>
        </div>
        <nav className={s.navigation}>
          <ul className={s.navigationList}>
            {generalMenu.map(({ title, link }) => (
              <li className={s.navigationLink} key={title}>
                <A className={cn(s.navigationLink, { [s.activeLink]: link === path })} href={link}>
                  {title}
                </A>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
