# Deploy Hugo to Cloudflare Pages

This project deploys your Hugo static site to Cloudflare Pages via GitHub integration.

## Setup

### 1. Connect GitHub to Cloudflare Pages

1. Go to https://dash.cloudflare.com/
2. Click **Pages** in the sidebar
3. Click **Create a project** → **Connect to Git**
4. Select **GitHub** and authorize Cloudflare
5. Select `therealdavidbour/blog` repository

### 2. Configure Build Settings

When connecting your repo, set:
- **Production branch**: `main`
- **Build command**: `hugo`
- **Build output directory**: `public`

### 3. Deploy

Click **Save and Deploy**. Cloudflare will automatically build and deploy.

## Development

Run locally with Hugo:
```bash
npm run dev
```

This starts Hugo in development mode at `http://localhost:1313`

## Building Locally

Build the static site:
```bash
npm run build
```

This generates the `public/` directory with your compiled Hugo site.

## Automatic Deployments

Every time you push to the `main` branch, Cloudflare Pages will:
1. Pull your code
2. Run `hugo` to build
3. Deploy the `public/` folder

View deployments: https://dash.cloudflare.com/ → **Pages** → **david-bour-blog**

## Configuration

Update `hugo.toml` with your actual domain:
```toml
baseURL = 'https://yourdomain.com/'
```

## Adding a Custom Domain

1. Go to your Pages project in Cloudflare dashboard
2. Click **Settings** → **Domains**
3. Add your custom domain
4. Update DNS records if needed

## Features

- **Static Site Generation**: Hugo builds your content to HTML
- **Automatic Builds**: Deploys on every push to `main`
- **Global CDN**: Content served from Cloudflare edge worldwide
- **HTTPS**: Automatic SSL/TLS certificates
- **Preview Deployments**: Each pull request gets a preview URL

## Monitoring

View deployments and logs: https://dash.cloudflare.com/ → **Pages** → **david-bour-blog** → **Deployments**

## Resources

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Hugo Docs](https://gohugo.io/documentation/)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)
