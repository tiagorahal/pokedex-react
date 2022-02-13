/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import TopImage from '../../assets/images/pokelogo.png';
import '../../styles/ItemSelected.css';

class ItemSelected extends React.Component {
  render() {
    return (
      <div className="ItemSelected">
        <div className="TopSection">
          <figure className="TopImage">
            <img src={TopImage} alt="Pokemon" />
            <figcaption>Pokemon Name / id</figcaption>
          </figure>
        </div>
        <div className="MidSection">
          <p>type: ----</p>
          <p>height: ----</p>
          <p>weight: ----</p>
          <p>generation: ----</p>
        </div>
      </div>
    );
  }
}

export default ItemSelected;
