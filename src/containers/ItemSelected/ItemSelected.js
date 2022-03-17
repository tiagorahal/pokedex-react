/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import fetchPokemon from '../../services/api';

const ItemSelected = () => {
  const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

  const [stat, setStats] = useState({
    id: '999',
    name: 'pokemonn',
    height: '10',
    weight: '20',
    image: 'https://preview.redd.it/px2cv3hts9651.png?width=960&crop=smart&auto=webp&s=0ea6d2891ec274822eee9cd1bb3954d681480331',
    hp: '100',
    type: 'normal',
  });

  return (
    <div className="ItemSelected col-4">
      <div className="TopSection">
        <figure className="TopImage">
          <img src={stat.image} alt="Pokemon" />
          <figcaption>
            Name:&#160;
            {stat.name}
            <br />
            <br />
            Type:&#160;
            {stat.type}
          </figcaption>
        </figure>
      </div>
      <div className="MidSection">
        <p>
          Id:&#160;
          {stat.id}
        </p>
        <p>
          hp:&#160;
          {stat.hp}
        </p>
        <p>
          Height:&#160;
          {stat.height}
        </p>
        <p>
          Weight:&#160;
          {stat.weight}
        </p>
      </div>
    </div>
  );
};

export default ItemSelected;
