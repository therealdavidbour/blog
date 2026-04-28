# Deploy Hugo to Cloudflare Pages with Workers

This project deploys your Hugo static site to Cloudflare Pages with a Worker for advanced routing and caching.

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Install Wrangler (if not already installed)

```bash
npm install -g wrangler@latest
```

### 3. Authenticate with Cloudflare

```bash
wrangler login
```

### 4. Create/Link Project

For a new Pages project:
```bash
wrangler pages project create david-bour-blog
```

To link to existing project:
```bash
wrangler pages project list
# Then update your wrangler.toml with the project name
```

## Development

Run locally with Hugo:
```bash
npm run dev
```

This starts Hugo in development mode at `http://localhost:1313`

## Build

Build the static site:
```bash
npm run build
```

This generates the `public/` directory with your compiled Hugo site.

## Deploy to Cloudflare Pages

### Option 1: Direct Deployment (Recommended)

Deploy your built site directly:
```bash
wrangler pages deploy public/
```

### Option 2: Git-based Deployment

1. Push to GitHub
2. Connect your repo in Cloudflare Pages dashboard
3. Set build command: `hugo`
4. Set output directory: `public`

### Option 3: Deploy with Worker

To deploy the Worker alongside your Pages:
```bash
wrangler deploy
```

## Configuration

### Update `wrangler.toml`

Replace placeholders:
- `example.org` → your domain
- KV namespace IDs in `[[kv_namespaces]]` section

### Hugo Configuration

Update `hugo.toml`:
```toml
baseURL = 'https://yourdomain.com/'
```

## Features

- **Static Site Generation**: Hugo builds your content to HTML
- **Worker Middleware**: Custom routing, caching headers, redirects
- **KV Storage**: Optional asset caching for improved performance
- **Environment Support**: Separate prod/staging environments

## Caching Strategy

The Worker applies cache headers:
- HTML files: 1 hour cache
- Static assets: 1 year cache (immutable)

Customize in `src/index.ts`

## Monitoring

View deployment logs:
```bash
wrangler tail
```

View Pages deployments:
```bash
wrangler pages project view david-bour-blog
```

## Resources

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Hugo Docs](https://gohugo.io/documentation/)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)
