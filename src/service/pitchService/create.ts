import { httpClient } from "../httpClient";

export interface CompletionParams {
  question: string;
}

export async function Create(params: CompletionParams) {
  const { data } = await httpClient.post('https://pitchit-api.onrender.com/api/pitch/completion', params);

	return data;
}
