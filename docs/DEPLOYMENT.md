# Panduan Deployment

> Langkah-langkah deploy OurCreativities ke production

## Overview

OurCreativities adalah aplikasi React static yang dapat di-deploy ke berbagai platform hosting modern. Panduan ini mencakup deployment ke Vercel, Netlify, dan alternatif lainnya.

## Prasyarat

**Yang Dibutuhkan:**
- Node.js 18+ installed
- Git repository
- Account di platform hosting pilihan
- Source code sudah di-commit

## Build Production

### Local Build

**Step 1: Install Dependencies**
```bash
npm install
```

**Step 2: Run Production Build**
```bash
npm run build
```

**Output:**
- Build files di folder `dist/`
- Optimized dan minified
- Ready untuk deployment

**Step 3: Test Production Build**
```bash
npm run preview
```

Buka `http://localhost:4173` untuk preview.

### Build Configuration

**Vite Config:**
File `vite.config.ts` sudah dikonfigurasi untuk production optimal.

```typescript
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
  }
})
```

## Deployment Platforms

### Vercel (Recommended)

Vercel adalah platform terbaik untuk React apps dengan zero-config deployment.

**Method 1: Deploy via CLI**

**Step 1: Install Vercel CLI**
```bash
npm i -g vercel
```

**Step 2: Login**
```bash
vercel login
```

**Step 3: Deploy**
```bash
# Development preview
vercel

# Production deployment
vercel --prod
```

**Method 2: Deploy via GitHub**

**Step 1:** Push code ke GitHub repository

