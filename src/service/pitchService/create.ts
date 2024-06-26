import { httpClient } from "../httpClient";

export interface CompletionParams {
  userId: number;
  projectName: string;
  description: string;
}

export async function Create(params: CompletionParams) {
  console.log(params);

  const { data } = await httpClient.post('/pitch/create', params);

	return data;
}
