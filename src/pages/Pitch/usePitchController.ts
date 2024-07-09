import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { pitchService } from "../../service/pitchService";

interface PitchResponse {
  id: string;
  userId: string;
  pitchText: string;
}

export function usePitchController() {
  const [isLoading, setIsLoading] = useState(false);
  const [pitches, setPitches] = useState<PitchResponse[]>([]);

  useEffect(() => {
    async function fetchPitches() {
      try {
        setIsLoading(true);
        const fetchedPitches = await pitchService.getAll();
        setPitches(fetchedPitches);
        toast.success("Os Pitches foram carregados com sucesso!");
      } catch (err) {
        console.log(err);

        toast.error("Ocorreu um erro ao carregar os Pitches. Por favor, tente novamente.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchPitches();
  }, []);

  return { pitches: pitches ?? [], isLoading };
}
