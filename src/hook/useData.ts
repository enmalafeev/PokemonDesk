import { useState, useEffect } from 'react';
import req from '../utils/request';

export interface IPokemons {
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

const useData = (endpoint: string, query: object, deps: any[] = []) => {
  const [data, setData] = useState<IData>({ total: 0, pokemons: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response: IData = await req(endpoint, query);
        setData(response);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, deps);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useData;
