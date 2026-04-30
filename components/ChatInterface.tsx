"use client";

import { useState, useRef, useEffect } from "react";
import { PersonaId, personas } from "@/lib/personas";
import PersonaSwitcher from "./PersonaSwitcher";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatInterface() {
  const [activePersona, setActivePersona] = useState<PersonaId>("anshuman");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const persona = personas[activePersona];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handlePersonaChange = (id: PersonaId) => {
    if (id === activePersona) return;
    setActivePersona(id);
    setMessages([]);
    setError(null);
    setInput("");
  };

  const sendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return;
    setError(null);

    const userMessage: Message = { role: "user", content: content.trim() };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages,
          personaId: activePersona,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Request failed");

      const assistantMessage: Message = {
        role: "assistant",
        content: data.message,
      };

      setMessages([...updatedMessages, assistantMessage]);
    } catch (err) {
      setError(
          err instanceof Error ? err.message : "Something went wrong. Try again."
      );
      setMessages(messages);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
      <div className="flex flex-col h-full bg-gray-50">

        {/* ✅ CLEAN HEADER + SWITCHER COMBINED */}
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-3xl mx-auto px-4 py-3">

            <div className="mb-3">
              <h1 className="text-lg font-semibold text-gray-900">
                Chat with Scaler Leaders
              </h1>
              <p className="text-xs text-gray-500">
                Ask questions, get insights, switch perspectives
              </p>
            </div>

            <PersonaSwitcher
                active={activePersona}
                onChange={handlePersonaChange}
            />
          </div>
        </header>

        {/* MAIN */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto px-4 py-6">

            {messages.length === 0 && (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div
                      className={`w-16 h-16 rounded-full ${persona.bgColor} flex items-center justify-center text-2xl font-bold ${persona.color} mb-4`}
                  >
                    {persona.avatar}
                  </div>

                  <h2 className={`text-xl font-bold mb-1 ${persona.color}`}>
                    {persona.name}
                  </h2>

                  <p className="text-sm text-gray-500 mb-8">{persona.title}</p>

                  <p className="text-sm text-gray-600 mb-4 font-medium">
                    Try asking:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-lg">
                    {persona.suggestions.map((s, i) => (
                        <button
                            key={i}
                            onClick={() => sendMessage(s)}
                            className="text-left text-sm bg-white border border-gray-200 rounded-xl px-4 py-3 hover:border-gray-400 hover:shadow-sm transition-all text-gray-700"
                        >
                          {s}
                        </button>
                    ))}
                  </div>
                </div>
            )}

            {messages.map((msg, i) => (
                <MessageBubble key={i} message={msg} persona={persona} />
            ))}

            {isLoading && <TypingIndicator name={persona.name} />}

            {error && (
                <div className="flex justify-center mb-4">
                  <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-2 rounded-xl">
                    {error}
                  </div>
                </div>
            )}

            <div ref={bottomRef} />
          </div>
        </main>

        {/* FOOTER */}
        <footer className="bg-white border-t border-gray-200 px-4 py-3">
          <div className="max-w-3xl mx-auto flex gap-2 items-end">
          <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={`Ask ${persona.name.split(" ")[0]} anything...`}
              rows={1}
              className="flex-1 resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent max-h-32 overflow-y-auto"
              style={{ minHeight: "44px" }}
              disabled={isLoading}
          />

            <button
                onClick={() => sendMessage(input)}
                disabled={!input.trim() || isLoading}
                className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex-shrink-0"
            >
              ➤
            </button>
          </div>

          <p className="text-xs text-gray-400 text-center mt-2">
            Press Enter to send · Shift+Enter for new line · Switching personas resets the conversation
          </p>
        </footer>
      </div>
  );
}