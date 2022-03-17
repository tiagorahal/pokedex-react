import React from 'react';
import ItemSelected from '../ItemSelected/ItemSelected';

const HomePage = () => {
  const homePageText = 'Those are the pokémons that Arceus choose for you!';
  return (
    <div className="HomePage">
      <h2>{homePageText}</h2>
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
        </div>
      </div>
    </div>
  );
};

export default HomePage;
