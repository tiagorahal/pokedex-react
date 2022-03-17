import axios from 'axios';

const fetchPokemon = async (query = '') => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`);
  const result = await response.data;
  return {
    id: result.id,
    name: result.name.toUpperCase(),
    height: result.height,
    weight: result.weight,
    image: result.sprites.front_default,
    hp: result.stats[0].base_stat,
    type: result.types[0].type.name.toUpperCase(),
  };
};

export default fetchPokemon;
