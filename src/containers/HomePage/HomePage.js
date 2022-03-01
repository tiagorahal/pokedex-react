/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import ItemSelected from '../ItemSelected/ItemSelected';

class HomePage extends React.Component {
  render() {
    return (
      <div className="HomePage">
        <h2>Chose the Pokemon that you want to know more about!</h2>
        <div className="SelectMenu">
          <div className="SelectedRow">
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
            <ItemSelected />
            <ItemSelected />
            <ItemSelected />
            <ItemSelected />
            <ItemSelected />
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
