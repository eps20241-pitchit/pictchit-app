import imagemLogin from '../../assets/imagem-login.svg';
import React, { useState } from 'react';
import { getUser, saveLoggedInUser } from '../../service/login.service';
import { useNavigate } from 'react-router-dom'; // Import the Redirect component

const Login = () => {
  const [usuario, setUsuario] = React.useState({
    name: '',
    email: '',
    password: '',
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controlar se o usuário está logado
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate(); // Correctly get the navigate function

  const saveUser = (e: React.FormEvent) => {
    e.preventDefault(); // Previne o reload da página
    console.log(usuario, isLoggedIn, loginError);
    getUser(usuario).then((response) => {
      console.log(response);
      if (response) {
        setIsLoggedIn(true); // Atualiza o estado para refletir que o usuário está logado
        saveLoggedInUser(response); 
        navigate('/pitch');
        window.location.reload();
      } else {
        setLoginError(true); // Exibe mensagem de erro se não encontrar o usuário
      }
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 flex flex-col md:flex-row md:max-w-4xl">
        <div className="flex items-center justify-center mb-6 md:mb-0 md:w-1/2">
          <img
            src={imagemLogin}
            alt="Imagem de um computador"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="md:w-1/2 md:pl-6">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <form className="space-y-4" onSubmit={saveUser}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                onChange={(e) => setUsuario({ ...usuario, email: e.target.value })}
                type="text"
                placeholder="E-mail"
                className="input-field"
              />
              <input
                onChange={(e) => setUsuario({ ...usuario, password: e.target.value })}
                type="password"
                placeholder="Senha"
                className="input-field"
              />
            </div>
            {loginError && (
              <div className="text-red-500 text-center">Email ou senha incorretos</div>
            )}
            <div className="flex justify-end">
              <button type="submit" className="btn btn-cancel">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
