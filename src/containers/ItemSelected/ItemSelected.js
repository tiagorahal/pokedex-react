/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import TopImage from '../../assets/images/pokelogo.png';
import '../../styles/ItemSelected.css';

const pokemon = {
  name: 'poke name',
  id: 'poke id',
  type: 'poke type',
  height: 'poke height',
  weight: 'poke weight',
  generation: 'poke gen',
};

class ItemSelected extends React.Component {
  render() {
    return (
      <div className="ItemSelected col-4">
        <div className="TopSection">
          <figure className="TopImage">
            <img src={TopImage} alt="Pokemon" />
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
