# Content Checklist

Use this checklist to track all placeholders that need to be replaced with real content.

## Homepage (index.html)

- [ ] Hero poster image (replace `assets/img/hero.jpg` and `hero.webp`)
- [ ] Instagram handle (search and replace `[INSTAGRAM_HANDLE]` in all files)
- [ ] WhatsApp number (search and replace `[WHATSAPP_NUMBER]` in all files)
- [ ] Business email (replace `business@trivandrumlob by.com`)
- [ ] General enquiry email (replace `hello@trivandrumlob by.com`)

## Projects Grid (Homepage)

### Project 1
- [ ] Title (replace `[ADD TITLE]` in projects array)
- [ ] Year (update in projects array)
- [ ] Format (update in projects array)
- [ ] Description (replace `[ADD DESCRIPTION]` in projects array)
- [ ] Poster image (replace `assets/img/poster-1.jpg` and `.webp`)

### Project 2
- [ ] Title (replace `[ADD TITLE]`)
- [ ] Year (update in projects array)
- [ ] Format (update in projects array)
- [ ] Description (replace `[ADD DESCRIPTION]`)
- [ ] Poster image (replace `assets/img/poster-2.jpg` and `.webp`)

### Upcoming Project
- [ ] Title (replace `[ADD TITLE]` in upcoming section)
- [ ] Description (replace `[ADD DESCRIPTION]` in upcoming section)
- [ ] Still/teaser image (replace `assets/img/upcoming.jpg` and `.webp`)
- [ ] Project slug (rename `projects/project-upcoming.html` if needed, update links)

## Team Section (Homepage)

Team cards are in `assets/js/main.js` `teamMembers` array:

- [ ] Team member 1: name (replace `[ADD NAME]`), role, photo
- [ ] Team member 2: name, role, photo
- [ ] Team member 3: name, role, photo
- [ ] Team member 4: name, role, photo
- [ ] Photos (replace `assets/img/team-1.jpg`, etc.)

Expand or reduce array to 2-6 members as needed.

## Project Detail Pages

### Project 1 (projects/project-one.html)

- [ ] Page title (replace `[ADD TITLE]`)
- [ ] Meta description (replace in `<meta name="description">`)
- [ ] Hero poster image (replace `assets/img/poster-1.jpg`)
- [ ] Year, runtime, language, status (update meta fields)
- [ ] Synopsis (replace `[ADD SYNOPSIS]`)
- [ ] Watch platform and link (replace `[ADD PLATFORM NAME]` and `[PLATFORM_URL]`)

**Credits section:**
- [ ] Director (replace `[ADD NAME]`)
- [ ] Writer
- [ ] Producer
- [ ] Cinematographer
- [ ] Editor
- [ ] Music composer

**Gallery:**
- [ ] Still 1 (replace `assets/img/still-1.jpg` and `.webp`)
- [ ] Still 2 (replace `assets/img/still-2.jpg` and `.webp`)
- [ ] Still 3 (replace `assets/img/still-3.jpg` and `.webp`)

### Project 2 (projects/project-two.html)

- [ ] Copy `projects/project-one.html` to `projects/project-two.html`
- [ ] Repeat all steps above for project 2

### Upcoming Project (projects/project-upcoming.html)

- [ ] Copy `projects/project-one.html` to `projects/project-upcoming.html`
- [ ] Update title, description, credits
- [ ] Change status to "In Post-Production"
- [ ] Update images

## Instagram Section (Homepage)

Instagram feed is in `assets/js/main.js` `instagramFeed` array (6 images):

- [ ] Image 1 (replace `assets/instagram/img-1.jpg`, update post URL)
- [ ] Image 2 (replace `assets/instagram/img-2.jpg`, update post URL)
- [ ] Image 3 (replace `assets/instagram/img-3.jpg`, update post URL)
- [ ] Image 4 (replace `assets/instagram/img-4.jpg`, update post URL)
- [ ] Image 5 (replace `assets/instagram/img-5.jpg`, update post URL)
- [ ] Image 6 (replace `assets/instagram/img-6.jpg`, update post URL)

