import React from 'react';
import './home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Pitch It!</h1>
        <p>Apresentando a sua empresa para o mundo!</p>
        <button className="learn-more-button">Saiba mais</button>
      </div>
      <div className="home-image">
        <img src="src/assets/image_home.png" alt="home Illustration" />
      </div>
    </div>
  );
};

export default Home;
