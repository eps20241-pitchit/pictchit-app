import { httpClient } from "../httpClient";

export interface PitchOCTCParams {
  userId: string;
  nomeProjeto: string;
  intro: string;
  originalidade: string;
  diferencial: string;
  necessidade: string;
  problema: string;
  publicoAlvo: string;
  lacunaMercado: string;
  competitividade: string;
  comoFunciona: string;
  quemFaz: string;
  qtdPessoasProblema: string;
  processo: string;
  economiaPublico: string;
  verificacaoNegocio: string;
  fornecedor: string;
  apoiador: string;
  resultado: string;
}

export async function CreateOCTC(params: PitchOCTCParams) {

  const { data } = await httpClient.post('/pitch/octc', params);

	return data;
}