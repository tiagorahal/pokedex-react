/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import TopImage from '../../assets/images/5818315.png';
import '../../styles/ItemSelected.css';

class ItemSelected extends React.Component {
  render() {
    return (
      <div className="ItemSelected">
        <div className="TopSection">
          <figure className="TopImage">
            <img src={TopImage} alt="Pokemon" />
          </figure>
        </div>
      </div>
    );
  }
}

export default ItemSelected;
