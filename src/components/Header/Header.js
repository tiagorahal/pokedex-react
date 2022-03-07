/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PixelBall from '../../assets/images/pokeball.png';

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="header-logo">
          <h1>Pokedex</h1>
          <img src={PixelBall} alt="pixel pokeball" />
        </div>
        <div className="Header-links">
          <a href="/">Pokemons</a>
          <a href="/">Types</a>
          <a href="/">Generation</a>
        </div>
      </div>
    );
  }
}

export default Header;
