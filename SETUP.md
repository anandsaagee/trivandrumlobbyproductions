# Trivandrum Lobby Website - Setup Guide

## What Was Built

A professional, responsive website for Trivandrum Lobby production house with:

- Homepage with hero, project grid, team, Instagram feed, and contact section
- Three project detail pages (two completed + one upcoming)
- Clean red and white design system (WCAG AA compliant)
- Mobile-responsive navigation with hamburger menu
- Accessible lightbox gallery on project pages
- Contact form with honeypot and email fallback
- SEO optimized with JSON-LD schema, sitemap, and meta tags
- GitHub Pages deployment ready
- No build step, no dependencies, plain HTML/CSS/JavaScript

## File Structure

```
/home/anand-saagee/assets/
├── index.html                          (Homepage)
├── 404.html                            (Error page)
├── sitemap.xml                         (SEO)
├── robots.txt                          (SEO)
├── README.md                           (Documentation)
├── CONTENT_CHECKLIST.md               (Placeholder tracking)
├── DESIGN_NOTES.md                    (Design reference)
├── .gitignore                         (Git ignore rules)
├── .github/
│   └── workflows/
│       └── pages.yml                  (GitHub Pages deployment)
├── projects/
│   ├── project-one.html               (Completed project 1)
│   ├── project-two.html               (Completed project 2)
│   └── project-upcoming.html          (In post-production)
├── assets/
│   ├── css/
│   │   └── style.css                  (Design system, 800+ lines)
│   ├── js/
│   │   ├── main.js                    (Homepage logic, 280+ lines)
│   │   └── project.js                 (Lightbox, 130+ lines)
│   ├── img/                           (Images - add here)
│   ├── instagram/                     (Instagram feed - add here)
│   └── video/                         (Video trailers - optional)
└── scripts/
    └── optimize-images.js             (Image optimization helper)
```

## Next Steps: Getting Started

### 1. Test Locally

Open the site in your browser without any server:

```bash
# Just open the file
open /home/anand-saagee/assets/index.html
```

Or use a local server:

```bash
cd /home/anand-saagee/assets

# Python 3
python -m http.server 8000

# Node.js
npx http-server

# Then visit http://localhost:8000
```

### 2. Add Images

All images are referenced but not included. The site will render without them, but looks better with real images.

Required image files (add to `assets/img/`):
- `hero.jpg` + `hero.webp` (800x600px) - Film poster or still
- `poster-1.jpg` + `poster-1.webp` (280x420px) - Project 1 poster
- `poster-2.jpg` + `poster-2.webp` (280x420px) - Project 2 poster
- `upcoming.jpg` + `upcoming.webp` (800x600px) - Upcoming project still
- `team-1.jpg` through `team-4.jpg` + `.webp` (200x200px) - Team photos
- `still-1.jpg` through `still-3.jpg` + `.webp` (280x200px) - Gallery stills
- `og-image.jpg` (1200x630px) - Social share image
- `favicon.ico` and `apple-touch-icon.png` - Favicons

Instagram feed (add to `assets/instagram/`):
- `img-1.jpg` through `img-6.jpg` + `.webp` (200x200px each)

**Image conversion to WebP:**

```bash
# Install dependencies (optional, for optimization)
npm install sharp

# Run the optimization script
node scripts/optimize-images.js
```

Or manually with cwebp (install cwebp first):

```bash
cwebp input.jpg -o output.webp -q 80
```

### 3. Fill in Placeholders

All placeholders are marked with `[ADD ...]` or `[...]`. Use CONTENT_CHECKLIST.md to track progress.

**Configuration** (assets/js/main.js, top of file):

```javascript
const CONFIG = {
    formEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',  // or Web3Forms URL
    instagramHandle: 'your_handle',                        // without @
    whatsappNumber: '+919876543210'                        // with country code
};
```

**Email addresses** (replace in all files):
- `business@trivandrumlob by.com` → Your business email
- `hello@trivandrumlob by.com` → Your general inquiry email

**Project details** (edit in index.html and projects/ files):
- Titles, years, formats, descriptions
- Credits (director, writer, producer, etc.)
- Synopsis and gallery images
- Links to where projects can be watched

**Team** (assets/js/main.js, teamMembers array):
- Names, roles, and photos (2-6 team members)

**Instagram feed** (assets/js/main.js, instagramFeed array):
- 6 Instagram post URLs and their images

### 4. Set Up Contact Form

Choose one:

**Option A: Formspree (recommended)**
1. Go to formspree.io
2. Sign up and create a new form
3. Copy your form ID (e.g., `f_abc123xyz`)
4. Add to CONFIG: `formEndpoint: 'https://formspree.io/f_abc123xyz'`

**Option B: Web3Forms**
1. Go to web3forms.com
2. Sign up and get your access key
3. Add to CONFIG: `formEndpoint: 'https://api.web3forms.com/submit'`

