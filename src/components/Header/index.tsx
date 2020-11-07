import React from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.scss';
import { ReactComponent as HeaderLogo } from './assets/Logo.svg';

interface IMenu {
  id: number;
  name: string;
  link: string;
}

const menu: IMenu[] = [
  { id: 1, name: 'Home', link: '/' },
  { id: 2, name: 'Pokédex', link: '/pokedex' },
  { id: 3, name: 'Legendaries', link: '#' },
  { id: 4, name: 'Documentation', link: '#' },
];

const Header = () => {
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
            {menu.map(({ id, name, link }) => (
              <li className={s.navigationLink} key={id}>
                <Link className={s.navigationLink} to={link}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
