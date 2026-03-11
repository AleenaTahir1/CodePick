# Contributing to CodePick

First off, thank you for considering contributing to CodePick! It's people like you that make CodePick such a great tool.

## Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct:

- Use welcoming and inclusive language
- Be respectful of differing viewpoints and experiences
- Gracefully accept constructive criticism
- Focus on what is best for the community
- Show empathy towards other community members

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

**Bug Report Template:**

```markdown
**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. See error

**Expected behavior**
A clear description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment:**
 - OS: [e.g., Windows 11]
 - Browser: [e.g., Chrome, Firefox]

**Additional context**
Add any other context about the problem here.
```

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- Use a clear and descriptive title
- Provide a detailed description of the suggested enhancement
- Explain why this enhancement would be useful
- Include mockups or examples if applicable

### Pull Requests

1. **Fork the repo** and create your branch from `main`
2. **Install dependencies**: `npm install`
3. **Make your changes** and ensure they follow our coding style
4. **Test your changes**: `npm run dev`
5. **Build successfully**: `npm run build`
6. **Submit a pull request**

## Development Setup

### Prerequisites

- Node.js 18+
- Docker (optional, for containerized deployment)

### Local Development

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/codepick.git
cd codepick

# Install dependencies
npm install

# Start development server
npm run dev
```

### Docker Development

```bash
docker-compose up --build
# Open browser at http://localhost:3000
```

### Project Structure

```
codepick/
├── src/
│   ├── components/      — React UI components
│   ├── engine/          — Rule engine, patterns, responses
│   ├── App.jsx          — Main application component
│   └── main.jsx         — Entry point
├── public/              — Static assets
├── Dockerfile           — Multi-stage Docker build
├── docker-compose.yml   — Docker Compose config
├── nginx.conf           — Nginx SPA config
└── package.json
```

## Coding Guidelines

### JavaScript / React

- Use functional components with hooks
- Follow the existing code style
- Use meaningful variable and function names
- Add comments for complex logic
- Use Tailwind CSS for styling

### Adding New Rules

To add a new language recommendation rule, edit `src/engine/rules.js`:

```js
{
  id: "unique-rule-id",
  useCase: "web",           // web, mobile, game, data, automation, embedded, desktop, api
  experience: "beginner",   // beginner, intermediate, advanced, or null
  preference: "easy",       // performance, easy, jobs, community, etc., or null
  primary: "Python",
  alternatives: ["JavaScript"],
  reasoning: "Explain why this language fits the scenario."
}
```

### Commits

- Use clear, descriptive commit messages
- Start with a verb: "Add", "Fix", "Update", "Remove"
- Reference issues when applicable: "Fix #123"

**Examples:**
```
Add support for new game development rules
Fix pattern matching for mobile keywords
Update README with Docker instructions
Remove deprecated fallback handler
```

## Testing

Before submitting a PR:

1. Ensure the app builds: `npm run build`
2. Test in development: `npm run dev`
3. Test the Docker build: `docker-compose up --build`

## Getting Help

- Open an issue for questions
- Join discussions in GitHub Discussions

## Team

- Aleena Tahir — Docker, Deployment, CI/CD, Integration
- Saqlain — React Frontend, Chat UI
- Dua — Rule Engine Core, Pattern Matching
- Aena — Rules (Use-Case Mapping), Testing
- Emaan — Rules (Preferences/Edge Cases), Bot Responses

Thank you for contributing to CodePick!
