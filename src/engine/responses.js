// ============================================================
//  CodePick — responses.js
//  Owner: Eman Asghar Kiani
//  Covers: Greeting, Stage Templates, Recommendation Blurbs
// ============================================================


// ──────────────────────────────────────────────────────────
// SECTION 1 — GREETING MESSAGE
// ──────────────────────────────────────────────────────────

export const greeting = {
  message:
    "Hi! I'm CodePick 👋 — your personal programming language advisor! " +
    "Answer a few quick questions and I'll recommend the best language for your project. " +
    "Let's start — what do you want to build?",
  quickReplies: [
    "🌐 Website / Web App",
    "📱 Mobile App",
    "🎮 Game",
    "📊 Data Science / AI",
    "⚙️ Automation / Scripting",
    "🔌 Embedded / IoT",
    "🖥️ Desktop App",
    "🔗 API / Backend"
  ]
};


// ──────────────────────────────────────────────────────────
// SECTION 2 — STAGE RESPONSE TEMPLATES
// ──────────────────────────────────────────────────────────

export const stageResponses = {

  useCaseConfirmed: (useCase) =>
    `Great choice! Building a ${useCase} project sounds exciting. 🚀\n` +
    `Now, how would you describe your programming experience?`,

  useCaseQuickReplies: [
    "🐣 Complete beginner",
    "📖 Some experience",
    "💻 Intermediate",
    "🔥 Advanced"
  ],

  experienceConfirmed: (level) =>
    `Got it — ${level}! Almost there. 🎯\n` +
    `Last question: what matters most to you in a language?`,

  experienceQuickReplies: [
    "⚡ Performance / Speed",
    "😊 Easy to learn",
    "💼 Job market / Career",
    "👥 Large community",
    "🌍 Cross-platform support",
    "🏢 Enterprise / Large scale",
    "🔓 Open source ecosystem"
  ],

  preferenceConfirmed: (pref) =>
    `Perfect — ${pref} it is! Let me find the best match for you... 🔍`,

  rephraseRequest:
    "Hmm, I didn't quite catch that 🤔 Could you rephrase? " +
    "For example: 'I want to make a website' or 'I am a beginner'.",

  showOptionsAfterFail:
    "No worries! Let me show you the options — just tap the one that fits best 👇",

  buildingRecommendation:
    "Awesome! Based on what you told me, here's my recommendation 🎉",

  askRestart:
    "Want to explore a language for a different project? I'm happy to help again! 😊",

  restartQuickReplies: ["🔄 Start over", "✅ I'm good, thanks!"],

  goodbye:
    "Good luck with your project! Feel free to come back anytime. Happy coding! 💻✨"
};


// ──────────────────────────────────────────────────────────
// SECTION 3 — RECOMMENDATION MESSAGE BUILDER
// ──────────────────────────────────────────────────────────

export const buildRecommendationMessage = (primary, alternatives, reasoning) => {
  const altText =
    alternatives && alternatives.length > 0
      ? `\n\n🔁 Alternatives to consider: ${alternatives.join(", ")}`
      : "";

  return (
    `🏆 My recommendation: ${primary}\n\n` +
    `📝 ${reasoning}` +
    altText +
    `\n\n💡 Tip: Start with the official docs and build one small project — ` +
    `that's the fastest way to learn any language!`
  );
};


// ──────────────────────────────────────────────────────────
// SECTION 4 — LANGUAGE BLURBS
// ──────────────────────────────────────────────────────────

