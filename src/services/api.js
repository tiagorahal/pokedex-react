import axios from 'axios';

const fetchPokemon = async (id = '') => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const result = response.data;
  return result;
};

export default fetchPokemon;