## Contact Form (index.html)

- [ ] Form endpoint (set `CONFIG.formEndpoint` in `assets/js/main.js`)
  - Option 1: Formspree: `https://formspree.io/f/YOUR_FORM_ID`
  - Option 2: Web3Forms: `https://api.web3forms.com/submit`
  - Option 3: Leave blank to use mailto fallback

## Branding & SEO

- [ ] Organization name: Trivandrum Lobby (appears correct throughout)
- [ ] Meta descriptions (update per page if needed)
- [ ] Social share image (replace `assets/img/og-image.jpg`)
- [ ] Favicon (replace `assets/img/favicon.ico`)
- [ ] Apple touch icon (replace `assets/img/apple-touch-icon.png`)
- [ ] CNAME file (uncomment and set custom domain in `.github/workflows/pages.yml`)

## Configuration (assets/js/main.js)

In the `CONFIG` object at the top of `main.js`:

```javascript
const CONFIG = {
    formEndpoint: '[FORM_ENDPOINT]',      // Replace with form service URL
    instagramHandle: '[INSTAGRAM_HANDLE]', // Replace with @handle
    whatsappNumber: '[WHATSAPP_NUMBER]'   // Replace with +country code
};
```

## Email Addresses

Replace in all files:

- `business@trivandrumlob by.com` - Business partnerships
- `hello@trivandrumlob by.com` - General enquiries

## Required Image Assets

Create or export these from your project files:

```
assets/img/
├── hero.webp / hero.jpg                    (800x600px)
├── poster-1.webp / poster-1.jpg            (280x420px)
├── poster-2.webp / poster-2.jpg            (280x420px)
├── upcoming.webp / upcoming.jpg            (800x600px)
├── team-1.webp / team-1.jpg                (200x200px)
├── team-2.webp / team-2.jpg                (200x200px)
├── team-3.webp / team-3.jpg                (200x200px)
├── team-4.webp / team-4.jpg                (200x200px)
├── still-1.webp / still-1.jpg              (280x200px)
├── still-2.webp / still-2.jpg              (280x200px)
├── still-3.webp / still-3.jpg              (280x200px)
├── og-image.jpg                             (1200x630px)
├── favicon.ico
└── apple-touch-icon.png                     (180x180px)

assets/instagram/
├── img-1.webp / img-1.jpg                  (200x200px)
├── img-2.webp / img-2.jpg                  (200x200px)
├── img-3.webp / img-3.jpg                  (200x200px)
├── img-4.webp / img-4.jpg                  (200x200px)
├── img-5.webp / img-5.jpg                  (200x200px)
└── img-6.webp / img-6.jpg                  (200x200px)
```

## Deployment

- [ ] Test site locally by opening `index.html`
- [ ] Test at mobile (360px), tablet (768px), and desktop (1024px, 1440px)
- [ ] Check all links and image paths
- [ ] Run Lighthouse audit (target 90+)
- [ ] Create git repository and push to GitHub
- [ ] Enable GitHub Pages in repository settings
- [ ] Test site on GitHub Pages URL
- [ ] Set up custom domain (if applicable)

## Optional Enhancements

Future additions (not in first release):

- [ ] Video trailers / teasers (YouTube/Vimeo embeds)
- [ ] Additional team members
- [ ] Press and awards (when applicable)
- [ ] Blog or news section
- [ ] Advanced analytics
- [ ] Client testimonials
- [ ] Investor information

## Notes

- All placeholders are marked with `[ADD ...]` or `[...]` for easy search
- No real awards, festival selections, or testimonials should be invented
- Email addresses and contact numbers are placeholders
- Images can be added incrementally; site works without them
- Form endpoint must be set manually for contact form to work
