/* eslint-disable */
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SidePanel from './components/SidePanel/SidePanel';

class App extends React.Component {
  render() {
    return (
      <div className="App">       
        <Header />
        <SidePanel />
      </div>
    );
  }
}

export default App;
