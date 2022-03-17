import React from 'react';
import PixelBall from '../../assets/images/pokeball.png';

const Header = () => {
  const pokeAlt = 'Retro Pokebal';
  return (
    <div className="Header">
      <div className="header-logo">
        <h1>Pokedex</h1>
        <img src={PixelBall} alt={pokeAlt} />
      </div>
      <div className="Header-links">
        <a href="/">Randomize</a>
      </div>
    </div>
  );
};

export default Header;
