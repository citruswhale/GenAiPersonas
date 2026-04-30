"use client";

import { Persona, personaList, PersonaId } from "@/lib/personas";

interface Props {
  active: PersonaId;
  onChange: (id: PersonaId) => void;
}

export default function PersonaSwitcher({ active, onChange }: Props) {
  return (
      <div className="flex flex-col sm:flex-row gap-2 p-3 bg-white/60 backdrop-blur-lg border-b border-white/20 shadow-sm">
        {personaList.map((persona: Persona) => (
            <button
                key={persona.id}
                onClick={() => onChange(persona.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all flex-1 justify-center sm:justify-start
            ${
                    active === persona.id
                        ? `${persona.bgColor} ${persona.color} ring-2 ring-white/40 shadow-md scale-[1.02]`
                        : "bg-white/40 text-gray-600 hover:bg-white/60 backdrop-blur-md"
                }`}
            >
          <span
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0
              ${
                  active === persona.id
                      ? persona.bgColor
                      : "bg-gray-300 text-gray-600"
              }`}
          >
            {persona.avatar}
          </span>

              <div className="text-left hidden sm:block">
                <div className="leading-tight">{persona.name}</div>
                <div className="text-xs opacity-70 font-normal">
                  {persona.title.split(",")[0]}
                </div>
              </div>

              <div className="sm:hidden">
                {persona.name.split(" ")[0]}
              </div>
            </button>
        ))}
      </div>
  );
}