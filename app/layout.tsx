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
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html
          lang="en"
          className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
      <body className="min-h-screen flex items-center justify-center px-3 sm:px-6 py-6">

      {/* 🧊 Glass container */}
      <div className="w-full max-w-4xl h-[92vh] flex flex-col
          bg-white/60 dark:bg-white/10
          backdrop-blur-xl
          border border-white/20
          rounded-2xl
          shadow-[0_10px_40px_rgba(0,0,0,0.15)]
          overflow-hidden">

        {children}

      </div>

      </body>
      </html>
  );
}