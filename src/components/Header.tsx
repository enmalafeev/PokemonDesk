import React from 'react';
import './Header.scss';
import Logo from '../assets/svg/Logo.svg';

const menu = [
  { id: 1, name: 'Home' },
  { id: 2, name: 'Pokédex' },
  { id: 3, name: 'Legendaries' },
  { id: 4, name: 'Documentation' },
];

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <a href="/" aria-label="logo" className="header__link">
            <img className="header__img" src={Logo} alt="logo" />
          </a>
        </div>
        <nav className="navigation">
          <ul className="navigation__list">
            {menu.map((item) => (
              <li className="navigation__item" key={item.id}>
                {item.name}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
