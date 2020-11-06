import React from 'react';
import s from './Hero.module.scss';
import Button from '../Button';
import Parallax from '../Parallax';

const Hero = () => (
  <main className={s.root}>
    <h1 className={s.heroTitle}>
      <b>Find</b> all your favorite <b>Pokemon</b>
    </h1>
    <p className={s.heroDesc}>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
    <Button onClick={(event) => 'Button clicked!'}>See pokemons</Button>
    <div className="s.contentParallax">
      <Parallax />
    </div>
  </main>
);

export default Hero;
