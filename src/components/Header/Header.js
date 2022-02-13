/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import '../../styles/Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <h1>Pokedex</h1>
        <div className="Header-links">
          <a href="/">Pokemons</a>
          <a href="/">Types</a>
          <a href="/">Something</a>
        </div>
      </div>
    );
  }
}

export default Header;
