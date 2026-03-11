<div align="center">

<img src="public/logo.svg" alt="CodePick Logo" width="120" />

# CodePick

**Programming Language Selector Chatbot**

A rule-based chatbot that helps you choose the right programming language for your project.

[![Build](https://img.shields.io/github/actions/workflow/status/aleena-tahir/codepick/ci.yml)](https://github.com/aleena-tahir/codepick/actions)
[![License](https://img.shields.io/badge/license-Source%20Available-blue)](LICENSE.txt)

</div>

---

## Why CodePick

Choosing a programming language can be overwhelming, especially when you're starting out or exploring a new domain.

CodePick removes the guesswork. Answer a few quick questions about your project, experience level, and preferences, and get a personalized language recommendation with reasoning and alternatives.

---

## Overview

CodePick is an ELIZA-style rule-based chatbot built with React and Tailwind CSS. It uses pattern matching and keyword detection with 50+ rules to drive conversations and deliver personalized programming language recommendations.

---

## Features

- Interactive chat interface with typing indicators
- Pattern matching for free-form user input
- 50+ rules covering 8 project categories
- Quick-reply buttons for guided conversation
- Personalized recommendations with alternatives and reasoning
- Responsive, mobile-friendly design
- Dockerized deployment with Nginx

---

## Quick Start

### Using Docker (Recommended)

```bash
git clone https://github.com/aleena-tahir/codepick.git
cd codepick
docker-compose up --build
# Open browser at http://localhost:3000
```

### Local Development

```bash
git clone https://github.com/aleena-tahir/codepick.git
cd codepick
npm install
npm run dev
# Open browser at http://localhost:5173
```

### Build for Production

```bash
npm run build
```

---

## Tech Stack

| Layer            | Technology                          |
|------------------|-------------------------------------|
| Frontend         | React (Vite) + Tailwind CSS         |
| Rule Engine      | Vanilla JavaScript (client-side)    |
| Containerization | Docker + docker-compose             |
| CI/CD            | GitHub Actions                      |
| Hosting          | Nginx (serving static build)        |

---

## Project Structure

```
codepick/
├── src/
│   ├── components/      — ChatWindow, MessageBubble, InputBar, QuickReplyButtons
│   ├── engine/          — chatEngine.js, patterns.js, rules.js, responses.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/              — favicon.svg, logo.svg
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── .github/workflows/ci.yml
├── package.json
└── README.md
```

---

## Conversation Flow

1. **Use Case** — What do you want to build? (web, mobile, game, data science, automation, embedded, desktop, API/backend)
2. **Experience Level** — beginner, intermediate, advanced
3. **Preferences** — performance, ease of learning, job market, community, cross-platform
4. **Recommendation** — Primary language + alternatives with reasoning

---

## License

This project uses a **Source Available** license. See [LICENSE.txt](LICENSE.txt) for details.

- Free for personal and educational use
- Free to modify for personal use
- Commercial use requires permission

---

## Authors

- **Aleena Tahir** — aleenatahirf23@nutech.edu.pk
- **Saqlain Abbas** — saqlainabbasf23@nutech.edu.pk
- **Emaan Kiani** — emankianif23@nutech.edu.pk
- **Aena Habib** — aenahabibf23@nutech.edu.pk
- **Dua Kamal** — duakamalf23@nutech.edu.pk
