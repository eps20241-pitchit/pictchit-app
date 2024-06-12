import imagemLogin from '../../assets/imagem-login.svg'

const Login = () => {
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
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <input
                type="text"
                placeholder="E-mail"
                className="input-field"
              />
              <input
                type="text"
                placeholder="Senha"
                className="input-field"
              />
            </div>
            <div className="flex justify-end">
              <button type="button" className="btn btn-cancel">
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
