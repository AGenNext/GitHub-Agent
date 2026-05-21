# AGenNext GitHub Agent

Reusable Probot-based GitHub agent framework.

## Features

- Editorial review for blog drafts
- SEO structure checks
- Publishing workflow integration
- Reusable across repositories
- Extensible skill architecture

## Architecture

```txt
src/
  skills/
    editorialReview.js
  utils/
    issue.js
  index.js
```

## Run Locally

```bash
npm install
npm start
```

## GitHub App Setup

1. Go to GitHub Developer Settings
2. Create a GitHub App
3. Configure webhook events:

- Issues
- Issue comments
- Pull requests

4. Install the app on repositories

## Future Skills

- PR review
- issue triage
- release note generation
- SEO optimization
- duplicate topic detection
- semantic search
- AI-powered editorial review
