import { Spinner } from "../../components/Spinnet";
import { useCreatePitchController } from "./useCreatePitchController"

export function CreatePitch() {
  const {register, handleSubmit, errors, isLoading} = useCreatePitchController();

  return (
    <>
      <div className="w-full h-full relative">
        <div className="bg-[#003366] w-[1000px] h-[1000px] -z-10 fixed top-0 -right-1/4 rounded-full "></div>
      </div>

      <div className="flex justify-center items-center w-full h-screen">
        <div className="rounded-lg h-[485px] w-[571px] bg-white p-8 shadow-xl">
          <header className="font-normal text-5xl text-[#003366] mb-8">
            <h2 className="text-2xl font-bold mb-6 text-[#003366]">Gerar Pitch Simples</h2>
          </header>
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
              <div className="flex w-full justify-between items-center gap-4">
                <a href="/" className="bg-[#003366] text-white text-center font-bold text-lg w-56 rounded-full p-1">Cancelar</a>
                <button
                  className="bg-[#006633] text-white font-bold text-lg w-56 rounded-full p-1 disabled:bg-slate-300 disabled:text-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
                  disabled={isLoading}
                >
                  {!isLoading && "Gerar"}
                  {isLoading && <Spinner />}
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>

    </>
  )
}
