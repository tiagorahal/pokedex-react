/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */
import React from 'react';
import fetchPokemon from '../../services/api';

const pikachu = fetchPokemon(25);

class ItemSelected extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 'id',
      name: pikachu.name,
      height: 'height',
      weight: 'wight',
      image: 'image',
      hp: 'hp',
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
    const pikachu = fetchPokemon(25);
    console.log(pikachu.name);
  }

  render() {
    console.log('render');
    return (
      <div>
        <h1>
          testing:
          {this.state.name}
        </h1>
      </div>
    );
  }
}

export default ItemSelected;
