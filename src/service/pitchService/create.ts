import { httpClient } from "../httpClient";

export interface CompletionParams {
  projectName: string;
  description: string;
}

export async function Create(params: CompletionParams) {

  const { data } = await httpClient.post('https://pitchit-api.onrender.com/pitch/create', params);

	return data;
}
