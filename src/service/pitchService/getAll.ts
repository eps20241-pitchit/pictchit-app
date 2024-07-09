import { httpClient } from "../httpClient";

interface PitchResponse {
  id: string;
  userId: string;
  pitchText: string;
}

export async function getAll() {
  const x = JSON.parse(localStorage.loggedInUser) ?? "";
  const userId = x.id;

  const { data } = await httpClient.get<PitchResponse[]>(`/pitch/${userId}`);

  return data;
}
