# Whalexy

Whalexy is a React-based WhatsApp AI CRM prototype for Indian businesses. It includes a conversion-focused landing page and a full SaaS command center with Smart Inbox, contacts, campaigns, automation flows, AI policy controls, commerce operations, API/webhooks, team management, and analytics.

## Local development

```bash
pnpm install
pnpm dev
```

The app is served under the configured GitHub Pages base path:

- Landing page: `http://localhost:5173/whalexy/`
- Dashboard: `http://localhost:5173/whalexy/dashboard`

## Production build

```bash
pnpm build
pnpm preview
```

The production output is generated in `dist/`. Vite is configured with `base: '/whalexy/'`, and `public/404.html` restores client-side routes on GitHub Pages.

## Stack

- React 19 and React Router
- Vite 8
- Tailwind CSS 4
- Lucide React
- Framer Motion
- Recharts

## Deployment

The workflow in `.github/workflows/deploy.yml` builds and deploys `dist/` to GitHub Pages whenever `main` is pushed. Enable GitHub Pages with **GitHub Actions** as the source in the repository settings.
