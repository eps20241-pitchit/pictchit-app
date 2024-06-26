import { useCreatePitchController } from "./useCreatePitchController"

export function CreatePitch() {
  const {register, handleSubmit, errors} = useCreatePitchController();

  return (
    <>
      <div className="w-full h-full relative">
        <div className="bg-[#003366] w-[1000px] h-[1000px] -z-10 fixed top-0 -right-1/4 rounded-full "></div>
      </div>

      <div className="flex justify-center items-center w-full h-screen">
        <div className="rounded-lg h-[485px] w-[571px] bg-white p-8 shadow-xl">
          <header className="font-normal text-5xl text-[#003366] mb-8">Gerar Pitch</header>
          <div className="flex flex-col justify-center items-start">
            <form onSubmit={handleSubmit}>
              <label htmlFor="nome" className="text-base text-[#003366]">Nome</label>
              <input className="w-full border-[1px] border-[#003366] rounded-md p-1 mt-2"
                    {...register('nome')}
                    type="text"
                    name="nome"
                    id="nome"
                    placeholder="Nome da empresa"
              />
              {errors && (
                <div className='flex gap-2 items-center text-red-900 mt-1'>
                  <span className='text-xs'>{errors.nome?.message}</span>
                </div>
              )}

              <div className="mt-4"></div>
              <label htmlFor="descricao" className="text-base text-[#003366]">Descrição</label>
              <textarea className="w-full h-40 border-[1px] border-[#003366] rounded-md p-1 mt-2"
                    {...register('descricao')}
                    name="descricao"
                    id="descricao"
                    placeholder="Descrição detalhada da sua empresa" />

              {errors && (
                <div className='flex gap-2 items-center text-red-900'>
                  <span className='text-xs'>{errors.descricao?.message}</span>
                </div>
              )}

              <div className="mt-4"></div>
              <div className="flex w-full justify-between items-center">
                <a href="/" className="bg-[#003366] text-white text-center font-bold text-lg w-56 rounded-full p-1">Cancelar</a>
                {localStorage.loggedInUser?
                <button className="bg-[#006633] text-white font-bold text-lg w-56 rounded-full p-1">Gerar</button>
                :
                <a href="/login" className="bg-[#808080] text-white text-center font-bold text-lg w-56 rounded-full p-1">É necessario estar logado</a>
              }
              </div>
            </form>
          </div>

        </div>
      </div>

    </>
  )
}
