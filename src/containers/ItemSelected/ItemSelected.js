/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */
import React from 'react';
import axios from 'axios';

class ItemSelected extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 'id',
      name: 'name',
      height: 'height',
      weight: 'wight',
      image: 'image',
      hp: 'hp',
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');

    const fetchPokemon = async (id = '') => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const result = await response.data;
      console.log(result);
      this.setState({
        id: result.id,
        name: result.name.toUpperCase(),
        height: result.height,
        weight: result.weight,
        image: result.sprites.other.home.front_default,
        hp: result.stats[0].base_stat,
        type: result.types[0].type.name.toUpperCase(),
      });
    };
    fetchPokemon(Math.floor(Math.random() * 150));
  }

  render() {
    console.log('render');
    return (
      <div className="ItemSelected col-4">
        <div className="TopSection">
          <figure className="TopImage">
            <img src={this.state.image} alt="Pokemon" />
            <figcaption>
              Name:&#160;
              {this.state.name}
              <br />
              <br />
              Id:&#160;
              {this.state.id}
            </figcaption>
          </figure>
        </div>
        <div className="MidSection">
          <p>
            Type:&#160;
            {this.state.type}
          </p>
          <p>
            Height:&#160;
            {this.state.height}
          </p>
          <p>
            Weight:&#160;
            {this.state.weight}
          </p>
          <p>
            hp:&#160;
            {this.state.hp}
          </p>
        </div>
      </div>

    );
  }
}

export default ItemSelected;
