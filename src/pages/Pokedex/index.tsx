import React, { useEffect, useState } from 'react';
import s from './Pokedex.module.scss';
import Header from '../../components/Header';
import PokemonCard from '../../components/PokemonCard';
import Heading from '../../components/Heading';

interface IPokemons {
  name: string;
  stats: IStats;
  types: string[];
  img: string;
}
interface IStats {
  attack: number;
  defense: number;
}

interface IData {
  total: number;
  pokemons: Array<IPokemons>;
}

const usePokemons = () => {
  const [data, setData] = useState<IData>({ total: 0, pokemons: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons?limit=20');
        const responseData: IData = await response.json();
        setData(responseData);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

const Pokedex = () => {
  const { data, isLoading, isError } = usePokemons();

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
        {data.total} Pokemons for you to choose your favorite
      </Heading>
      <div className={s.pokemonList}>
        {data.pokemons.map((pokemon: IPokemons) => (
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
