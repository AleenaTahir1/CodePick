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
    "Essential for sysadmins and DevOps engineers managing mixed infrastructure." ,

  "HTML + CSS + JavaScript":
    "HTML, CSS, and JavaScript are the core building blocks of the web. " +
    "They let you create layouts, style them beautifully, and add interactivity directly in the browser. " +
    "Every modern web framework is built on top of these fundamentals.",

  "JavaScript (React)":
    "React is the most popular JavaScript library for building modern UIs. " +
    "Its component-based model makes it easy to break complex interfaces into reusable pieces. " +
    "Mastering React opens the door to countless frontend and fullstack roles.",

  "TypeScript (Next.js)":
    "Next.js with TypeScript gives you a powerful fullstack React framework. " +
    "You get server-side rendering, API routes, and static generation, all with type safety. " +
    "A top choice for production-grade web apps and SaaS products.",

  "Python (Django)":
    "Django is a batteries-included web framework for Python. " +
    "It ships with authentication, admin dashboards, an ORM, and strong security defaults. " +
    "Ideal when you want to move quickly from idea to complete web application.",

  "TypeScript (Next.js + Edge / Server Components)":
    "Using Next.js with Edge functions and React Server Components pushes performance to the next level. " +
    "Your app can render closer to users, reduce JavaScript sent to the browser, and feel extremely snappy. " +
    "Perfect for high-traffic, UX-sensitive web products.",

  "TypeScript (fullstack)":
    "A fullstack TypeScript setup lets you share types between frontend and backend. " +
    "This reduces bugs caused by mismatched contracts and improves refactor safety. " +
    "It's a favorite choice for teams building long-lived web platforms.",

  "JavaScript (React + Node.js)":
    "Using React on the frontend and Node.js on the backend means one language across your entire stack. " +
    "This simplifies hiring, learning, and code sharing between client and server. " +
    "A proven combination for freelancers and startups alike.",

  "Astro (JavaScript/TypeScript)":
    "Astro is optimized for content-heavy, blazing-fast websites. " +
    "It ships minimal JavaScript by default and lets you bring in React, Vue, or Svelte only where needed. " +
    "Great for blogs, marketing sites, and documentation portals.",

  "Flutter (Dart)":
    "Flutter uses Dart to build beautiful, high-performance apps for mobile, web, and desktop from a single codebase. " +
    "Its widget system and hot-reload make iterating on UI fast and enjoyable. " +
    "Excellent when you want one codebase for both Android and iOS.",

  "Kotlin (Android)":
    "Kotlin is the modern, first-class language for Android development. " +
    "It reduces boilerplate compared to Java and integrates seamlessly with existing Android APIs. " +
    "If you're targeting Android specifically, Kotlin is the best place to start.",

  "React Native":
    "React Native lets you build native-feeling mobile apps using JavaScript and React. " +
    "You can reuse much of your web knowledge while still getting access to native modules. " +
    "A strong option for teams with existing React experience.",

  "React Native (Expo)":
    "Expo sits on top of React Native to simplify setup, builds, and over-the-air updates. " +
    "It removes much of the native configuration pain so you can focus on writing app logic. " +
    "Great for prototypes, startups, and small teams.",

  "Swift (SwiftUI)":
    "SwiftUI is Apple's modern declarative UI framework for iOS and macOS apps. " +
    "Combined with Swift, it makes building complex native interfaces far more approachable. " +
    "The recommended way to build new apps for the Apple ecosystem.",

  "Kotlin (Jetpack Compose)":
    "Jetpack Compose is Google's modern toolkit for building native Android UIs in Kotlin. " +
    "It uses a declarative approach similar to React or SwiftUI, which simplifies state-driven UIs. " +
    "A must-learn for modern Android development.",

  "Godot (GDScript)":
    "Godot with GDScript is a lightweight, open-source engine perfect for 2D and simple 3D games. " +
    "GDScript feels very similar to Python, which keeps the learning curve gentle. " +
    "Ideal for beginners and indie developers who want full engine access without licensing worries.",

  "Unity (Bolt/Visual Scripting)":
    "Unity's visual scripting tools let you create gameplay logic by connecting nodes instead of writing code. " +
    "It's perfect for designers and artists who want to prototype ideas without deep programming experience. " +
    "You can always switch to or mix in C# later as you grow.",

  "Godot (C# or GDScript)":
    "Godot supports both its native GDScript and C# for scripting game logic. " +
    "This flexibility lets you start simple with GDScript and gradually adopt C# for larger projects. " +
    "A strong choice for indie teams who value openness and control.",

  "C++ (custom engine or Unreal)":
    "C++ is the traditional language of high-performance game engines. " +
    "Whether you're extending Unreal or building custom tech, it gives you precise control over memory and performance. " +
    "Best suited for experienced developers targeting demanding 3D experiences.",

  "JavaScript (Phaser)":
    "Phaser is a popular JavaScript framework for making 2D browser games. " +
    "You can run your creations anywhere a modern browser exists without extra installs. " +
    "Great for jams, educational games, and quick experiments.",

  Godot:
    "Godot is a fully open-source game engine that supports 2D and 3D projects. " +
    "It has a lightweight editor, scene-based architecture, and friendly community. " +
    "Perfect for indie developers who want freedom and fast iteration.",

  "Python (pandas + scikit-learn)":
    "Python with pandas and scikit-learn covers a huge portion of practical machine learning. " +
    "You can clean data, engineer features, and train classical models with concise, readable code. " +
    "Excellent for people who want real ML results without diving deep into neural networks yet.",

  "Python (PyTorch)":
    "PyTorch is the go-to deep learning framework for research and many production systems. " +
    "Its dynamic computation graphs feel very natural in Python and make debugging easier. " +
    "A top choice for building and experimenting with neural networks.",

  "Python (pandas + SQL)":
    "Combining pandas with SQL lets you move fluidly between databases and in-memory analysis. " +
    "You can pull data with SQL, then reshape and visualize it in Python. " +
    "A powerful combo for analytics and business intelligence work.",

  "Python (PyTorch + JAX)":
    "Using both PyTorch and JAX gives you flexibility across research and high-performance experimentation. " +
    "PyTorch is great for iterative model building, while JAX shines for functional-style, highly optimized computations. " +
    "Together they cover most cutting-edge deep learning workflows.",

  "Python (pandas) + SQL":
    "Python with pandas plus strong SQL skills is a classic data analyst toolkit. " +
    "SQL handles aggregations and joins in the database, while pandas lets you fine-tune analyses and plots. " +
    "Ideal for dashboards, ad-hoc reports, and decision support.",

  "Python (Airflow / DBT)":
    "Airflow and DBT sit at the heart of many modern data engineering stacks. " +
    "Airflow handles scheduling and orchestration, while DBT manages transformations as code. " +
    "Python is the glue that ties these tools and your data warehouse together.",

  "Scala (Spark) or Python (PySpark)":
    "Spark can be used with both Scala and Python, letting you process massive datasets on clusters. " +
    "Scala offers tight integration and performance, while PySpark lets Python users tap into Spark's power. " +
    "The standard choice for large-scale ETL and analytics.",

  "Rust (Polars)":
    "Polars is a lightning-fast DataFrame library written in Rust with bindings for multiple languages. " +
    "It can outperform traditional pandas workloads by a large margin, especially on larger datasets. " +
    "Great when you need analytics that push single-machine performance limits.",

  PowerShell:
    "PowerShell is a powerful scripting language and shell built into Windows. " +
    "It treats system data as objects, which makes manipulating the registry, services, and files very ergonomic. " +
    "A must-have skill for Windows administrators and power users.",

  "Python (Selenium / Playwright)":
    "Selenium and Playwright let Python scripts control real browsers programmatically. " +
    "You can automate logins, form submissions, and scraping tasks that would be tedious by hand. " +
    "Perfect for QA automation and small personal productivity tools.",

  "C (RTOS)":
    "C with a real-time operating system (RTOS) is the backbone of many embedded and robotics applications. " +
    "It gives you deterministic timing and fine control over hardware resources. " +
    "Critical when missed deadlines can cause physical errors or safety issues.",

  "Rust (embedded)":
    "Rust on embedded devices brings memory safety guarantees to low-level programming. " +
    "It helps prevent common vulnerabilities like buffer overflows without sacrificing performance. " +
    "An emerging favorite for safety-critical firmware and IoT systems.",

  "Arduino (C++)":
    "Arduino uses a simplified C++ environment tailored for microcontrollers. " +
    "Its huge ecosystem of boards, sensors, and example code makes hardware hacking very accessible. " +
    "Ideal for hobby projects, education, and quick IoT prototypes.",

  "MicroPython (ESP32 / Raspberry Pi Pico)":
    "MicroPython on boards like the ESP32 and Raspberry Pi Pico lets you control hardware with Python. " +
    "You can read sensors, drive motors, and connect to Wi‑Fi with very little code. " +
    "Perfect for beginners building their first IoT gadgets.",

  "Python (Raspberry Pi)":
    "Python on Raspberry Pi gives you a full Linux computer that can interact with the physical world. " +
    "You can run web servers, connect to sensors, and control electronics from one small board. " +
    "Great for home automation, robotics, and learning hardware.",

  "Python (Raspberry Pi) + MQTT":
    "Using Python on Raspberry Pi with MQTT turns it into a powerful IoT gateway. " +
    "It can collect sensor data locally and publish it reliably to cloud services. " +
    "A strong architecture for scalable, message-driven IoT systems."

};
