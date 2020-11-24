const { default: getUrlWithParamsConfig } = require('./getUrlWithParamsConfig');

describe('getUrlWithParamsConfig', () => {
  test('Need accept 2 arguments "getPokemons" and empty object and return object with property pathname, host, protocol, empty query', () => {
    const url = getUrlWithParamsConfig('getPokemons', {});
    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: 'api/v1/pokemons',
      query: {},
    });
  });

  test('Need accept 2 arguments "getPokemon" and { id: 25 } and return object with property pathname, host, protocol, empty query', () => {
    const url = getUrlWithParamsConfig('getPokemon', { id: 25 });
    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: 'api/v1/pokemon/25',
      query: {},
    });
  });
});
