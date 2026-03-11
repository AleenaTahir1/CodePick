// ============================================================
//  CodePick — patterns.js
//  Owner: Dua
//  Covers: Use-case keywords, experience synonyms, preference synonyms
// ============================================================

// ──────────────────────────────────────────────────────────
// SECTION 1 — USE-CASE KEYWORD MAPPINGS
// ──────────────────────────────────────────────────────────

export const useCasePatterns = {
  web: [
    "website", "web app", "web application", "frontend", "front end",
    "html", "css", "react", "vue", "angular", "web dev", "web development",
    "landing page", "blog", "e-commerce", "ecommerce", "online store",
    "web page", "webpage", "site", "static site", "fullstack", "full stack",
    "web", "websites"
  ],
  mobile: [
    "mobile", "mobile app", "android", "ios", "iphone", "phone app",
    "smartphone", "tablet", "mobile application", "app store", "play store",
    "cross platform", "cross-platform", "react native", "flutter", "swift",
    "kotlin"
  ],
  game: [
    "game", "games", "game dev", "game development", "gaming", "video game",
    "2d game", "3d game", "unity", "unreal", "godot", "game engine",
    "indie game", "game jam", "gameplay", "game design"
  ],
  data: [
    "data", "data science", "machine learning", "ml", "ai",
    "artificial intelligence", "deep learning", "neural network",
    "data analysis", "analytics", "data engineering", "big data",
    "pandas", "numpy", "tensorflow", "pytorch", "statistics",
    "visualization", "dashboard", "business intelligence", "bi"
  ],
  automation: [
    "automation", "automate", "script", "scripting", "bot", "scraping",
    "web scraping", "cron", "task automation", "devops", "ci/cd",
    "pipeline", "deploy", "deployment", "cli", "command line",
    "command-line", "tool", "tools", "shell", "bash"
  ],
  embedded: [
    "embedded", "iot", "internet of things", "microcontroller",
    "arduino", "raspberry pi", "raspi", "esp32", "sensor", "hardware",
    "firmware", "robotics", "robot", "smart home", "wearable",
    "micropython", "low level", "low-level"
  ],
  desktop: [
    "desktop", "desktop app", "desktop application", "gui",
    "graphical user interface", "windows app", "mac app", "linux app",
    "native app", "electron", "tauri", "tkinter", "wpf", "winforms"
  ],
  api: [
    "api", "backend", "back end", "back-end", "server", "rest",
    "restful", "graphql", "microservice", "microservices", "endpoint",
    "express", "fastapi", "flask", "spring", "node.js", "nodejs",
    "database", "crud"
  ]
};

// ──────────────────────────────────────────────────────────
// SECTION 2 — EXPERIENCE LEVEL SYNONYMS
// ──────────────────────────────────────────────────────────

export const experiencePatterns = {
  beginner: [
    "beginner", "new to coding", "just starting", "never programmed",
    "no experience", "newbie", "starter", "brand new", "first time",
    "learning", "student", "start from scratch", "know nothing",
    "complete beginner", "zero experience", "never coded", "new to programming"
  ],
  intermediate: [
    "intermediate", "some experience", "a bit of experience",
    "know the basics", "built a few", "worked with", "familiar with",
    "some coding", "a few projects", "comfortable", "not new",
    "decent experience", "moderate", "mid-level", "mid level"
  ],
  advanced: [
    "advanced", "experienced", "expert", "professional", "senior",
    "years of experience", "very experienced", "pro", "seasoned",
    "proficient", "skilled", "deep knowledge", "production experience",
    "shipped apps", "lead developer", "architect"
  ]
};

// ──────────────────────────────────────────────────────────
// SECTION 3 — PREFERENCE SYNONYMS
// ──────────────────────────────────────────────────────────

export const preferencePatterns = {
  performance: [
    "fast", "speed", "performance", "efficient", "high performance",
    "blazing fast", "low latency", "optimized", "performant", "quick"
  ],
  easy: [
    "easy", "simple", "easy to learn", "beginner friendly",
    "beginner-friendly", "straightforward", "not hard", "gentle",
    "accessible", "low barrier"
  ],
  jobs: [
    "job", "jobs", "job market", "career", "hiring", "employable",
    "salary", "demand", "in demand", "in-demand", "employment",
    "freelance", "work", "marketable"
  ],
  community: [
    "community", "support", "help", "tutorials", "resources",
    "documentation", "docs", "stack overflow", "forums", "active community",
    "large community"
  ],
  "cross-platform": [
    "cross platform", "cross-platform", "multi platform", "multi-platform",
    "all platforms", "windows and mac", "everywhere", "portable"
  ],
  enterprise: [
    "enterprise", "large scale", "large-scale", "corporate", "big company",
    "scalable", "maintainable", "long term", "long-term", "production"
  ],
  "open-source": [
    "open source", "open-source", "free", "foss", "libre",
    "open source ecosystem", "github", "community driven"
  ]
};
