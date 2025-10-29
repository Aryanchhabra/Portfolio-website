# 🚀 Deployment Guide

Quick guide to deploy your portfolio to popular hosting platforms.

## Vercel (Recommended)

Vercel is perfect for React/Vite apps with zero configuration needed.

### Option 1: Deploy via CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy (first time and updates)
vercel

# Deploy to production
vercel --prod
```

### Option 2: Deploy via GitHub

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel auto-detects Vite settings
6. Click "Deploy"

**Build Settings** (auto-detected):
- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

---

## Netlify

### Via Drag & Drop

```bash
# Build your project
npm run build

# Drag the 'dist' folder to netlify.com/drop
```

### Via CLI

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

### Via Git

1. Push to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your repo
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy"

---

## GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "npm run build && gh-pages -d dist"

# Update vite.config.js - add base path:
# base: '/repository-name/'

# Deploy
npm run deploy
```

---

## Cloudflare Pages

1. Push your code to GitHub/GitLab
2. Visit [Cloudflare Pages Dashboard](https://dash.cloudflare.com/)
3. Click "Create a project"
4. Connect repository
5. Configure:
   - Framework: Vite
   - Build command: `npm run build`
   - Build output: `dist`
6. Click "Save and Deploy"

---

## Environment Variables

If you need environment variables:

### Vercel
Add via dashboard or `vercel env add`

### Netlify
Add via dashboard under Site settings → Environment variables

### Local .env
```env
VITE_API_KEY=your_key_here
```

Access in code: `import.meta.env.VITE_API_KEY`

---

## Post-Deployment Checklist

- [ ] Test all links work
- [ ] Verify resume PDF loads correctly
- [ ] Check mobile responsiveness
- [ ] Test all animations
- [ ] Verify social links
- [ ] Check meta tags/SEO
- [ ] Test contact email links
- [ ] Verify all images load

---

## Custom Domain

### Vercel
1. Go to project settings → Domains
2. Add your domain
3. Update DNS records as instructed

### Netlify
1. Go to Site settings → Domain management
2. Add custom domain
3. Configure DNS

---

## Performance Tips

- ✅ Images are optimized
- ✅ Code splitting enabled (Vite default)
- ✅ Lazy loading implemented
- ✅ Minimal bundle size
- ✅ Fast CDN delivery

Your site should score 90+ on Lighthouse! 🚀

