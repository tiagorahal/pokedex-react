/* eslint-disable */
import React from 'react';
import './App.css';
import './styles/queries.css'
import Header from './components/Header/Header';
import HomePage from './containers/HomePage/HomePage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">       
        <Header />
        <HomePage />
        <Footer />
      </div>
  );
}

export default App;
