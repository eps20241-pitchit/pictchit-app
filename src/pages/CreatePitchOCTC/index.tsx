import { Spinner } from "../../components/Spinnet";
import { useCreatePitchOCTCController } from "./useCreatePitchOCTCController";

export function CreatePitchOCTC() {
  const {register, handleSubmit, errors, isLoading} = useCreatePitchOCTCController();

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-white m-8 p-8 rounded-md shadow-xl">
          <header className="font-normal text-5xl text-[#003366] mb-8">
            <h2 className="text-2xl font-bold mb-6 text-[#003366]">Pitch OCTC</h2>
          </header>

          <div className="flex flex-col justify-center items-start">
            <form onSubmit={handleSubmit}>
              <div className="mt-4">
                <label htmlFor="nomeProjeto" className="text-base text-[#003366]">Nome do Projeto</label>
                <input className="w-full border-[1px] border-[#003366] rounded-md p-1 mt-2"
                      {...register('nomeProjeto')}
                      type="text"
                      name="nomeProjeto"
                      id="nomeProjeto"
                      placeholder="Nome do Projeto"
                />
                {errors && (
                  <div className='flex gap-2 items-center text-red-900 mt-1'>
                    <span className='text-xs'>{errors.nomeProjeto?.message}</span>
                  </div>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="intro" className="text-base text-[#003366]">Introdução</label>
                <input className="w-full border-[1px] border-[#003366] rounded-md p-1 mt-2"
                      {...register('intro')}
                      type="text"
                      name="intro"
                      id="intro"
                />
                {errors && (
                  <div className='flex gap-2 items-center text-red-900 mt-1'>
                    <span className='text-xs'>{errors.intro?.message}</span>
                  </div>
                )}
              </div>

              <div className="text-[#003366] font-semibold pb-1 pt-4">Conceituar</div>
              <div className="mt-4">
                <label htmlFor="originalidade" className="text-base text-[#003366]">O que diferencia o seu projeto/produto e o torna único?</label>
                <input className="w-full border-[1px] border-[#003366] rounded-md p-1 mt-2"
                      {...register('originalidade')}
                      type="text"
                      name="originalidade"
                      id="originalidade"
                />
                {errors && (
                  <div className='flex gap-2 items-center text-red-900 mt-1'>
                    <span className='text-xs'>{errors.originalidade?.message}</span>
                  </div>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="diferencial" className="text-base text-[#003366]">Quais são as capacidades exclusivas que o seu projeto possui e que o diferencia dos outros?</label>
                <input className="w-full border-[1px] border-[#003366] rounded-md p-1 mt-2"
                      {...register('diferencial')}
                      type="text"
                      name="diferencial"
                      id="diferencial"
                />
                {errors && (
                  <div className='flex gap-2 items-center text-red-900 mt-1'>
                    <span className='text-xs'>{errors.diferencial?.message}</span>
                  </div>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="necessidade" className="text-base text-[#003366]">Qual a maior necessidade que a sua organização/produto atende?</label>
                <input className="w-full border-[1px] border-[#003366] rounded-md p-1 mt-2"
                      {...register('necessidade')}
                      type="text"
                      name="necessidade"
                      id="necessidade"
                />
                {errors && (
                  <div className='flex gap-2 items-center text-red-900 mt-1'>
                    <span className='text-xs'>{errors.necessidade?.message}</span>
                  </div>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="problema" className="text-base text-[#003366]">Que problema essa solução resolve?</label>
                <input className="w-full border-[1px] border-[#003366] rounded-md p-1 mt-2"
                      {...register('problema')}
                      type="text"
                      name="problema"
                      id="problema"
                />
                {errors && (
                  <div className='flex gap-2 items-center text-red-900 mt-1'>
                    <span className='text-xs'>{errors.problema?.message}</span>
                  </div>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="publicoAlvo" className="text-base text-[#003366]">Quem são os principais beneficiários dessa solução? Qual é o seu público-alvo?</label>
                <input className="w-full border-[1px] border-[#003366] rounded-md p-1 mt-2"
                      {...register('publicoAlvo')}
                      type="text"
                      name="publicoAlvo"
                      id="publicoAlvo"
                />
                {errors && (
                  <div className='flex gap-2 items-center text-red-900 mt-1'>
                    <span className='text-xs'>{errors.publicoAlvo?.message}</span>
                  </div>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="lacunaMercado" className="text-base text-[#003366]">Qual(is) é(são) a(s) lacuna(s) no mercado que sua solução preenche?</label>
                <input className="w-full border-[1px] border-[#003366] rounded-md p-1 mt-2"
                      {...register('lacunaMercado')}
                      type="text"
                      name="lacunaMercado"
                      id="lacunaMercado"
                />
                {errors && (
                  <div className='flex gap-2 items-center text-red-900 mt-1'>
                    <span className='text-xs'>{errors.lacunaMercado?.message}</span>
                  </div>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="competitividade" className="text-base text-[#003366]">O que torna sua concorrência inferior?</label>
                <input className="w-full border-[1px] border-[#003366] rounded-md p-1 mt-2"
                      {...register('competitividade')}
                      type="text"
                      name="competitividade"
                      id="competitividade"
                />
                {errors && (
                  <div className='flex gap-2 items-center text-red-900 mt-1'>
                    <span className='text-xs'>{errors.competitividade?.message}</span>
                  </div>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="comoFunciona" className="text-base text-[#003366]">O que permite sua solução funcionar? Como ela funciona?</label>
                <input className="w-full border-[1px] border-[#003366] rounded-md p-1 mt-2"
                      {...register('comoFunciona')}
                      type="text"
                      name="comoFunciona"
                      id="comoFunciona"
                />
                {errors && (
                  <div className='flex gap-2 items-center text-red-900 mt-1'>
                    <span className='text-xs'>{errors.comoFunciona?.message}</span>
                  </div>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="quemFaz" className="text-base text-[#003366]">Quem realmente executa o serviço?</label>
                <input className="w-full border-[1px] border-[#003366] rounded-md p-1 mt-2"
                      {...register('quemFaz')}
                      type="text"
                      name="quemFaz"
                      id="quemFaz"
                />
                {errors && (
                  <div className='flex gap-2 items-center text-red-900 mt-1'>
                    <span className='text-xs'>{errors.quemFaz?.message}</span>
                  </div>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="qtdPessoasProblema" className="text-base text-[#003366]">Quantas pessoas tem esse problema? Existe alguma pesquisa relacionado a isso? Quais são os dados?</label>
                <input className="w-full border-[1px] border-[#003366] rounded-md p-1 mt-2"
                      {...register('qtdPessoasProblema')}
                      type="text"
                      name="qtdPessoasProblema"
                      id="qtdPessoasProblema"
                />
                {errors && (
                  <div className='flex gap-2 items-center text-red-900 mt-1'>
                    <span className='text-xs'>{errors.qtdPessoasProblema?.message}</span>
                  </div>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="processo" className="text-base text-[#003366]">Existe um processo que deve ser seguido com precisão?</label>
                <input className="w-full border-[1px] border-[#003366] rounded-md p-1 mt-2"
                      {...register('processo')}
                      type="text"
                      name="processo"
                      id="processo"
                />
                {errors && (
                  <div className='flex gap-2 items-center text-red-900 mt-1'>
                    <span className='text-xs'>{errors.processo?.message}</span>
                  </div>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="economiaPublico" className="text-base text-[#003366]">Quanto o seu público poderá economizar com a sua solução?</label>
                <input className="w-full border-[1px] border-[#003366] rounded-md p-1 mt-2"
                      {...register('economiaPublico')}
                      type="text"
                      name="economiaPublico"
                      id="economiaPublico"
                />
                {errors && (
                  <div className='flex gap-2 items-center text-red-900 mt-1'>
                    <span className='text-xs'>{errors.economiaPublico?.message}</span>
                  </div>
                )}
              </div>

              <div className="text-[#003366] font-semibold pb-1 pt-4">Contextualizar</div>
              <div className="mt-4">
                <label htmlFor="verificacaoNegocio" className="text-base text-[#003366]">Existe alguma pesquisa feita por terceiros que já verificou suas alegações e hipóteses?</label>
                <input className="w-full border-[1px] border-[#003366] rounded-md p-1 mt-2"
                      {...register('verificacaoNegocio')}
                      type="text"
                      name="verificacaoNegocio"
                      id="verificacaoNegocio"
                />
                {errors && (
                  <div className='flex gap-2 items-center text-red-900 mt-1'>
                    <span className='text-xs'>{errors.verificacaoNegocio?.message}</span>
                  </div>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="fornecedor" className="text-base text-[#003366]">Com qual parceiro ou fornecedor você está trabalhando para entregar isso?</label>
                <input className="w-full border-[1px] border-[#003366] rounded-md p-1 mt-2"
                      {...register('fornecedor')}
                      type="text"
                      name="fornecedor"
                      id="fornecedor"
                      />
                {errors && (
                  <div className='flex gap-2 items-center text-red-900 mt-1'>
                    <span className='text-xs'>{errors.fornecedor?.message}</span>
                  </div>
                )}
              </div>

              <div className="mt-4">
                <label htmlFor="apoiador" className="text-base text-[#003366]">Existem apoiadores inesperados do seu projeto/solução?</label>
                <input className="w-full border-[1px] border-[#003366] rounded-md p-1 mt-2"
                      {...register('apoiador')}
                      type="text"
                      name="apoiador"
                      id="apoiador"
                />
                {errors && (
                  <div className='flex gap-2 items-center text-red-900 mt-1'>
                    <span className='text-xs'>{errors.apoiador?.message}</span>
                  </div>
                )}
              </div>

              <div className="text-[#003366] font-semibold pb-1 pt-4">Efetivar</div>
              <div className="mt-4">
                <label htmlFor="resultado" className="text-base text-[#003366]">Quais foram os resultados positivos que o motivaram a realizar esse projeto?</label>
                <input className="w-full border-[1px] border-[#003366] rounded-md p-1 mt-2"
                      {...register('resultado')}
                      type="text"
                      name="resultado"
                      id="resultado"
                />
                {errors && (
                  <div className='flex gap-2 items-center text-red-900 mt-1'>
                    <span className='text-xs'>{errors.resultado?.message}</span>
                  </div>
                )}
              </div>

              <div className="mt-4"></div>

              <div className="flex w-full justify-end items-center gap-4">
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
  )
}