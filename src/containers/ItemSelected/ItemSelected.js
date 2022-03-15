/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import axios from 'axios';

class ItemSelected extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      height: '',
      weight: '',
      image: '',
      hp: '',
      type: '',
    };
  }

  componentDidMount() {
    const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
    const fetchPokemon = async (id = '') => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const result = await response.data;
      this.setState({
        id: result.id,
        name: result.name.toUpperCase(),
        height: result.height,
        weight: result.weight,
        image: result.sprites.front_default,
        hp: result.stats[0].base_stat,
        type: result.types[0].type.name.toUpperCase(),
      });
    };
    fetchPokemon(randomNumber(1, 125));
  }

  render() {
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
              Type:&#160;
              {this.state.type}
            </figcaption>
          </figure>
        </div>
        <div className="MidSection">
          <p>
            Id:&#160;
            {this.state.id}
          </p>
          <p>
            hp:&#160;
            {this.state.hp}
          </p>
          <p>
            Height:&#160;
            {this.state.height}
          </p>
          <p>
            Weight:&#160;
            {this.state.weight}
          </p>
        </div>
      </div>

    );
  }
}

export default ItemSelected;
