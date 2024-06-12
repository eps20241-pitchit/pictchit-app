import React from 'react';
import './navbar.css';
import logo from '../assets/logo.png'

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/introduction">Quem somos</a></li>
        <li><a href="/contato">Contato</a></li>
        <li><a href="/create-pitch">Gerar Pitch</a></li>
        <li><a href="/pitch">Pitchs Gerados</a></li>
      </ul>
      <div className="navbar-buttons">
        <a href="/login" className="login-button">Login</a>
        <a href="/register" className="register-button">Cadastro</a>
        </div>
    </nav>
  );
};

export default Navbar;
