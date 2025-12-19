# Deployment Guide

This guide will help you deploy your portfolio website to various platforms.

## Prerequisites

- Ensure all code is committed to git
- Run `npm run build` locally to verify the build succeeds
- Check that all features work correctly with `npm run preview`

## Option 1: Netlify (Recommended)

### Deploy via Git Integration

1. Push your code to GitHub
2. Go to [Netlify.com](https://netlify.com) and sign up
3. Click "New site from Git"
4. Select GitHub and authorize
5. Select your repository
6. Set build command: `npm run build`
7. Set publish directory: `dist`
8. Click "Deploy site"

### Environment Variables

1. Go to Site Settings → Build & Deploy → Environment
2. Add any required environment variables from `.env`
3. Redeploy the site

## Option 2: Vercel

### Deploy via Git Integration

1. Go to [Vercel.com](https://vercel.com) and sign up
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect the React + Vite setup
5. Click "Deploy"

### Configure Build Settings

- Build Command: `npm run build`
- Output Directory: `dist`

## Option 3: GitHub Pages

1. Update `vite.config.js` to include:
```javascript
export default defineConfig({
  base: '/your-repo-name/', // Change to your repo name
  // ... rest of config
})
```

2. Build and deploy:
```bash
npm run build
npm run deploy
```

3. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)

## Option 4: Manual Deployment (Any Web Host)

1. Build the project:
```bash
npm run build
```

2. Upload the `dist` folder contents to your web hosting via:
   - FTP
   - File Manager
   - SSH/SCP
   - Your host's CLI tools

3. Ensure your web server:
   - Serves `index.html` for all routes (SPA configuration)
   - Has gzip compression enabled
   - Sets proper cache headers

### Apache Configuration (.htaccess)
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Nginx Configuration
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## Pre-Deployment Checklist

- [ ] Run `npm run lint` - no errors
- [ ] Run `npm run build` - successful build
- [ ] Run `npm run preview` - works correctly
- [ ] Test on multiple browsers
- [ ] Test on mobile devices
- [ ] Verify images load correctly
- [ ] Check contact form validation
- [ ] Test all navigation links
- [ ] Verify performance (use Lighthouse)
- [ ] Update contact email in `.env`
- [ ] Configure analytics (optional)

## Performance Optimization

### Enable Compression
Ensure your hosting provider has gzip enabled for:
- `.js` files
- `.css` files
- `.html` files

### Cache Headers
Set appropriate cache headers:
- Static assets (images, fonts): 1 year
- JS/CSS bundles: 30 days
- HTML files: No cache (must revalidate)

## Security

1. **HTTPS Only**: Ensure your domain uses HTTPS
2. **Security Headers**: Set these headers in your web server:
   - `X-Content-Type-Options: nosniff`
   - `X-Frame-Options: DENY`
   - `X-XSS-Protection: 1; mode=block`

3. **Content Security Policy** (optional):
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline';
```

## Monitoring & Maintenance

### Set Up Analytics
Add Google Analytics or similar:
1. Create an analytics account
2. Get your tracking ID
3. Add tracking script to `index.html` (optional)

### Monitor Performance
Use tools like:
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [PageSpeed Insights](https://pagespeed.web.dev)
- [WebPageTest](https://www.webpagetest.org)

### Keep Dependencies Updated
Regularly update dependencies:
```bash
npm update
npm audit
```

## Troubleshooting

### Issue: Routes returning 404

**Solution**: Ensure your server is configured to serve `index.html` for all routes (SPA configuration).

### Issue: Assets returning 404

**Solution**: Check that your `base` path in `vite.config.js` matches your deployment path.

### Issue: Styles not loading

**Solution**: Ensure CSS is properly bundled. Check that Tailwind CSS is correctly configured.

### Issue: Images not loading

**Solution**: 
1. Verify image paths are relative
2. Check that images are in the correct folder
3. Ensure `public` folder is deployed

## Domain Setup

### Using a Custom Domain

1. **For Netlify**:
   - Go to Site Settings → Domain Management
   - Add your custom domain
   - Update DNS records (Netlify will provide instructions)

2. **For Vercel**:
   - Go to Settings → Domains
   - Add your custom domain
   - Update DNS records (Vercel will provide instructions)

3. **For GitHub Pages**:
   - Add `CNAME` file with your domain
   - Update DNS records pointing to GitHub Pages

## SSL Certificate

All major hosting platforms provide free SSL certificates. Ensure:
- [ ] HTTPS is enabled
- [ ] Certificate is valid and not expired
- [ ] All resources are served over HTTPS

## Continuous Deployment

Most platforms automatically redeploy when you push to the main branch. Set up with:
1. Enable branch auto-publish
2. Optionally add preview deployments for pull requests
3. Configure production/staging deployments

---

**Need Help?**
- Check provider documentation
- Review build logs for errors
- Test locally with `npm run preview`
- Verify all environment variables are set
