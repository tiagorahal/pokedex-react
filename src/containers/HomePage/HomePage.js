/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import ItemSelected from '../ItemSelected/ItemSelected';
import '../../styles/HomePage.css';

class HomePage extends React.Component {
  render() {
    return (
      <div className="HomePage">
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing eliorem ipsum dolor sit amet.</h1>
        <div className="SelectMenu">
          <ItemSelected />
          <ItemSelected />
          <ItemSelected />
          <ItemSelected />
          <ItemSelected />
          <ItemSelected />
          <ItemSelected />
          <ItemSelected />
          <ItemSelected />
          <ItemSelected />
        </div>
      </div>
    );
  }
}

export default HomePage;
