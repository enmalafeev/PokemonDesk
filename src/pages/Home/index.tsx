import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import s from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Footer />
    </div>
  );
};

export default HomePage;
