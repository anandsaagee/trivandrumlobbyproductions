# Trivandrum Lobby Website

Official website for Trivandrum Lobby, a film and web series production house based in Thiruvananthapuram, Kerala, India.

## Quick Start

### View Locally
Open `index.html` in your browser or use a local static server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server
```

Then visit `http://localhost:8000` in your browser.

### Deploy to GitHub Pages

1. Initialize git (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Create a new repository on GitHub and add the remote:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/trivandrum-lobby.git
   git branch -M main
   git push -u origin main
   ```

3. Enable GitHub Pages:
   - Go to repository Settings > Pages
   - Set source to "Deploy from a branch"
   - Select "main" branch and "/" (root) folder
   - Click Save

The site will be available at `https://YOUR_USERNAME.github.io/trivandrum-lobby/`

### Custom Domain

1. Create a CNAME file with your domain (currently commented in `.github/workflows/pages.yml`)
2. Update DNS records with your registrar to point to GitHub Pages
3. Enable HTTPS in repository settings

## Project Structure

```
trivandrum-lobby/
├── index.html                 # Homepage
├── 404.html                   # 404 error page
├── sitemap.xml               # SEO sitemap
├── robots.txt                # SEO robots file
├── CNAME                      # Custom domain (placeholder)
├── README.md                 # This file
├── CONTENT_CHECKLIST.md      # Content placeholders
├── DESIGN_NOTES.md           # Design reference
├── projects/
│   ├── project-one.html      # First completed project
│   ├── project-two.html      # Second completed project
│   └── project-upcoming.html # In post-production project
├── assets/
│   ├── css/
│   │   └── style.css         # Main stylesheet
│   ├── js/
│   │   ├── main.js           # Homepage and config
│   │   └── project.js        # Project page lightbox
│   ├── img/
│   │   ├── favicon.ico
│   │   ├── apple-touch-icon.png
│   │   ├── hero.webp / hero.jpg
│   │   ├── poster-1.webp / poster-1.jpg
│   │   ├── poster-2.webp / poster-2.jpg
│   │   ├── upcoming.webp / upcoming.jpg
│   │   ├── team-1.webp / team-1.jpg
│   │   ├── team-2.webp / team-2.jpg
│   │   ├── team-3.webp / team-3.jpg
│   │   ├── team-4.webp / team-4.jpg
│   │   ├── still-1.webp / still-1.jpg
│   │   ├── still-2.webp / still-2.jpg
│   │   └── still-3.webp / still-3.jpg
│   ├── instagram/
│   │   ├── img-1.webp / img-1.jpg
│   │   ├── img-2.webp / img-2.jpg
│   │   ├── img-3.webp / img-3.jpg
│   │   ├── img-4.webp / img-4.jpg
│   │   ├── img-5.webp / img-5.jpg
│   │   └── img-6.webp / img-6.jpg
│   └── video/
│       └── [video files for trailers]
└── .github/
    └── workflows/
        └── pages.yml         # GitHub Pages deployment
```

## Editing Content

### Update Configuration
Edit the `CONFIG` object in `assets/js/main.js`:

```javascript
const CONFIG = {
    formEndpoint: 'https://formspree.io/f/YOUR_FORM_ID', // Set form endpoint
    instagramHandle: 'your_handle',
    whatsappNumber: '+919876543210'
};
```

### Form Endpoint

The contact form supports three submission methods:

1. **Formspree** (recommended):
   - Go to formspree.io
   - Create a form and get your form ID
   - Add endpoint to CONFIG: `https://formspree.io/f/YOUR_FORM_ID`

2. **Web3Forms**:
   - Go to web3forms.com
   - Create a form and get your access key
   - Add endpoint to CONFIG: `https://api.web3forms.com/submit`

3. **Mailto fallback**:
   - If no endpoint is set, form submits via email client

### Update Homepage Text

Edit text directly in `index.html`. Key sections:

- `<h1>Trivandrum Lobby</h1>` - Company name
- `.hero-tagline` - One-line description
- Update project data in `assets/js/main.js` `projects` array
- Update team data in `assets/js/main.js` `teamMembers` array
- Update Instagram feed in `assets/js/main.js` `instagramFeed` array

### Add a New Project

1. Copy `projects/project-one.html` to `projects/PROJECT_SLUG.html`
2. Update title, description, credits, and image paths
3. Add new entry to `projects` array in `assets/js/main.js`:
   ```javascript
   {
       id: 4,
       title: 'New Project Title',
       year: 2026,
       format: 'Web Series',
       slug: 'new-project-slug',
       description: 'Brief description',
       poster: 'assets/img/poster-4.webp',
       posterFallback: 'assets/img/poster-4.jpg'
   }
   ```

## Image Guidelines

### Image Formats
- Primary: WebP format for better compression
- Fallback: JPEG for browser compatibility
- Sizes: Responsive images with appropriate srcset

### Required Images
- **Hero**: 800x600px minimum (film poster or still)
- **Project posters**: 280x420px (2:3 aspect ratio)
- **Team photos**: 200x200px (square)
- **Still gallery**: 280x200px minimum
- **Instagram feed**: 200x200px (square)
- **OG image**: 1200x630px (social sharing)

### Image Optimization

Convert and resize images using sharp (Node.js):

```bash
npm install sharp
node scripts/optimize-images.js
```

Or manually with cwebp:

```bash
cwebp input.jpg -o output.webp -q 80
```

## Performance & SEO

### Lighthouse Targets
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 100

### Check Performance Locally
Use Chrome DevTools Lighthouse tab (F12 > Lighthouse)

### SEO Checklist
- [x] Unique title and meta description per page
- [x] Canonical URLs
- [x] Open Graph and Twitter card tags
- [x] JSON-LD schema (Organization, Movie)
- [x] sitemap.xml
- [x] robots.txt
- [x] Heading hierarchy (h1 > h2 > h3)
- [x] Alt text on all images
- [x] Mobile responsive

## Accessibility

- WCAG AA contrast compliance (red #C1121F on white passes)
- Skip link for keyboard navigation
- Keyboard operable lightbox (Esc to close, arrow keys to navigate)
- Semantic HTML landmarks
- Labeled form fields
- Respects prefers-reduced-motion

Test with keyboard:
- Tab through all interactive elements
- Enter/Space to activate buttons
- Esc to close dialogs

## Design System

### Colors
- Red (primary): `#C1121F`
- Red (deep): `#8E0E17`
- White: `#FFFFFF`
- Paper (background): `#FAF7F5`
- Ink (text): `#1A1A1A`

### Typography
- Display: Georgia (serif)
- Text: System fonts (San Francisco, Segoe UI, etc.)

### Spacing Scale
- xs: 0.5rem
- sm: 1rem
- md: 1.5rem
- lg: 2rem
- xl: 3rem
- 2xl: 4rem
- 3xl: 6rem

### Transitions
All interactive elements use `0.2s ease-out` by default.

## Development Notes

- No build step or npm dependencies required
- JavaScript is under 15 KB (main.js + project.js)
- CSS uses CSS custom properties for theming
- Images are lazy loaded below the fold
- Forms fall back to mailto if endpoint is not configured
- Mobile-first responsive design

## GitHub Actions

The site auto-deploys to GitHub Pages on push to main branch via `.github/workflows/pages.yml`. No additional setup needed once GitHub Pages is enabled.

## Support & Questions

For questions or issues:
- Check CONTENT_CHECKLIST.md for placeholders to fill
- Review DESIGN_NOTES.md for design decisions
- Inspect browser console for JavaScript errors
- Test responsive design at 360px, 768px, 1024px, and 1440px widths

## License

Copyright 2026 Trivandrum Lobby. All rights reserved.
