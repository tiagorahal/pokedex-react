/* eslint-disable */
import React from 'react';
import './App.css';
import './styles/Header.css';
import './styles/HomePage.css';
import './styles/ItemSelected.css';
import './styles/Footer.css';
import './styles/queries.css';

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
