/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

const pokemon = {
  image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
  name: 'pikachu',
  id: '25',
  type: 'electric',
  height: '3',
  weight: '20',
  generation: '1',
};

class ItemSelected extends React.Component {
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

export default ItemSelected;
