import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';

import s from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default HomePage;
