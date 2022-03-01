/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import getPokemon from '../../services/pokemonInfo/API';
/* https://pokeapi.co/api/v2/pokemon/{id or name}/ TO GET THE POKEMON */

getPokemon(25);

const pokemon = {
  image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
  name: 'pikachuAA',
  id: '25AAA',
  type: 'electriAAAc',
  height: '3AA',
  weight: '20AA',
  generation: '1AA',
};

class MockItem extends React.Component {
  render() {
    return (
      <div className="ItemSelected col-4">
        <div className="TopSection">
          <figure className="TopImage">
            <img src={pokemon.image} alt="Pokemon" />
            <figcaption>
              Name:&#160;
              {pokemon.name}
              <br />
              <br />
              Id:&#160;
              {pokemon.id}
            </figcaption>
          </figure>
        </div>
        <div className="MidSection">
          <p>
            Type:&#160;
            {pokemon.type}
          </p>
          <p>
            Height:&#160;
            {pokemon.height}
          </p>
          <p>
            Weight:&#160;
            {pokemon.weight}
          </p>
          <p>
            Generation:&#160;
            {pokemon.generation}
          </p>
        </div>
      </div>
    );
  }
}

export default MockItem;
