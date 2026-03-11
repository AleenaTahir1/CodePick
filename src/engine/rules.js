// ============================================================
//  CodePick — rules.js
//  Owner: Eman Asghar Kiani 
//  Covers: Desktop Apps, API/Backend, Cross-cutting Preferences,
//          Fallback / Edge Cases
//  NOTE: Aena's rules (web, mobile, game, data, automation,
//        embedded) go in the same file — merge carefully.
// ============================================================

const rules = [

  // ──────────────────────────────────────────────────────────
  // SECTION 1 — DESKTOP APPS (4 rules)
  // ──────────────────────────────────────────────────────────

  {
    id: "desktop-beginner",
    useCase: "desktop",
    experience: "beginner",
    preference: null,
    primary: "Python (Tkinter)",
    alternatives: ["Python (PyQt)"],
    reasoning:
      "Python is easy to learn and Tkinter comes built-in, so you can build desktop windows without installing anything extra. Perfect for first-time desktop developers."
  },

  {
    id: "desktop-intermediate",
    useCase: "desktop",
    experience: "intermediate",
    preference: null,
    primary: "C# (.NET / WinForms)",
    alternatives: ["JavaFX"],
    reasoning:
      "C# with .NET gives you a mature, well-documented ecosystem for desktop apps on Windows. Visual Studio makes UI design drag-and-drop simple."
  },

  {
    id: "desktop-advanced-cross",
    useCase: "desktop",
    experience: "advanced",
    preference: "cross-platform",
    primary: "Rust (Tauri)",
    alternatives: ["Electron (JavaScript)", "Flutter (Desktop)"],
    reasoning:
      "Tauri lets you build tiny, blazing-fast cross-platform desktop apps using web tech for the UI and Rust for the backend. Much lighter than Electron."
  },

  {
    id: "desktop-advanced-windows",
    useCase: "desktop",
    experience: "advanced",
    preference: "windows",
    primary: "C# (WPF)",
    alternatives: ["C++ (Win32 API)"],
    reasoning:
      "WPF is the gold standard for rich Windows desktop applications. XAML gives you full control over UI while C# handles complex business logic cleanly."
  },

  // ──────────────────────────────────────────────────────────
  // SECTION 2 — API / BACKEND (5 rules)
  // ──────────────────────────────────────────────────────────

  {
    id: "api-beginner",
    useCase: "api",
    experience: "beginner",
    preference: null,
    primary: "Python (FastAPI)",
    alternatives: ["Python (Flask)"],
    reasoning:
      "FastAPI is beginner-friendly, has automatic docs generation, and teaches you modern API concepts like type hints right from the start."
  },

  {
    id: "api-beginner-easy",
    useCase: "api",
    experience: "beginner",
    preference: "easy",
    primary: "Python (Flask)",
    alternatives: ["Node.js (Express)"],
    reasoning:
      "Flask is the simplest way to get an API running — just a few lines of Python and you have a working server. Great for learning the basics first."
  },

  {
    id: "api-intermediate",
    useCase: "api",
    experience: "intermediate",
    preference: null,
    primary: "Node.js (Express)",
    alternatives: ["Python (FastAPI)", "Ruby on Rails"],
    reasoning:
      "Node.js is non-blocking and fast, and Express is the most widely used backend framework. Huge job market and tons of tutorials available."
  },

  {
    id: "api-advanced-performance",
    useCase: "api",
    experience: "advanced",
    preference: "performance",
    primary: "Go",
    alternatives: ["Rust (Axum)", "C++ (Drogon)"],
    reasoning:
      "Go was literally designed for building fast, concurrent APIs. It compiles to a single binary, handles thousands of requests with ease, and is used by Google, Uber, and Cloudflare."
  },

  {
    id: "api-enterprise",
    useCase: "api",
    experience: "advanced",
    preference: "enterprise",
    primary: "Java (Spring Boot)",
    alternatives: ["Kotlin (Spring Boot)", "C# (.NET Core)"],
    reasoning:
      "Spring Boot is the backbone of enterprise backend systems worldwide. If you're building large-scale, maintainable systems for big organizations, Java is the industry standard."
  },

  // ──────────────────────────────────────────────────────────
  // SECTION 3 — CROSS-CUTTING PREFERENCE RULES (10 rules)
  // These apply regardless of use case when strong preferences
  // are detected.
  // ──────────────────────────────────────────────────────────

  {
    id: "any-beginner-easy",
    useCase: "any",
    experience: "beginner",
    preference: "easy",
    primary: "Python",
    alternatives: ["JavaScript"],
    reasoning:
      "Python reads almost like plain English, has minimal boilerplate, and has the most beginner tutorials of any language. It's the world's most popular first language for a reason."
  },

  {
    id: "any-jobs",
    useCase: "any",
    experience: null,
    preference: "jobs",
    primary: "JavaScript",
    alternatives: ["Python", "Java"],
    reasoning:
      "JavaScript is the most in-demand language on job boards globally. Combined with Python, these two languages cover the vast majority of developer job postings."
  },

  {
    id: "any-performance-advanced",
    useCase: "any",
    experience: "advanced",
    preference: "performance",
    primary: "Rust",
    alternatives: ["C++", "Go"],
    reasoning:
      "Rust gives you C-level performance with memory safety guarantees — no garbage collector, no runtime. It's the top choice when raw speed and reliability both matter."
  },

  {
    id: "any-community",
    useCase: "any",
    experience: null,
    preference: "community",
    primary: "Python",
    alternatives: ["JavaScript"],
    reasoning:
      "Python has one of the largest, friendliest communities in tech — Stack Overflow, Reddit, Discord, and millions of free tutorials. You'll never be stuck without help."
  },

  {
    id: "any-opensource",
    useCase: "any",
    experience: null,
    preference: "open-source",
    primary: "Python",
    alternatives: ["Rust", "Go"],
    reasoning:
      "Python, Rust, and Go power a huge portion of open-source projects. All three have permissive licenses and massive contributor communities on GitHub."
  },

  {
    id: "any-beginner-jobs",
    useCase: "any",
    experience: "beginner",
    preference: "jobs",
    primary: "JavaScript",
    alternatives: ["Python"],
    reasoning:
      "JavaScript is beginner-accessible AND dominates the job market. Learning it first means you can start applying for junior roles faster than with almost any other language."
  },

  {
    id: "any-intermediate-performance",
    useCase: "any",
    experience: "intermediate",
    preference: "performance",
    primary: "Go",
    alternatives: ["Rust", "C++"],
    reasoning:
      "Go hits the sweet spot between performance and simplicity. It's much easier to learn than Rust or C++ while still being significantly faster than Python or JavaScript."
  },

  {
    id: "any-cross-platform",
    useCase: "any",
    experience: null,
    preference: "cross-platform",
    primary: "Python",
    alternatives: ["Dart (Flutter)", "JavaScript (Electron)"],
    reasoning:
      "Python runs on Windows, macOS, and Linux with zero changes. For UI apps, Flutter's 'write once, run anywhere' approach covers mobile and desktop in one codebase."
  },

  {
    id: "any-learning",
    useCase: "any",
    experience: "beginner",
    preference: "learning",
    primary: "Python",
    alternatives: ["JavaScript", "Scratch (visual)"],
    reasoning:
      "Python is used to teach programming in universities worldwide. Its clean syntax lets you focus on learning programming concepts instead of fighting the language."
  },

  {
    id: "any-advanced-general",
    useCase: "any",
    experience: "advanced",
    preference: null,
    primary: "Rust",
    alternatives: ["Go", "TypeScript"],
    reasoning:
      "For experienced developers with no strong use-case constraint, Rust is the most future-proof and technically rewarding choice — it's consistently the most-loved language on Stack Overflow."
  },

  // ──────────────────────────────────────────────────────────
  // SECTION 4 — FALLBACK / EDGE CASES (6 rules)
  // ──────────────────────────────────────────────────────────

  {
    id: "fallback-unknown-usecase",
    useCase: "unknown",
    experience: null,
    preference: null,
    primary: "Python",
    alternatives: ["JavaScript"],
    reasoning:
      "I'm not sure exactly what you want to build, but Python is the most versatile language out there — it works for web, data, automation, AI, scripting, and more.",
    isFallback: true,
    fallbackType: "unknown-usecase"
  },

  {
    id: "fallback-conflicting-preferences",
    useCase: "any",
    experience: null,
    preference: "conflicting",
    primary: "Python",
    alternatives: ["JavaScript", "Go"],
    reasoning:
      "You seem to want both maximum performance AND maximum simplicity — those can conflict! Python is the best balance for most projects. If raw speed is critical, consider Go.",
    isFallback: true,
    fallbackType: "conflicting-preferences"
  },

  {
    id: "fallback-dont-know",
    useCase: "unknown",
    experience: "unknown",
    preference: "unknown",
    primary: "Python",
    alternatives: ["JavaScript"],
    reasoning:
      "No worries — Python is the best language to start with when you're unsure. It's flexible enough to take you anywhere once you figure out your direction.",
    isFallback: true,
    fallbackType: "user-unsure"
  },

  {
    id: "fallback-multiple-usecases",
    useCase: "multiple",
    experience: null,
    preference: null,
    primary: "Python",
    alternatives: ["JavaScript", "TypeScript"],
    reasoning:
      "You want to do several different things — Python and JavaScript are the two languages that span the most domains. Python covers data/AI/scripting/backend; JS covers web/mobile/backend.",
    isFallback: true,
    fallbackType: "multiple-usecases"
  },

  {
    id: "fallback-empty-input",
    useCase: null,
    experience: null,
    preference: null,
    primary: null,
    alternatives: [],
    reasoning: null,
    isFallback: true,
    fallbackType: "empty-input",
    botReply:
      "I didn't catch that! Could you tell me a bit more about what you'd like to build? For example: a website, a mobile app, a game, or something else?"
  },

  {
    id: "fallback-gibberish",
    useCase: null,
    experience: null,
    preference: null,
    primary: null,
    alternatives: [],
    reasoning: null,
    isFallback: true,
    fallbackType: "gibberish",
    botReply:
      "Hmm, I didn't understand that 😅 Let's try again! What kind of project are you thinking about? You can pick from: Web, Mobile, Game, Data Science, Automation, Embedded, Desktop, or API/Backend."
  },

  // ──────────────────────────────────────────────────────────
  // SECTION 5 — Additional RULES (5 rules)
  // ──────────────────────────────────────────────────────────

  {
    id: "api-intermediate-performance",
    useCase: "api",
    experience: "intermediate",
    preference: "performance",
    primary: "Go",
    alternatives: ["Node.js (Express)", "Python (FastAPI)"],
    reasoning:
      "If you have some experience and care about speed, Go is the perfect upgrade. It's not hard to learn but gives you massive performance gains over Python or Node for high-traffic APIs."
  },

  {
    id: "desktop-intermediate-cross",
    useCase: "desktop",
    experience: "intermediate",
    preference: "cross-platform",
    primary: "Python (PyQt)",
    alternatives: ["Java (JavaFX)", "Flutter (Desktop)"],
    reasoning:
      "PyQt lets you build desktop apps that run on Windows, macOS, and Linux with one codebase. It's more powerful than Tkinter and still very learnable at the intermediate level."
  },

  {
    id: "any-beginner-community",
    useCase: "any",
    experience: "beginner",
    preference: "community",
    primary: "Python",
    alternatives: ["JavaScript"],
    reasoning:
      "As a beginner, having a huge community means you'll never be stuck for long. Python's community is massive, welcoming, and full of free resources — Reddit, Discord, YouTube, and Stack Overflow are all packed with Python help."
  },

  {
    id: "any-intermediate-jobs",
    useCase: "any",
    experience: "intermediate",
    preference: "jobs",
    primary: "JavaScript",
    alternatives: ["Python", "TypeScript"],
    reasoning:
      "For intermediate developers looking to maximize job opportunities, JavaScript and TypeScript dominate frontend and fullstack roles while Python leads in data and backend. Learning both puts you in a very strong position."
  },

  {
    id: "api-advanced-community",
    useCase: "api",
    experience: "advanced",
    preference: "community",
    primary: "Node.js (Express)",
    alternatives: ["Python (FastAPI)", "Go"],
    reasoning:
      "Node.js has one of the largest backend developer communities in the world, with npm hosting millions of packages. Advanced developers will find no shortage of libraries, tools, and support for any API use case."
  }

];

export default rules;