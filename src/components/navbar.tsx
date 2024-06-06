import React from 'react';
import './navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="src/assets/logo.png" alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="/" className="active">Home</a></li>
        <li><a href="/introduction">Quem somos</a></li>
        <li><a href="/contato">Contato</a></li>
      </ul>
      <div className="navbar-buttons">
        <button className="login-button">Login</button>
        <a href="/register" className="register-button">Cadastro</a>
        </div>
    </nav>
  );
};

export default Navbar;
