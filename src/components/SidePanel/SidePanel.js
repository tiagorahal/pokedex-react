/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import '../../styles/SidePanel.css';

class SidePanel extends React.Component {
  render() {
    return (
      <div className="SidePanel">
        <span>
          <a href="/">Testing the side panel</a>
        </span>
      </div>
    );
  }
}

export default SidePanel;
