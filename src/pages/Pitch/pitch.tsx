import React from "react";
import { usePitchController } from "./usePitchController";

interface PitchResponse {
  id: string;
  userId: number;
  pitchText: string;
}

const Pitch: React.FC = () => {
  const { pitches } = usePitchController();

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h-full w-full bg-white p-8">
        <header className="font-normal text-5xl text-[#003366] mb-8">
          <h2 style={{ fontSize: '3rem' }}>Pitches Gerados</h2>
        </header>

        <div className="flex flex-col justify-center items-center gap-6">
        {pitches.map((pitch: PitchResponse) => (
          <div className="rounded-lg shadow-md border border-sky-500 p-5" key={pitch.id}>
            {pitch.pitchText}
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Pitch;
