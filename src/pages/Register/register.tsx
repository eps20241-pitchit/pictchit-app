import React from 'react';
import imagemPessoa from './images/pessoa.png';
import { createUser, sendConfirmation} from '../../service/login.service';

const Register = () => {
  const [usuario, setUsuario] = React.useState({
    name: '',
    email: '',
    password: '',
  });

  const saveUser = (e: React.FormEvent) => {
    e.preventDefault(); // Previne o reload da página
    console.log(usuario);
    createUser(usuario).then((response) => {
      console.log(response);
      const email = { 
        to: usuario.email,
        subject: 'Pitch It Confirmação de Cadastro',
        text: 'Olá ' + usuario.name + '\nNos da equipe Pitch It agradecemos pelo seu cadastro, esperamos poder ajudar você na evolução de seu negocio.'
      }
      sendConfirmation(email).then(() => {
        console.log("enviou")
      })
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 flex flex-col md:flex-row md:max-w-4xl">
        <div className="flex items-center justify-center mb-6 md:mb-0 md:w-1/2">
          <img src={imagemPessoa} alt="Imagem de uma pessoa apresentando" className="w-full h-auto object-cover" />
        </div>
        <div className="md:w-1/2 md:pl-6">
          <h2 className="text-2xl font-bold mb-6">Cadastro</h2>
          <form className="space-y-4" onSubmit={saveUser}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                onChange={(e) => setUsuario({ ...usuario, name: e.target.value })}
                type="text"
                placeholder="Nome"
                className="input-field"
              />
              <input
                onChange={(e) => setUsuario({ ...usuario, email: e.target.value })}
                type="email"
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
            <div className="flex justify-between">
              <button type="button" className="btn btn-cancel">Cancelar</button>
              <button type="submit" className="btn btn-register">Registrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
