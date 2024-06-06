import React from 'react';

const TopBar: React.FC = () => {
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
          <button style={{ marginRight: '20px' }}>Página 1</button>
          <button style={{ marginRight: '20px' }}>Página 2</button>
          <button style={{ marginRight: '20px' }}>Página 3</button>
        </div>
        <div>
          {/* Botões de login e cadastro */}
          <button style={{ marginRight: '20px' }}>Login</button>
          <button>Cadastro</button>
        </div>
      </div>
  );
}

export default TopBar;
