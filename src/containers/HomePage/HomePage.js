/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import ItemSelected from '../ItemSelected/ItemSelected';
import '../../styles/HomePage.css';

class HomePage extends React.Component {
  render() {
    return (
      <div className="HomePage">
        <h1>Chose the Pokemon that you want to know about!</h1>
        <div className="SelectMenu">
          <div className="SelectedRow">
            <ItemSelected />
            <ItemSelected />
            <ItemSelected />
          </div>
          <div className="SelectedRow">
            <ItemSelected />
            <ItemSelected />
            <ItemSelected />
          </div>
          <div className="SelectedRow">
            <ItemSelected />
            <ItemSelected />
            <ItemSelected />
          </div>
          <div className="SelectedRow">
            <ItemSelected />
            <ItemSelected />
            <ItemSelected />
          </div>
          <div className="SelectedRow">
            <ItemSelected />
            <ItemSelected />
            <ItemSelected />
          </div>
          <div className="SelectedRow">
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
