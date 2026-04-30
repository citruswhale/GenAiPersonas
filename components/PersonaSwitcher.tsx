"use client";

import { Persona, personaList, PersonaId } from "@/lib/personas";

interface Props {
    active: PersonaId;
    onChange: (id: PersonaId) => void;
}

export default function PersonaSwitcher({ active, onChange }: Props) {
    return (
        <div className="flex bg-gray-100 rounded-xl p-1">
            {personaList.map((persona: Persona) => {
                const isActive = active === persona.id;

                return (
                    <button
                        key={persona.id}
                        onClick={() => onChange(persona.id)}
                        className={`flex items-center gap-2 flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all
              ${
                            isActive
                                ? "bg-white shadow-sm text-gray-900"
                                : "text-gray-500 hover:text-gray-800"
                        }`}
                    >
            <span
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                ${isActive ? persona.bgColor : "bg-gray-300 text-gray-600"}`}
            >
              {persona.avatar}
            </span>

                        <span className="hidden sm:inline">
              {persona.name.split(" ")[0]}
            </span>
                    </button>
                );
            })}
        </div>
    );
}