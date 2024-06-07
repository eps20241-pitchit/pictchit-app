import { httpClient } from "../httpClient";

export interface CompletionParams {
  question: string;
}

export async function Create(params: CompletionParams) {
  const { data } = await httpClient.post('/openai/completion', params);

	return data;
}
