import axios from 'axios';

const fetchPokemon = async (id = '') => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const result = response.data;
  const pokemon = {
    id: result.id,
    name: result.name,
    height: result.height,
    weight: result.weight,
    image: result.sprites.other.home.front_default,
    hp: result.stats[0].base_stat,
  };
  return pokemon;
};

export default fetchPokemon;
