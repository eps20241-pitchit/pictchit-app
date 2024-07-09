import React from "react";
import { usePitchController } from "./usePitchController";

interface PitchResponse {
  id: string;
  userId: string;
  pitchText: string;
}

const Pitch: React.FC = () => {
  const { pitches } = usePitchController();
  console.log(pitches)
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-white m-8 p-8 rounded-md shadow-xl">
        <header className="font-normal text-5xl text-[#003366] mb-8">
          <h2 style={{ fontSize: '3rem' }}>Pitches Gerados</h2>
        </header>

        <div className="flex flex-col justify-center items-center gap-6">
        {pitches.length ==  0?
          <div className="rounded-lg shadow-md border border-sky-500 p-5">
            Essa conta não tem nem um Pitch gerado. Gere um agora. 
            <a href="/create-pitch" className="text-green-500 text-center font-bold text-lg w-100 rounded-full p-1">Clique aqui</a>
            
          </div>
          :
          <div>
          {pitches.map((pitch: PitchResponse) => (
            <div className="rounded-lg shadow-md border border-sky-500 p-5" key={pitch.id}>
              {pitch.pitchText}
            </div>
          ))}</div>
          }
        </div>
      </div>
    </div>
  );
};



export default Pitch;
