import React, { useState } from 'react';
import s from './Pokedex.module.scss';
import Header from '../../components/Header';
import PokemonCard from '../../components/PokemonCard';
import Heading from '../../components/Heading';
import useData, { IPokemons } from '../../hook/useData';

const Pokedex = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState({});

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((s) => ({
      ...s,
      name: e.target.value,
    }));
  };

  const { data, isLoading, isError } = useData('getPokemons', query, [searchValue]);

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
      <div className={s.inputWrap}>
        <input
          className={s.searchInput}
          type="text"
          placeholder="Encuentra tu pokémon..."
          value={searchValue}
          onChange={handleSearchChange}
        />
      </div>
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
