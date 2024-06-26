import React from 'react';
import './navbar.css';
import logo from '../assets/logo.png'

const Navbar: React.FC = () => {
  const teste = () => {
    localStorage.clear()
  }
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/introduction">Quem somos</a></li>
        <li><a href="/contact">Contato</a></li>
        {localStorage.loggedInUser && <li><a href="/create-pitch">Gerar Pitch</a></li>}
        {localStorage.loggedInUser && <li><a href="/pitch">Pitches Gerados</a></li>}
      </ul>
      {!localStorage.loggedInUser?
      <div className="navbar-buttons">
        <a href="/login" className="login-button">Login</a>
        <a href="/register" className="register-button">Cadastro</a>
        </div>
      :
        <div className="navbar-buttons">
        <a href="/" onClick={() => teste()} className="login-button">Sair</a>
        </div>
      }
    </nav>
  );
};

export default Navbar;
