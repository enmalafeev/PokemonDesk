import React, { useEffect, useState } from 'react';
import s from './Pokedex.module.scss';
import Header from '../../components/Header';
import PokemonCard from '../../components/PokemonCard';
import Heading from '../../components/Heading';

interface IStats {
  attack: number;
  defense: number;
}

interface IPokemons {
  name: string;
  stats: IStats;
  types: string[];
  img: string;
}

const Pokedex = () => {
  const [totalPokemons, setTotalPokemons] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('http://zar.hosthot.ru/api/v1/pokemons?limit=20')
      .then((response) => response.json())
      .then((data) => {
        setTotalPokemons(data.total);
        setPokemons(data.pokemons);
        setIsLoading(false);
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <div>...Loading</div>;
  }

  if (isError) {
    return <div>Something Wrong !</div>;
  }

  return (
    <div className={s.root}>
      <Header />
      <Heading priority={1} className={s.title}>
        {totalPokemons} Pokemons for you to choose your favorite
      </Heading>
      <div className={s.pokemonList}>
        {pokemons.map((pokemon: IPokemons) => (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            attack={pokemon.stats.attack}
            defense={pokemon.stats.defense}
            types={pokemon.types}
            src={pokemon.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
