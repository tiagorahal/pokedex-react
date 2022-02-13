/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import SidePanel from '../../components/SidePanel/SidePanel';
import '../../styles/HomePage.css';

class HomePage extends React.Component {
  render() {
    return (
      <div className="HomePage">
        <div>
          <SidePanel />
        </div>
        <div>
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing eliorem ipsum dolor sit amet.</h1>
        </div>
      </div>
    );
  }
}

export default HomePage;
