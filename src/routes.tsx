import React from 'react';
import Home from './pages/Home';
import EmptyPage from './pages/EmptyPage';
import Pokedex from './pages/Pokedex';

interface IgeneralMenu {
  title: string;
  link: string;
  component: () => JSX.Element;
}

export const generalMenu: IgeneralMenu[] = [
  {
    title: 'Home',
    link: '/',
    component: () => <Home />,
  },
  {
    title: 'Pokédex',
    link: '/pokedex',
    component: () => <Pokedex />,
  },
  {
    title: 'Legendaries',
    link: '/legendaries',
    component: () => <EmptyPage title="Legendaries" />,
  },
  {
    title: 'Documentation',
    link: '/documentation',
    component: () => <EmptyPage title="Documentation" />,
  },
];

interface IAccMenu {
  [n: string]: () => JSX.Element;
}

const routes = generalMenu.reduce((acc: IAccMenu, item: IgeneralMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
