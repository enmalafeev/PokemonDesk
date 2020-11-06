import React from 'react';
import s from './Hero.module.scss';
import Button from '../Button';
import Parallax from '../Parallax';
import Heading from '../Heading';

const Hero = () => (
  <main className={s.root}>
    <Heading priority={1}>
      <b>Find</b> all your favorite <b>Pokemon</b>
    </Heading>

    <p className={s.heroDesc}>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
    <Button onClick={(event) => 'Button clicked!'}>See pokemons</Button>
    <div className="s.contentParallax">
      <Parallax />
    </div>
  </main>
);

export default Hero;
