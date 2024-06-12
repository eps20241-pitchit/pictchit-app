import imagemSupport from '../../assets/support.svg'

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 flex flex-col md:flex-row md:max-w-4xl">
        <div className="flex items-center justify-center mb-6 md:mb-0 md:w-1/3">
          <img
            src={imagemSupport}
            alt="Imagem de um computador"
            className="w-3/4 h-auto object-cover" // Reduced image size
          />
        </div>
        <div className="md:w-2/3 md:pl-6">
          <h2 className="text-2xl font-bold mb-6">Contato</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <input
                type="text"
                placeholder="Nome"
                className="input-field"
              />
              <input
                type="text"
                placeholder="E-mail"
                className="input-field"
              />
              <input
                type="text"
                placeholder="Escreva aqui o motivo do contato"
                className="input-field md:col-span-2 h-32" // Span across two columns
              />
            </div>
            <div className="flex justify-center">
              <button type="button" className="btn btn-cancel">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
