/* eslint-disable */
import React from "react";
import '../../styles/Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className='Header'>
        <h1>Pokemon Header</h1>
        <a href="/">Pokemons,</a>
        <a href="/">Types,</a>
        <a href="/">Something</a>
      </div>
    )
  }
}

export default Header;