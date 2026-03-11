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
  },
    // ──────────────────────────────────────────────────────────
  // SECTION 6 — WEB / MOBILE / GAME / DATA / AUTOMATION / EMBEDDED (50 rules)
  // Aena's rules — same structure as above.
  // useCase values: "web", "mobile", "game", "data", "automation", "embedded"
  // ──────────────────────────────────────────────────────────

  // Web Development (8 rules)

  {
    id: "web-beginner-easy",
    useCase: "web",
    experience: "beginner",
    preference: "easy",
    primary: "HTML + CSS + JavaScript",
    alternatives: ["Python (Django)", "Python (Flask)"],
    reasoning:
      "Starting with plain HTML, CSS, and JavaScript teaches the core building blocks of the web. You can see results instantly in the browser without complex tooling."
  },

  {
    id: "web-beginner-jobs",
    useCase: "web",
    experience: "beginner",
    preference: "jobs",
    primary: "JavaScript (React)",
    alternatives: ["Vue.js", "Angular"],
    reasoning:
      "React dominates modern frontend job postings. Learning JavaScript plus React gives you a direct path into junior frontend and fullstack roles."
  },

  {
    id: "web-intermediate-fullstack",
    useCase: "web",
    experience: "intermediate",
    preference: "fullstack",
    primary: "TypeScript (Next.js)",
    alternatives: ["Node.js (Express)", "Python (Django)"],
    reasoning:
      "Next.js with TypeScript lets you build both frontend and backend in one framework. Type safety helps you keep larger codebases maintainable."
  },

  {
    id: "web-intermediate-productive",
    useCase: "web",
    experience: "intermediate",
    preference: "productive",
    primary: "Python (Django)",
    alternatives: ["Ruby on Rails", "Laravel (PHP)"],
    reasoning:
      "Django gives you auth, admin, ORM, and routing out of the box, so you can ship full web apps quickly without reinventing common features."
  },

  {
    id: "web-advanced-performance",
    useCase: "web",
    experience: "advanced",
    preference: "performance",
    primary: "TypeScript (Next.js + Edge / Server Components)",
    alternatives: ["Rust (Actix Web)", "Go (Fiber)"],
    reasoning:
      "Next.js with edge rendering and server components can deliver extremely fast user experiences, while Rust and Go backends handle heavy, latency-sensitive workloads."
  },

  {
    id: "web-advanced-typesafety",
    useCase: "web",
    experience: "advanced",
    preference: "type-safety",
    primary: "TypeScript (fullstack)",
    alternatives: ["ReasonML/Rescript", "Elm"],
    reasoning:
      "TypeScript across frontend and backend catches entire classes of bugs at compile time. If you care about maintainability, rich types pay off as your app grows."
  },

  {
    id: "web-freelance-stack",
    useCase: "web",
    experience: "intermediate",
    preference: "freelance",
    primary: "JavaScript (React + Node.js)",
    alternatives: ["TypeScript (Next.js)", "PHP (Laravel)"],
    reasoning:
      "Most freelance clients ask for common stacks like React, Node, or Laravel. This combination lets you cover landing pages, dashboards, and small SaaS-style projects end to end."
  },

  {
    id: "web-static-sites",
    useCase: "web",
    experience: "beginner",
    preference: "static-sites",
    primary: "Astro (JavaScript/TypeScript)",
    alternatives: ["Next.js (Static Export)", "Eleventy"],
    reasoning:
      "Astro focuses on content-heavy, fast static sites and lets you sprinkle in React/Vue components only where needed, which keeps load times snappy."
  },

  // Mobile Development (8 rules)

  {
    id: "mobile-beginner-cross",
    useCase: "mobile",
    experience: "beginner",
    preference: "cross-platform",
    primary: "Flutter (Dart)",
    alternatives: ["React Native", "Expo (React Native)"],
    reasoning:
      "Flutter lets you build beautiful Android and iOS apps from a single codebase. Hot-reload and rich widgets make it fun for beginners."
  },

  {
    id: "mobile-beginner-native-android",
    useCase: "mobile",
    experience: "beginner",
    preference: "android",
    primary: "Kotlin (Android)",
    alternatives: ["Java (Android)"],
    reasoning:
      "Kotlin is the modern, recommended language for Android. Learning it gives you direct access to native APIs and the official Android ecosystem."
  },

  {
    id: "mobile-intermediate-reactnative",
    useCase: "mobile",
    experience: "intermediate",
    preference: "javascript",
    primary: "React Native",
    alternatives: ["Expo", "Flutter"],
    reasoning:
      "React Native reuses your React skills from the web while still producing native-feeling apps. It's ideal if you already know JavaScript."
  },

  {
    id: "mobile-intermediate-ui",
    useCase: "mobile",
    experience: "intermediate",
    preference: "ui-ux",
    primary: "Flutter",
    alternatives: ["SwiftUI", "Jetpack Compose"],
    reasoning:
      "Flutter's widget system and design tools make it easy to craft custom, polished UIs that look consistent across platforms."
  },

  {
    id: "mobile-advanced-ios",
    useCase: "mobile",
    experience: "advanced",
    preference: "ios",
    primary: "Swift (SwiftUI)",
    alternatives: ["Objective-C", "Flutter"],
    reasoning:
      "Swift and SwiftUI are the first-class way to build iOS apps. If you want full access to Apple APIs and best performance, go native."
  },

  {
    id: "mobile-advanced-android",
    useCase: "mobile",
    experience: "advanced",
    preference: "android",
    primary: "Kotlin (Jetpack Compose)",
    alternatives: ["Flutter", "React Native"],
    reasoning:
      "Jetpack Compose is Google's modern declarative UI toolkit for Android. Combined with Kotlin, it gives you the cleanest native Android developer experience."
  },

  {
    id: "mobile-beginner-games",
    useCase: "mobile",
    experience: "beginner",
    preference: "games",
    primary: "Unity (C#)",
    alternatives: ["Godot (GDScript)"],
    reasoning:
      "Unity abstracts away a lot of mobile-specific details and lets you focus on gameplay. C# is approachable, and deploying to mobile stores is well-documented."
  },

  {
    id: "mobile-startup-stack",
    useCase: "mobile",
    experience: "intermediate",
    preference: "startup",
    primary: "React Native (Expo)",
    alternatives: ["Flutter"],
    reasoning:
      "Expo accelerates prototyping and iteration for startups. With React Native, you share logic with a React web frontend and ship quickly on both Android and iOS."
  },

  // Game Development (8 rules)

  {
    id: "game-beginner-2d",
    useCase: "game",
    experience: "beginner",
    preference: "2d",
    primary: "Godot (GDScript)",
    alternatives: ["Unity (C#)"],
    reasoning:
      "Godot is lightweight, open-source, and great for learning. GDScript feels similar to Python, which makes scripting simple 2D games very accessible."
  },

  {
    id: "game-beginner-visual",
    useCase: "game",
    experience: "beginner",
    preference: "visual-scripting",
    primary: "Unity (Bolt/Visual Scripting)",
    alternatives: ["Unreal Engine (Blueprints)"],
    reasoning:
      "Visual scripting lets you build game logic by connecting nodes instead of writing code, which is perfect if you're a designer or artist first."
  },

  {
    id: "game-intermediate-3d",
    useCase: "game",
    experience: "intermediate",
    preference: "3d",
    primary: "Unity (C#)",
    alternatives: ["Unreal Engine (C++/Blueprints)"],
    reasoning:
      "Unity offers a huge asset store, community, and tutorials for 3D games. C# strikes a balance between performance and developer productivity."
  },

  {
    id: "game-intermediate-indie",
    useCase: "game",
    experience: "intermediate",
    preference: "indie",
    primary: "Godot (C# or GDScript)",
    alternatives: ["Unity", "GameMaker Studio"],
    reasoning:
      "For indie games, Godot's open-source model and permissive license mean you keep full control of your project and export to many platforms."
  },

  {
    id: "game-advanced-engine",
    useCase: "game",
    experience: "advanced",
    preference: "engine-level",
    primary: "C++ (custom engine or Unreal)",
    alternatives: ["Rust (Bevy)", "C# (MonoGame)"],
    reasoning:
      "If you want low-level control or to build your own engine, C++ is still the industry standard. Rust and Bevy offer a modern alternative with better safety."
  },

  {
    id: "game-advanced-performance",
    useCase: "game",
    experience: "advanced",
    preference: "performance",
    primary: "C++ (Unreal Engine)",
    alternatives: ["Rust (Bevy)", "Unity (DOTS)"],
    reasoning:
      "For physics-heavy or AAA-style games, C++ with Unreal Engine gives you fine-grained performance tuning and battle-tested rendering pipelines."
  },

  {
    id: "game-beginner-web",
    useCase: "game",
    experience: "beginner",
    preference: "web",
    primary: "JavaScript (Phaser)",
    alternatives: ["Construct", "Godot (HTML5 export)"],
    reasoning:
      "Phaser lets you build browser-based games with just JavaScript, which keeps the tooling light and makes sharing your game as simple as sending a link."
  },

  {
    id: "game-jam-stack",
    useCase: "game",
    experience: "intermediate",
    preference: "game-jam",
    primary: "Godot",
    alternatives: ["Unity"],
    reasoning:
      "For game jams, you want fast iteration and easy exporting. Godot's scene system and simple scripting make it ideal for rapidly prototyping ideas."
  },

  // Data Science / ML (9 rules)

  {
    id: "data-beginner",
    useCase: "data",
    experience: "beginner",
    preference: "learning",
    primary: "Python",
    alternatives: ["R"],
    reasoning:
      "Python has the most approachable ecosystem for new data scientists — libraries like pandas, NumPy, and Matplotlib make it easy to explore and visualize data."
  },

  {
    id: "data-beginner-no-math",
    useCase: "data",
    experience: "beginner",
    preference: "no-math",
    primary: "Python (pandas + scikit-learn)",
    alternatives: ["AutoML tools"],
    reasoning:
      "Python's data libraries let you apply ML techniques with high-level APIs, so you can start experimenting without deep math knowledge on day one."
  },

  {
    id: "data-intermediate-ml",
    useCase: "data",
    experience: "intermediate",
    preference: "ml",
    primary: "Python (PyTorch)",
    alternatives: ["TensorFlow / Keras"],
    reasoning:
      "PyTorch is the de facto standard for modern deep learning research and many production systems, with a very Pythonic, flexible API."
  },

  {
    id: "data-intermediate-analytics",
    useCase: "data",
    experience: "intermediate",
    preference: "analytics",
    primary: "Python (pandas + SQL)",
    alternatives: ["R (tidyverse)"],
    reasoning:
      "Combining pandas with SQL skills covers most data analyst workflows — cleaning data, aggregating metrics, and building dashboards or reports."
  },

  {
    id: "data-advanced-mlops",
    useCase: "data",
    experience: "advanced",
    preference: "mlops",
    primary: "Python",
    alternatives: ["Go (services)", "Rust (performance-critical parts)"],
    reasoning:
      "Most ML pipelines and tooling are written in Python, but production services around models often benefit from Go or Rust for reliability and speed."
  },

  {
    id: "data-advanced-research",
    useCase: "data",
    experience: "advanced",
    preference: "research",
    primary: "Python (PyTorch + JAX)",
    alternatives: ["Julia"],
    reasoning:
      "For cutting-edge research, PyTorch and JAX give you autodiff, GPU acceleration, and flexibility, while Julia offers a research-friendly, high-performance alternative."
  },

  {
    id: "data-beginner-bi",
    useCase: "data",
    experience: "beginner",
    preference: "business-intelligence",
    primary: "Python (pandas) + SQL",
    alternatives: ["Power BI / Tableau (paired with SQL)"],
    reasoning:
      "Most BI work revolves around SQL and tabular data. Learning Python with pandas plus SQL lets you automate reports beyond what BI dashboards can do alone."
  },

  {
    id: "data-intermediate-de",
    useCase: "data",
    experience: "intermediate",
    preference: "data-engineering",
    primary: "Python (Airflow / DBT)",
    alternatives: ["Scala (Spark)", "Go"],
    reasoning:
      "Python-based tools like Airflow and DBT dominate modern data engineering, but Scala with Spark is still common in large-scale processing pipelines."
  },

  {
    id: "data-advanced-scale",
    useCase: "data",
    experience: "advanced",
    preference: "scale",
    primary: "Scala (Spark) or Python (PySpark)",
    alternatives: ["Rust (Polars)", "Go"],
    reasoning:
      "For truly large datasets, distributed systems like Spark are standard, while emerging tools like Polars in Rust offer blazing-fast single-node analytics."
  },

  // Automation / Scripting (9 rules)

  {
    id: "automation-beginner-general",
    useCase: "automation",
    experience: "beginner",
    preference: "easy",
    primary: "Python",
    alternatives: ["JavaScript (Node.js)"],
    reasoning:
      "Python is perfect for small scripts that rename files, scrape websites, or glue tools together. Its standard library already covers many automation tasks."
  },

  {
    id: "automation-beginner-windows",
    useCase: "automation",
    experience: "beginner",
    preference: "windows",
    primary: "PowerShell",
    alternatives: ["Python"],
    reasoning:
      "PowerShell is built into Windows and excels at automating system administration, working with the registry, and scripting over the command line."
  },

  {
    id: "automation-intermediate-web",
    useCase: "automation",
    experience: "intermediate",
    preference: "web-automation",
    primary: "Python (Selenium / Playwright)",
    alternatives: ["JavaScript (Playwright)"],
    reasoning:
      "Tools like Selenium and Playwright let you script browsers to click, fill forms, and scrape content, which covers a huge range of automation tasks."
  },

  {
    id: "automation-intermediate-cli",
    useCase: "automation",
    experience: "intermediate",
    preference: "cli-tools",
    primary: "Go",
    alternatives: ["Rust"],
    reasoning:
      "Go compiles to static binaries with no runtime dependencies, which makes distributing command-line tools simple across different operating systems."
  },

  {
    id: "automation-advanced-devops",
    useCase: "automation",
    experience: "advanced",
    preference: "devops",
    primary: "Python",
    alternatives: ["Go", "Bash"],
    reasoning:
      "Python is heavily used in DevOps for writing CI/CD scripts, infrastructure tooling, and cloud automation, while Go is common for building high-performance agents and CLIs."
  },

  {
    id: "automation-advanced-systems",
    useCase: "automation",
    experience: "advanced",
    preference: "systems",
    primary: "Rust",
    alternatives: ["Go", "C"],
    reasoning:
      "For low-level automation such as custom proxies, high-throughput log processing, or security tooling, Rust combines performance with memory safety."
  },

  {
    id: "automation-beginner-linux",
    useCase: "automation",
    experience: "beginner",
    preference: "linux",
    primary: "Bash",
    alternatives: ["Python"],
    reasoning:
      "Bash scripting is perfect for chaining Linux commands, automating backups, and managing servers, and pairs naturally with Python for more complex logic."
  },

  {
    id: "automation-intermediate-cross-platform",
    useCase: "automation",
    experience: "intermediate",
    preference: "cross-platform",
    primary: "Python",
    alternatives: ["Node.js"],
    reasoning:
      "Python scripts run on Windows, macOS, and Linux with almost no changes, which is ideal when your automation needs to work across many environments."
  },

  {
    id: "automation-advanced-security",
    useCase: "automation",
    experience: "advanced",
    preference: "security",
    primary: "Python",
    alternatives: ["Go", "Rust"],
    reasoning:
      "Security tooling and offensive/defensive scripts are commonly written in Python for speed of development, with Go and Rust used when performance and stealth matter."
  },

  // Embedded / IoT (8 rules)

  {
    id: "embedded-beginner-iot",
    useCase: "embedded",
    experience: "beginner",
    preference: "iot",
    primary: "MicroPython (ESP32 / Raspberry Pi Pico)",
    alternatives: ["Arduino (C/C++)"],
    reasoning:
      "MicroPython lets you program microcontrollers using Python, which makes hardware experimentation much more approachable than starting in raw C."
  },

  {
    id: "embedded-beginner-raspi",
    useCase: "embedded",
    experience: "beginner",
    preference: "raspberry-pi",
    primary: "Python (Raspberry Pi)",
    alternatives: ["Node.js"],
    reasoning:
      "On Raspberry Pi, Python has libraries for GPIO, sensors, and small web servers, which makes it easy to build smart home or hobby IoT projects."
  },

  {
    id: "embedded-intermediate-arduino",
    useCase: "embedded",
    experience: "intermediate",
    preference: "arduino",
    primary: "C++ (Arduino)",
    alternatives: ["MicroPython"],
    reasoning:
      "Arduino with C++ gives you more control over timing, memory, and performance than scripting languages, which is important for many embedded applications."
  },

  {
    id: "embedded-intermediate-lowpower",
    useCase: "embedded",
    experience: "intermediate",
    preference: "low-power",
    primary: "C",
    alternatives: ["C++"],
    reasoning:
      "For battery-powered devices, C lets you fine-tune memory usage and power consumption, but still has widespread community support and tooling."
  },

  {
    id: "embedded-advanced-realtime",
    useCase: "embedded",
    experience: "advanced",
    preference: "realtime",
    primary: "C (RTOS)",
    alternatives: ["C++", "Rust (embedded)"],
    reasoning:
      "Real-time systems for robotics or industrial control often rely on C with a real-time operating system, where deterministic behavior is critical."
  },

  {
    id: "embedded-advanced-safety",
    useCase: "embedded",
    experience: "advanced",
    preference: "safety",
    primary: "Rust (embedded)",
    alternatives: ["C"],
    reasoning:
      "Rust on microcontrollers helps prevent whole classes of memory bugs that can be catastrophic in safety-critical systems like automotive or medical devices."
  },

  {
    id: "embedded-beginner-hobby",
    useCase: "embedded",
    experience: "beginner",
    preference: "hobby",
    primary: "Arduino (C++)",
    alternatives: ["MicroPython"],
    reasoning:
      "The Arduino ecosystem is beginner-friendly with tons of example sketches, shields, and tutorials, making it ideal for first-time hardware hackers."
  },

  {
    id: "embedded-intermediate-gateway",
    useCase: "embedded",
    experience: "intermediate",
    preference: "gateway",
    primary: "Python (Raspberry Pi) + MQTT",
    alternatives: ["Go"],
    reasoning:
      "Using Python on a Raspberry Pi as an IoT gateway lets you quickly prototype devices that collect sensor data and push it to the cloud over MQTT."
  }

];

export default rules;
