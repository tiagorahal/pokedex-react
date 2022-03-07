/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import fetchPokemon from '../../services/api';

console.log(typeof (fetchPokemon(1)));

class ItemSelected extends React.Component {
  render() {
    const pokemon = fetchPokemon(99);
    console.log(typeof (pokemon));
    return (
      <div>
        <h1>
          testing:
          {pokemon.name}
        </h1>
      </div>
    );
  }
}

export default ItemSelected;
