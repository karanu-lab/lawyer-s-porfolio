# Deployment Guide - Alexander Mitchell Portfolio

## 🚀 Quick Deploy to Vercel (Recommended)

Vercel is perfect for Vite + React projects. It's free, fast, and handles everything automatically.

### Prerequisites
- GitHub account (free)
- Vercel account (free) - sign up at [vercel.com](https://vercel.com)

---

## Method 1: Deploy via Vercel CLI (Fastest)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy
```bash
vercel
```

Follow the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Your account
- **Link to existing project?** → No
- **Project name?** → alexander-mitchell-portfolio (or your choice)
- **Directory?** → ./ (press Enter)
- **Build command?** → vite build (auto-detected)
- **Output directory?** → dist (auto-detected)

**Done!** Your site will be live at: `https://alexander-mitchell-portfolio.vercel.app`

### Step 4: Production Deploy
```bash
vercel --prod
```

---

## Method 2: Deploy via GitHub + Vercel (Recommended for Updates)

### Step 1: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Name: `alexander-mitchell-portfolio`
3. Keep it **Private** (or Public if you prefer)
4. Click **Create repository**

### Step 2: Push Your Code

```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Alexander Mitchell Portfolio"

# Add remote (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/alexander-mitchell-portfolio.git

# Push
git branch -M main
git push -u origin main
```

### Step 3: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. Click **"Import Git Repository"**
4. Select your `alexander-mitchell-portfolio` repo
5. Click **"Import"**
6. Vercel will auto-detect settings:
   - Framework: **Vite**
   - Build Command: `vite build`
   - Output Directory: `dist`
7. Click **"Deploy"**

**Done!** Your site will be live in ~2 minutes.

---

## Method 3: Deploy to Netlify

### Via Netlify Drop

1. Run build:
   ```bash
   npm run build
   ```

2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag and drop the `dist` folder
4. Your site is live!

### Via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

---

## Method 4: GitHub Pages

### Step 1: Update `vite.config.ts`

Add base path:
```typescript
export default defineConfig({
  base: '/alexander-mitchell-portfolio/',
  // ... rest of config
})
```

### Step 2: Install gh-pages

```bash
npm install --save-dev gh-pages
```

### Step 3: Add Deploy Script to `package.json`

```json
"scripts": {
  "deploy": "vite build && gh-pages -d dist"
}
```

### Step 4: Deploy

```bash
npm run deploy
```

Your site will be live at:
`https://YOUR-USERNAME.github.io/alexander-mitchell-portfolio/`

---

## 🌐 Custom Domain Setup

After deploying, you can add a custom domain:

### On Vercel:
1. Go to Project Settings → Domains
2. Add your domain (e.g., `alexandermitchell.com`)
3. Follow DNS configuration instructions

### On Netlify:
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Update DNS records

---

## 📝 Environment Variables

If you add any API keys or secrets later:

### Vercel:
```bash
vercel env add VARIABLE_NAME
```

Or in dashboard: Settings → Environment Variables

### Netlify:
Site Settings → Environment → Environment Variables

---

## ✅ Pre-Deployment Checklist

Before deploying, make sure:

- [x] Build succeeds: `npm run build`
- [x] Custom video added: `public/videos/hero-background.mp4`
- [x] Profile image added: `public/images/profile.jpg`
- [ ] CV added: `public/documents/Alexander-Mitchell-CV.pdf` ⚠️
- [x] All content updated (name, bio, contact info)
- [x] Meta tags updated in `index.html`

---

## 🔄 Updating Your Site

### With Git + Vercel (Automatic):
1. Make changes
2. Commit: `git add . && git commit -m "Update content"`
3. Push: `git push`
4. Vercel auto-deploys! ✨

### With Vercel CLI:
```bash
vercel --prod
```

### With Netlify:
```bash
netlify deploy --prod
```

---

## 🎯 Recommended: Vercel + GitHub

**Why?**
- ✅ **Free** for personal projects
- ✅ **Auto-deployment** on git push
- ✅ **Preview deployments** for branches
- ✅ **Custom domains** with SSL
- ✅ **Analytics** built-in
- ✅ **Blazing fast** edge network

---

## 🆘 Troubleshooting

### Build Fails
- Check `npm run build` locally first
- Ensure all dependencies in `package.json`
- Check Node version (use v18 or v20)

### 404 Errors
- For SPA routing, vercel auto-configures
- For others, add redirect rules

### Video/Images Not Loading
- Ensure files in `public/` folder
- Check file paths start with `/`
- Verify file names match exactly

---

## 📊 After Deployment

### Analytics (Optional)
- Vercel Analytics (free)
- Google Analytics
- Plausible Analytics

### Performance Monitoring
- Lighthouse CI
- Vercel Speed Insights

### SEO
- Submit sitemap to Google Search Console
- Add to Google Business Profile

---

**Ready to deploy?** I recommend **Method 2** (GitHub + Vercel) for the best experience! 🚀
