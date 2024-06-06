// Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div style={{
        backgroundColor: '#333',
        color: '#fff',
        height: '110px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
      }}>
        <div>
          {/* Botões de navegação */}
          <Link to="/" style={{ marginRight: '20px', color: '#fff', textDecoration: 'none' }}>Home</Link>
          <Link to="/introduction" style={{ marginRight: '20px', color: '#fff', textDecoration: 'none' }}>Introdução</Link>
        </div>
        <div>
          {/* Botões de login e cadastro */}
          <button style={{ marginRight: '20px' }}>Login</button>
          <button>Cadastro</button>
        </div>
      </div>
  );
};

export default Navbar;
