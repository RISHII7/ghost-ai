# Ghost Arc 👻📐

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Typescript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![React Flow](https://img.shields.io/badge/React_Flow-12-ff007f?logo=react)](https://reactflow.dev/)
[![Liveblocks](https://img.shields.io/badge/Liveblocks-Collaborative-050505?logo=liveblocks&logoColor=white)](https://liveblocks.io/)
[![Clerk](https://img.shields.io/badge/Clerk-Auth-6C47FF?logo=clerk&logoColor=white)](https://clerk.com/)
[![Trigger.dev](https://img.shields.io/badge/Trigger.dev-Background_Jobs-22c55e?logo=triggerdotdev&logoColor=white)](https://trigger.dev/)

**Ghost Arc** is an enterprise-grade agentic planning and collaborative systems design application built for modern software teams. 

A user submits a natural-language requirements prompt (e.g., *"Design a scalable e-commerce backend"*), and a Google Gemini-powered AI agent autonomously charts, arranges, and updates system nodes and edges on a real-time, shared React Flow canvas. Human teammates can watch the AI construct the architecture live, then jump in to collaboratively refine it together. Once satisfied, a second AI background task converts the visual graph into a comprehensive, multi-page Markdown technical specification that can be downloaded directly from the app.

---

## 📋 Table of Contents

1. 🚀 [Introduction](#-introduction)
2. ⚙️ [Tech Stack](#%EF%B8%8F-tech-stack)
3. 🔋 [Features](#-features)
4. 🤸 [Quick Start](#-quick-start)
5. 📂 [Project Structure](#-project-structure)
6. 🛠️ [Available Scripts](#%EF%B8%8F-available-scripts)
7. 🤝 [Contributing](#-contributing)
8. 📄 [License](#-license)

---

## 🚀 Introduction

Ghost Arc bridges the gap between high-level architectural brainstorming and comprehensive technical documentation. By leveraging state-of-the-art Generative AI (Google Gemini), background task orchestration (Trigger.dev), and real-time multiplayer coordination (Liveblocks), Ghost Arc transforms natural language prompt instructions into visual and textual system structures instantly.

---

## ⚙️ Tech Stack

* **Next.js (App Router)**: Hybrid server/client rendering framework for optimized performance and routing.
* **React Flow**: A highly customizable library for building node-based interactive editors and diagrams.
* **TypeScript**: Strict compile-time type-safety for enterprise scale.
* **Liveblocks**: Real-time collaborative engine for synchronized document states, canvas presence, and live cursors.
* **Clerk**: Comprehensive authentication, session management, and organization roles.
* **Trigger.dev**: Serverless background task orchestrator for long-running AI canvas and specification generation jobs.
* **Prisma ORM**: Type-safe database querying and schema management.
* **PostgreSQL**: Robust relational database for metadata, projects, and user configurations.
* **Tailwind CSS**: Utility-first CSS styling framework.
* **shadcn/ui**: Pre-styled, accessible visual component primitives.
* **Google Gemini API**: Advanced LLM for canvas construction and markdown technical specification compilation.

---

## 🔋 Features

* 🤖 **AI Architecture Agent**: Translate plain-English prompts into structured nodes and connections. Powered by Google Gemini through Trigger.dev background tasks and the Liveblocks Node.js SDK.
* 👥 **Multiplayer Sandbox**: Full, real-time collaboration with synchronized canvas state, live cursor positions, and team member presence avatars.
* 📐 **Custom Canvas Nodes**: Double-click to edit labels inline, resize elements using custom handles, and style nodes from a floating palette of 12 colors.
* 📜 **AI Technical Spec Generation**: Instantly compile your active canvas diagram into a comprehensive, multi-page technical specification markdown document.
* 🗄️ **Multi-Spec Storage**: Store multiple specification histories per project. Metadata is persisted in PostgreSQL via Prisma, and markdown files are managed in local/cloud storage (`data/specs/{projectId}/{specId}.md`).
* 💾 **Auto-Save Canvas**: Graph states are debounced and automatically saved to disk (`data/canvas/{projectId}.json`) after 3 seconds of user inactivity.
* 🛡️ **Global Route Protection**: Fully integrated authentication with Clerk. Liveblocks rooms and synchronization tokens are restricted to verified users.
* 📂 **Project Management**: Built-in slide-out sidebar for workspace management, project slug creation, and automatic room allocation.

---

## 🤸 Quick Start

### Prerequisites

Ensure you have the following installed locally:
* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (v18.x or newer)
* [npm](https://www.npmjs.com/) (Node Package Manager)

### Cloning the Repository

```bash
git clone https://github.com/RISHII7/ghost-ai.git
cd ghost-ai
```

### Installation

Install dependencies using npm:

```bash
npm install
```

### Set Up Environment Variables

Create a `.env` or `.env.local` file in the root of your project:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Liveblocks Real-time Sync
LIVEBLOCKS_SECRET_KEY=your_liveblocks_secret_key

# Trigger.dev Orchestrator
TRIGGER_SECRET_KEY=your_trigger_secret_key
NEXT_PUBLIC_TRIGGER_PUBLIC_API_KEY=your_trigger_public_key

# Database Connection (PostgreSQL)
DATABASE_URL=postgresql://user:password@localhost:5432/ghost_arc

# Google Gemini API
GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_api_key
# Optional: Model overrides
GEMINI_MODEL=gemini-2.0-flash
GEMINI_SPEC_MODEL=gemini-2.0-flash

# Base App URL
APP_URL=http://localhost:3000
```

Retrieve API keys from their respective consoles:
* [Clerk Console](https://dashboard.clerk.com/)
* [Liveblocks Dashboard](https://liveblocks.io/dashboard)
* [Trigger.dev Dashboard](https://cloud.trigger.dev/)
* [Google AI Studio](https://aistudio.google.com/)

### Running the Application

1. **Start the Next.js Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the application interface.

2. **Start the Trigger.dev Local Worker**:
   Open a second terminal window and run:
   ```bash
   npx trigger.dev@latest dev
   ```
   This is required for local testing of background AI design and technical specification generation tasks.

---

## 📂 Project Structure

```text
ghost-ai/
├── .github/              # CI/CD workflows, Issue and PR templates
├── app/
│   ├── api/              # API endpoints (Auth, AI pipelines, Project and Spec management)
│   ├── editor/           # Real-time interactive canvas workspace pages
│   ├── generated/prisma/ # Generated type-safe Prisma client files
│   ├── sign-in/          # Clerk auth views
│   └── sign-up/          
├── components/
│   ├── editor/           # Visual canvas elements, toolbar, chat panel
│   └── ui/               # Reusable visual primitive components (shadcn/ui)
├── data/
│   ├── canvas/           # Local cache files for React Flow JSON states
│   └── specs/            # Compiled technical specification markdown documents
├── docs/                 # Extended developer documentation
├── hooks/                # Custom React hooks (auto-save timers, canvas shortcuts)
├── lib/                  # Shared helper modules (Prisma client, AI agents, Liveblocks config)
├── prisma/               # PostgreSQL schema definition and migrations
├── trigger/              # Trigger.dev tasks
│   ├── design-agent.ts   # Autonomously charts nodes/edges based on Gemini output
│   └── generate-spec-gemini.ts  # Background task compiler for specification markdown
└── types/                # Shared TypeScript models and interface declarations
```

---

## 🛠️ Available Scripts

Use the following scripts to manage development, compilation, and database states:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Build the optimized application bundle for production |
| `npm run start` | Start the Next.js production server |
| `npm run lint` | Run ESLint static analysis checks |
| `npm run prisma:generate` | Regenerate the Prisma TypeScript client from schema |
| `npm run prisma:migrate` | Generate and apply a new database schema migration |
| `npm run prisma:deploy` | Apply all pending migrations to the target database |
| `npm run prisma:studio` | Run the Prisma Studio database management GUI |

---

## 🤝 Contributing

We welcome contributions to Ghost Arc! Please read our [Contributing Guidelines](CONTRIBUTING.md) and adhere to our [Code of Conduct](CODE_OF_CONDUCT.md).

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
