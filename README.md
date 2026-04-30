# Scaler Persona Chatbot

An AI-powered chatbot that simulates three distinct Scaler Academy personas: **Anshuman Singh**, **Abhimanyu Saxena**, and **Kshitij Mishra**. Built using Next.js, Tailwind CSS, and the Google Gemini API.

> **Live Demo**: _Add your deployed Vercel URL here_

---

## Screenshots

_Add screenshots of the UI (include different personas in action) after running the app._

---

## Features

- Seamless switching between three personas using a tab-based interface  
- Chat history resets automatically when a new persona is selected  
- Persona-specific suggestion chips for quick conversation starters  
- Typing indicator while waiting for API responses  
- Fully responsive layout (works across mobile and desktop)  
- User-friendly fallback and error handling  

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)  
- **Styling**: Tailwind CSS  
- **AI Model**: Google Gemini API (`gemini-1.5-flash`)  
- **Language**: TypeScript  

---

## Local Setup

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd scaler-persona-chatbot
````

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

```bash
cp .env.example .env.local
```

Update `.env.local` with your Gemini API key:

```
GEMINI_API_KEY=your_gemini_api_key_here
```

You can generate an API key from:
[https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)

---

### 4. Start the development server

```bash
npm run dev
```

Then open:
[http://localhost:3000](http://localhost:3000)

---

## Deployment (Vercel)

1. Push your project to GitHub
2. Import the repository on [https://vercel.com](https://vercel.com)
3. Add the environment variable in project settings:

   * `GEMINI_API_KEY` = your API key
4. Deploy the application

---

## Project Structure

```
├── app/
│   ├── api/chat/route.ts     # API route handling chatbot requests
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ChatInterface.tsx     # Core chat UI + state management
│   ├── PersonaSwitcher.tsx   # Tabs to switch personas
│   ├── MessageBubble.tsx     # Renders individual messages
│   └── TypingIndicator.tsx   # Loading/typing animation
├── lib/
│   └── personas.ts           # Persona configs + system prompts
├── prompts.md                # Explanation of prompt design
├── reflection.md             # Short reflection (300–500 words)
└── .env.example              # Environment variables template
```

---

## Personas

| Persona          | Role                | Primary Focus                        |
| ---------------- | ------------------- | ------------------------------------ |
| Anshuman Singh   | CEO & Co-founder    | Vision, startups, outcomes           |
| Abhimanyu Saxena | Co-founder          | DSA, system design, technical rigor  |
| Kshitij Mishra   | Instructor & Mentor | Teaching, algorithms, interview prep |

---

## Documentation

* [`prompts.md`](./prompts.md) — Detailed breakdown of system prompts and reasoning
* [`reflection.md`](./reflection.md) — Insights on prompt engineering decisions
