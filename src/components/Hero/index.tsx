import React from 'react';
import s from './Hero.module.scss';
import Button from '../Button';

const Hero = () => (
  <main className={s.root}>
    <h1 className={s.heroTitle}>
      <b>Find</b> all your favorite <b>Pokemon</b>
    </h1>
    <p className={s.heroDesc}>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
    <Button onClick={(event) => 'Button clicked!'}>See pokemons</Button>
  </main>
);

export default Hero;