**Option C: Mailto (no setup needed)**
Leave formEndpoint as `'[FORM_ENDPOINT]'` and the form will use mailto links.

### 5. Test Responsive Design

Check at these breakpoints:
- 360px (mobile)
- 768px (tablet)
- 1024px (small desktop)
- 1440px (large desktop)

All layouts should work without horizontal scroll.

### 6. Set Up GitHub Repository

```bash
cd /home/anand-saagee/assets

# Initialize git
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: Trivandrum Lobby website"

# Create repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/trivandrum-lobby.git
git branch -M main
git push -u origin main
```

### 7. Enable GitHub Pages

1. Go to GitHub repository Settings
2. Scroll to "Pages" section
3. Set source to "Deploy from a branch"
4. Select "main" branch, "/" (root) folder
5. Click Save
6. Site will be live at: `https://YOUR_USERNAME.github.io/trivandrum-lobby/`

### 8. Custom Domain (Optional)

1. Update DNS records with your domain registrar to point to GitHub Pages
2. Uncomment and edit `CNAME` line in `.github/workflows/pages.yml`
3. GitHub will enable HTTPS automatically

## Performance & SEO

### Lighthouse Scores (Target)
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 100

### Verify in DevTools
- Open DevTools (F12)
- Go to Lighthouse tab
- Run audit on mobile and desktop

### SEO Checklist
- [x] Unique title and meta description per page
- [x] Canonical URLs (update domain)
- [x] Open Graph tags for social sharing
- [x] Twitter card tags
- [x] JSON-LD schema (Organization, Movie, CreativeWork)
- [x] sitemap.xml (update domain)
- [x] robots.txt
- [x] Mobile responsive
- [x] Heading hierarchy
- [x] Alt text on images

## Customization

### Colors

Edit `assets/css/style.css` :root:

```css
:root {
    --red: #C1121F;           /* Primary red */
    --red-deep: #8E0E17;      /* Hover red */
    --white: #FFFFFF;
    --paper: #FAF7F5;         /* Light background */
    --ink: #1A1A1A;           /* Text color */
}
```

### Typography

Edit font families in :root:

```css
--font-display: "Georgia", "Garamond", serif;      /* Headlines */
--font-text: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;  /* Body */
```

### Spacing Scale

Edit spacing variables in :root for consistent scale across the site.

## Accessibility Features

- Skip link to main content
- Keyboard navigation (Tab, Enter, Esc, Arrow keys)
- Focus states on all interactive elements
- WCAG AA color contrast (red on white passes)
- Semantic HTML landmarks
- Labeled form fields
- Respects `prefers-reduced-motion`
- Lightbox keyboard accessible

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Banned Words Removed

The copy follows strict guidelines. No use of:
- elevate, seamless, cutting-edge, unleash, unlock
- delve, tapestry, vibrant, immersive, journey
- passion, passionate, world-class, innovative
- leverage, bespoke, dynamic, synergy, game-changer
- em dashes or en dashes (commas/periods used instead)

## Key Decisions

1. **No dependencies**: Site works by opening index.html locally, no build step
2. **Red and white only**: Clean, editorial aesthetic, film poster influenced
3. **Project-focused**: Homepage leads with work, not company narrative
4. **Honest scale**: Two completed projects + one upcoming, small but credible team
5. **Placeholders visible**: [ADD ...] makes missing content obvious
6. **GitHub Pages ready**: Auto-deploys on every push to main
7. **SEO optimized**: Schema, sitemap, social tags baked in
8. **Mobile first**: Responsive from 360px up

## Troubleshooting

**Images not loading?**
- Check file paths are relative (e.g., `assets/img/hero.jpg`)
- Ensure WebP fallback exists for older browsers
- Verify image files are in correct folders

**Form not submitting?**
- Check formEndpoint is set correctly in CONFIG
- Test in different browser (some block cross-origin requests)
- Check browser console for CORS errors

**Mobile menu not working?**
- Check JavaScript is enabled
- Look for errors in browser console (F12 > Console)
- Verify navbar-toggle button exists in HTML

**Lighthouse scores low?**
- Add images and optimize to WebP
- Check for unused CSS/JS (there is none)
- Verify fonts are loading from Google Fonts
- Check no render-blocking resources

## Support

- See README.md for detailed documentation
- Check CONTENT_CHECKLIST.md for all placeholders
- Review DESIGN_NOTES.md for design rationale
- Check browser console (F12) for JavaScript errors

---

**Ready to launch?**

1. Fill in all placeholders from CONTENT_CHECKLIST.md
2. Add images (or test without them first)
3. Test at multiple screen sizes
4. Run Lighthouse audit
5. Push to GitHub
6. Enable GitHub Pages
7. Set up custom domain (optional)

Questions or issues? Check the README.md and project pages for detailed guidance.
