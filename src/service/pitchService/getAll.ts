import { httpClient } from "../httpClient";

interface PitchResponse {
  id: string;
  userId: number;
  pitchText: string;
}

export async function getAll() {
  const { data } = await httpClient.get<PitchResponse[]>('/pitch');

  return data;
}
