# mercedesedwards.cloud

Personal portfolio site for Mercedes Edwards — Solutions Architect focused on AI Enablement, AI Governance, and Privacy.

**Live site:** [mercedesedwards.cloud](https://mercedesedwards.cloud)

---

## About This Project

This portfolio started as a way to present my work and thinking in one place — architecture projects, governance documents, and professional background. It is also a project on its own: an end-to-end cloud deployment that I built, broke, debugged, and rebuilt more than once.

The site is built in [Lovable](https://lovable.dev) (a conversational UI builder) and deployed to AWS through a fully automated pipeline. Every edit made in Lovable syncs to GitHub, which triggers an automatic build and deployment through AWS Amplify. No manual deployments or CLI pushes to production — commit and it's live.

---

## Tech Stack

- **Frontend:** React, Vite, TypeScript, Tailwind CSS, shadcn/ui – [Lovable]
- **Build tool:** Vite 5.x – [Lovable]
- **Hosting:** AWS Amplify (app ID: `d3po02cc6o6vfr`, region: `eu-west-2`)
- **CI/CD:** GitHub → AWS Amplify auto-build on push to `main`
- **UI builder:** Lovable (connected to GitHub repo for auto-sync)
- **Domain:** Custom domain via GoDaddy, CNAME to Amplify CloudFront distribution
- **SSL:** Managed by AWS Certificate Manager (ACM) through Amplify

---

## Architecture

```
Lovable (UI edits)
    │
    ▼
GitHub (MercedesDG/mercedesedwards-cloud)
    │
    ▼ (auto-trigger on push to main)
AWS Amplify
    ├── npm ci
    ├── npm run build (Vite → dist/)
    └── Deploy to CloudFront CDN
         │
         ▼
    mercedesedwards.cloud (custom domain via GoDaddy CNAME)
```

---

## Local Development

```bash
# Clone the repo
git clone git@github.com:MercedesDG/mercedesedwards-cloud.git
cd mercedesedwards-cloud

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Deployment

Deployment is fully automated. Any push to `main` triggers the Amplify pipeline:

1. Amplify clones the repo at the latest commit
2. Runs `npm ci` to install dependencies
3. Runs `npm run build` (Vite compiles to `dist/`)
4. Deploys the `dist/` directory to CloudFront

The `amplify.yml` build specification:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

---

## Troubleshooting

This section documents issues I encountered during development and deployment, along with the root causes and fixes. Keeping this here for my own reference, and because I have learned these are common pitfalls with React SPA deployments on AWS Amplify that aren't always well-documented.

### 1. White Screen — SPA Rewrite Rule Intercepting Asset Requests

**Symptom:** Site loads as a blank white page. Browser console shows:
```
Failed to load module script: Expected a JavaScript-or-Wasm module script
but the server responded with a MIME type of "text/html".
Strict MIME type checking is enforced for module scripts per HTML spec.
```

**Root cause:** Amplify's default SPA rewrite rule (`/<*>` → `/index.html` with status `200`) catches *all* requests — including requests for JavaScript, CSS, and image files in the `/assets/` directory. When the browser requests `/assets/index-B8F1WkDn.js`, Amplify matches it against the catch-all (`/<*>`), returns `index.html` instead of the JS file, and the browser rejects the HTML because it expects JavaScript.

**Fix:** Replace the default rewrite rule with a regex pattern that excludes static file extensions. In Amplify Console → Hosting → Rewrites and Redirects, use this JSON:

```json
[
  {
    "source": "</^[^.]+$|\\.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|woff2|ttf|map|json|webp)$)([^.]+$)/>",
    "status": "200",
    "target": "/index.html"
  }
]

```

This tells Amplify to rewrite to `index.html` only when a path has no file extension or has an unrecognised extension — SPA client-side routing works for paths like `/about` or `/prompts`, but actual asset files (`.js`, `.css`, `.png`, etc.) are served browser requests them.

**Remember:** When creating a new Amplify app, this rule does not carry over from a previous app. You have to reconfigure it manually each time.

### 2. Custom Domain Not Loading After Amplify App Rebuild

**Symptom:** Site works on the Amplify default URL (`main.[app-id].amplifyapp.com`) but the custom domain shows a white screen or connection error.

**Root cause:** When you delete an Amplify app and create a new one (e.g., after a broken Lovable-GitHub connection), AWS generates a new CloudFront distribution with a new domain. The CNAME record at your DNS provider (in my case, GoDaddy) still points to the old distribution, which no longer exists.

**Fix:**
1. In Amplify Console → Hosting → Custom domains, find the CloudFront distribution domain for the new app
2. Compare it to the CNAME record at your DNS provider
3. If they differ, update the CNAME at the DNS provider to point to the new distribution
4. Allow time for DNS propagation (can take up to an hour)

**Test:** After updating, test with `nslookup mercedesedwards.cloud` to verify the CNAME connects to the correct CloudFront distribution. If it still shows the old one, propagation hasn't completed yet.

### 3. Lovable-GitHub Sync Creates Remote Commits Not in Local Repo

**Symptom:** `git push` fails with:
```
! [rejected] main -> main (fetch first)
error: failed to push some refs
Updates were rejected because the remote contains work that you do not have locally.
```

**Root cause:** Lovable pushes commits directly to GitHub when you make edits in its UI. If you also work locally, your local repo falls behind the remote. This is expected behaviour in the Lovable → GitHub → Amplify workflow.

**Fix:**
```bash
git pull --rebase
# Then make your changes or push
git push
```

**Do not force push** (`git push --force`) — this can overwrite Lovable's commits and break the sync.

---

## Project Structure

```
mercedesedwards-cloud/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   ├── pages/           # Page components (SPA routes)
│   ├── lib/             # Utility functions
│   ├── App.tsx          # Root component with routing
│   └── main.tsx         # Entry point
├── amplify.yml          # Amplify build specification
├── vite.config.ts       # Vite configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
├── package.json
└── README.md
```

---

## License

This is a personal portfolio project. Code structure and configuration patterns are free to reference, but content (text, articles, governance documents) is my own.

