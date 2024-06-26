import React from 'react';
import './home.css';
import imageHome from '../../assets/image_home.png';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Pitch It!</h1>
        <p>Apresentando a sua empresa para o mundo!</p>
        <a href="/introduction" className="learn-more-button">Saiba mais</a>
      </div>
      <div className="home-image">
        <img src={imageHome} alt="home Illustration" />
      </div>
    </div>
  );
};

export default Home;
