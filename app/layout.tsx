import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Scaler Persona Chatbot",
    description:
        "Chat with AI personas of Scaler Academy leaders — Anshuman Singh, Abhimanyu Saxena, and Kshitij Mishra",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
        <body className="min-h-screen flex items-center justify-center px-3 sm:px-6 py-6 bg-gray-100">

        <div className="w-full max-w-4xl h-[92vh] flex flex-col
          bg-white
          border border-gray-200
          rounded-2xl
          shadow-lg
          overflow-hidden">

            {children}

        </div>

        </body>
        </html>
    );
}