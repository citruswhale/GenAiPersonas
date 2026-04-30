import { Persona } from "@/lib/personas";

interface Message {
    role: "user" | "assistant";
    content: string;
}

interface Props {
    message: Message;
    persona: Persona;
}

export default function MessageBubble({ message, persona }: Props) {
    const isUser = message.role === "user";

    if (isUser) {
        return (
            <div className="flex justify-end mb-5">
                <div className="max-w-[75%] bg-gradient-to-br from-cyan-600 to-cyan-300 text-white rounded-2xl rounded-tr-none px-5 py-3 shadow-lg backdrop-blur-md border border-white/20">
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">
                        {message.content}
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex items-start gap-3 mb-5">
            <div
                className={`w-9 h-9 rounded-full ${persona.bgColor} flex items-center justify-center text-xs font-bold ${persona.color} flex-shrink-0 shadow-md`}
            >
                {persona.avatar}
            </div>

            <div className="max-w-[75%] bg-white/60 backdrop-blur-lg border border-white/30 rounded-2xl rounded-tl-none px-5 py-3 shadow-lg">
                <p className={`text-xs font-semibold mb-1 ${persona.color}`}>
                    {persona.name}
                </p>
                <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-wrap">
                    {message.content}
                </p>
            </div>
        </div>
    );
}