export const languageBlurbs = {

  Python:
    "Python is one of the most beginner-friendly languages ever created. " +
    "Its clean syntax lets you focus on solving problems rather than fighting the language. " +
    "It's used everywhere — web, AI, data science, and automation.",

  JavaScript:
    "JavaScript is the language of the web and runs in every browser. " +
    "It's one of the most in-demand skills on the job market. " +
    "With Node.js, you can use it for backend development too.",

  TypeScript:
    "TypeScript is JavaScript with static types that catch bugs before your code runs. " +
    "It's the preferred choice for large-scale web projects. " +
    "If you know JavaScript, TypeScript is a natural next step.",

  Rust:
    "Rust is built for performance and memory safety — as fast as C++ but much safer. " +
    "It has been the most-loved language on Stack Overflow for years. " +
    "Ideal for systems programming, WebAssembly, and any project where speed truly matters.",

  Go:
    "Go was designed at Google to be simple, fast, and great for scalable backend systems. " +
    "It handles concurrency beautifully, making it perfect for APIs and microservices. " +
    "Companies like Uber, Dropbox, and Docker use Go in production.",

  "C#":
    "C# is a powerful modern language used heavily in enterprise software and Unity game development. " +
    "It has excellent tooling in Visual Studio and a massive ecosystem through .NET. " +
    "A top-tier choice for Windows apps or game development.",

  "C# (WPF)":
    "WPF with C# is the most powerful way to build rich native Windows desktop applications. " +
    "XAML makes UI design expressive and separates concerns cleanly. " +
    "The go-to for complex Windows apps that need polished, professional interfaces.",

  "C# (.NET Core)":
    "C# on .NET Core is Microsoft's modern cross-platform backend framework used in enterprise. " +
    "It's fast, scalable, and integrates beautifully with Azure. " +
    "A solid choice for large teams building maintainable long-lived systems.",

  Flutter:
    "Flutter lets you build beautiful cross-platform apps for mobile, web, and desktop from one codebase. " +
    "Its rich widget library and hot-reload make development fast and fun. " +
    "One of the fastest-growing frameworks for mobile development today.",

  Swift:
    "Swift is Apple's modern language for building iOS and macOS apps. " +
    "It's safe, fast, and much more approachable than Objective-C. " +
    "If you're targeting Apple platforms, Swift is the only real choice.",

  Kotlin:
    "Kotlin is Google's preferred language for Android development. " +
    "It's concise and fully interoperable with Java while removing many of Java's pain points. " +
    "The standard choice for building modern Android apps.",

  "Java (Spring Boot)":
    "Spring Boot is the dominant framework for building enterprise Java applications. " +
    "It simplifies configuration and has excellent support for REST APIs and microservices. " +
    "The industry standard for backend systems in large organizations.",

  "Python (FastAPI)":
    "FastAPI is one of the fastest Python web frameworks, built on async and type hints. " +
    "It automatically generates API documentation, which is a huge time-saver. " +
    "Perfect for beginners who want to learn API development the right way.",

  "Python (Flask)":
    "Flask is a lightweight Python framework that gets an API running in just a few lines of code. " +
    "It's minimal by design, ideal for learning and small to medium projects. " +
    "One of the most popular choices for first-time backend developers.",

  "Python (Tkinter)":
    "Tkinter is Python's built-in GUI library — no installation needed. " +
    "It's simple enough for beginners to build real desktop windows quickly. " +
    "Great for learning GUI concepts without any extra setup.",

  "Rust (Tauri)":
    "Tauri lets you build tiny, blazing-fast cross-platform desktop apps using web tech for the UI. " +
    "It's much lighter than Electron with Rust powering the backend. " +
    "The modern choice for performance-focused desktop applications.",

  "Node.js (Express)":
    "Express is the most widely used Node.js backend framework — minimal and flexible. " +
    "JavaScript on the backend means one language for your whole stack. " +
    "Huge job market and thousands of tutorials make it easy to get started.",

  GDScript:
    "GDScript is Godot's built-in scripting language, designed specifically for game development. " +
    "It's Python-like and very easy to learn, even for complete beginners. " +
    "The fastest way to start making games without learning a general-purpose language first.",

  "C# (Unity)":
    "Unity with C# is the most popular game development platform in the world. " +
    "It supports both 2D and 3D games and has a massive asset store and community. " +
    "Used to build everything from indie games to AAA titles.",

  "C++ (Unreal)":
    "Unreal Engine with C++ is the industry standard for high-performance AAA game development. " +
    "It gives you full control over every aspect of rendering and performance. " +
    "Steep learning curve but the most powerful option for serious game developers.",

  MicroPython:
    "MicroPython is a lean version of Python designed to run on microcontrollers. " +
    "It brings Python's simplicity to embedded hardware like ESP32 and Raspberry Pi Pico. " +
    "The most beginner-friendly way to start programming physical devices.",

  C:
    "C is the foundational language of embedded systems and operating systems. " +
    "It gives you direct hardware control with minimal overhead. " +
    "Essential knowledge for any serious embedded or systems developer.",

  Julia:
    "Julia is designed for high-performance numerical and scientific computing. " +
    "It runs as fast as C while being as easy to write as Python. " +
    "The top choice for researchers and data scientists who need serious computational power.",

  "Scala (Spark)":
    "Scala with Apache Spark is the standard for large-scale big data processing. " +
    "It combines functional programming with the JVM's performance. " +
    "Used by Netflix, LinkedIn, and Airbnb for processing massive datasets.",

  Bash:
    "Bash is the native scripting language of Linux and macOS systems. " +
    "It's perfect for automating repetitive tasks, file management, and system administration. " +
    "Every developer working on Linux should know at least basic Bash.",

  "Bash + PowerShell":
    "Combining Bash and PowerShell covers both Unix and Windows environments. " +
    "Together they let you automate across any operating system. " +
    "Essential for sysadmins and DevOps engineers managing mixed infrastructure."

};