**Step 2:** Buka [vercel.com](https://vercel.com)

**Step 3:** Click "New Project"

**Step 4:** Import GitHub repository

**Step 5:** Configure:
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

**Step 6:** Click "Deploy"

**Auto Deployment:**
- Setiap push ke main branch = auto deploy to production
- Pull requests = preview deployments
- Automatic HTTPS
- Custom domain support

**Environment Variables:**
Saat ini tidak ada env vars, tapi untuk future:
```
Dashboard → Project → Settings → Environment Variables
```

---

### Netlify

Alternatif populer dengan fitur serupa Vercel.

**Method 1: Netlify CLI**

**Step 1: Install Netlify CLI**
```bash
npm i -g netlify-cli
```

**Step 2: Login**
```bash
netlify login
```

**Step 3: Initialize**
```bash
netlify init
```

**Step 4: Deploy**
```bash
# Build and deploy
netlify deploy --prod
```

**Method 2: Git Integration**

**Step 1:** Push code ke GitHub/GitLab/Bitbucket

**Step 2:** Login ke [netlify.com](https://netlify.com)

**Step 3:** Click "New site from Git"

**Step 4:** Connect repository

**Step 5:** Build settings:
```
Build command: npm run build
Publish directory: dist
```

**Step 6:** Click "Deploy site"

**Configuration File:**

Create `netlify.toml` di root:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

Redirect rule penting untuk SPA routing!

---

### GitHub Pages

Free hosting option via GitHub.

**Step 1: Install gh-pages**
```bash
npm install --save-dev gh-pages
```

**Step 2: Update package.json**
```json
{
  "homepage": "https://username.github.io/ourcreativities",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

**Step 3: Update vite.config.ts**
```typescript
export default defineConfig({
  base: '/ourcreativities/', // repository name
  // ... other config
})
```

**Step 4: Deploy**
```bash
npm run deploy
```

**Note:** Perlu update Router dari MemoryRouter ke BrowserRouter + basename:
```typescript
<BrowserRouter basename="/ourcreativities">
```

---

### Cloudflare Pages

Modern platform dengan edge computing.

**Step 1:** Push code ke GitHub

**Step 2:** Login ke [pages.cloudflare.com](https://pages.cloudflare.com)

**Step 3:** Create new project

**Step 4:** Connect repository

**Step 5:** Build settings:
```
Build command: npm run build
Build output directory: dist
```

**Step 6:** Deploy

**Features:**
- Global CDN
- Auto SSL
- Free unlimited bandwidth
- Fast edge network

---

## Custom Domain

### Vercel Custom Domain

**Step 1:** Go to Project Settings → Domains

**Step 2:** Add your domain (contoh: `ourcreativity.com`)

**Step 3:** Configure DNS:

**Option A - Vercel Nameservers:**
Update di domain registrar ke Vercel nameservers.

**Option B - CNAME:**
```
CNAME record:
www → cname.vercel-dns.com
```

**Step 4:** Wait for DNS propagation (max 48 hours)

### Netlify Custom Domain

**Step 1:** Site Settings → Domain management

**Step 2:** Add custom domain

**Step 3:** Configure DNS:
```
A record:
@ → 75.2.60.5

CNAME:
www → your-site.netlify.app
```

---

## Environment Variables

Untuk future development dengan env vars:

**Development (.env.local):**
```bash
VITE_API_URL=http://localhost:3000
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_KEY=your_key
```

**Production:**

**Vercel:**
Dashboard → Settings → Environment Variables

**Netlify:**
Site Settings → Build & Deploy → Environment

**Access dalam Code:**
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## CI/CD Pipeline

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

---

## Performance Optimization

### Pre-deployment Checklist

**Code Optimization:**
- [ ] Remove console.logs
- [ ] Remove unused dependencies
- [ ] Optimize images
- [ ] Enable minification
- [ ] Code splitting implemented

**Build Optimization:**
```bash
# Analyze bundle size
npm run build -- --mode production

# Check build output
ls -lh dist/
```

### CDN Configuration

**Assets:**
Gunakan CDN untuk static assets (images, fonts).

**Caching Headers:**

**Vercel (automatically handled):**
- Static assets: Cache 1 year
- HTML: No cache

**Netlify (_headers file):**
```
/assets/*
  Cache-Control: public, max-age=31536000, immutable

/*.html
  Cache-Control: public, max-age=0, must-revalidate
```

---

## Monitoring

### Analytics Integration

**Google Analytics:**
```html
<!-- In index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

**Vercel Analytics:**
```bash
npm install @vercel/analytics
```

```typescript
// In App.tsx
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <YourApp />
      <Analytics />
    </>
  );
}
```

### Error Tracking

**Sentry (Recommended):**
```bash
npm install @sentry/react
```

```typescript
// In index.tsx
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "your-dsn",
  environment: "production",
});
```

---

## Troubleshooting

### Common Issues

**Issue: Routes return 404**

**Solution:** Add redirect rules untuk SPA.

Netlify (_redirects file):
```
/*    /index.html   200
```

Vercel (vercel.json):
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

**Issue: CSS tidak load**

**Solution:** Check base path di vite.config.ts

**Issue: Images broken**

**Solution:** Use absolute paths atau import images

```typescript
// Good
import logo from './assets/logo.png'
<img src={logo} />

// Or
<img src="/assets/logo.png" />
```

**Issue: Build fails**

**Check:**
- Node version compatibility
- Dependencies installed
- TypeScript errors
- Build command correct

---

## Rollback Strategy

### Vercel

**Via Dashboard:**
1. Go to Deployments
2. Find previous working deployment
3. Click "..." → "Promote to Production"

**Via CLI:**
```bash
vercel rollback
```

### Netlify

**Via Dashboard:**
1. Go to Deploys
2. Find previous deploy
3. Click "Publish deploy"

---

## Security

### HTTPS

- Automatic pada Vercel/Netlify
- Free SSL certificates
- Auto-renewal

### Security Headers

**Vercel (vercel.json):**
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}
```

---

## Checklist Pre-Launch

**Technical:**
- [ ] Build succeeds locally
- [ ] No TypeScript errors
- [ ] No console errors
- [ ] All links work
- [ ] Images load correctly
- [ ] Mobile responsive
- [ ] Performance optimized

**SEO:**
- [ ] Meta tags configured
- [ ] Sitemap generated
- [ ] Robots.txt configured
- [ ] Analytics setup

**Deployment:**
- [ ] Platform configured
- [ ] Domain connected
- [ ] SSL working
- [ ] Monitoring setup
- [ ] Error tracking active

---

**Last Updated:** November 2025  
**Platform Recommendation:** Vercel  
**Maintainer:** OurCreativities Team
