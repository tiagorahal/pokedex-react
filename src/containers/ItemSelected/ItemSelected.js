import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemSelected = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchPokemon = async (query = '') => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`);
      const result = await response.data;
      setStats({
        id: result.id,
        name: result.name.toUpperCase(),
        height: result.height,
        weight: result.weight,
        image: result.sprites.front_default,
        hp: result.stats[0].base_stat,
        type: result.types[0].type.name.toUpperCase(),
      });
    };
    const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
    fetchPokemon(randomNumber(1, 900));
  }, []);

  return (
    <div className="ItemSelected col-4">
      <div className="TopSection">
        <figure className="TopImage">
          <img src={stats.image} alt="Pokemon" />
          <figcaption>
            Name:&#160;
            {stats.name}
            <br />
            <br />
            Type:&#160;
            {stats.type}
          </figcaption>
        </figure>
      </div>
      <div className="MidSection">
        <p>
          Id:&#160;
          {stats.id}
        </p>
        <p>
          hp:&#160;
          {stats.hp}
        </p>
        <p>
          Height:&#160;
          {stats.height}
        </p>
        <p>
          Weight:&#160;
          {stats.weight}
        </p>
      </div>
    </div>
  );
};

export default ItemSelected;
