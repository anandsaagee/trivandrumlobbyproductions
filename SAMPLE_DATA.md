# Trivandrum Lobby - Sample Website Demo

**Status:** Ready to test locally  
**Sample Data Loaded:** Yes  
**Next Step:** Add images and posters when ready

## What's Been Added (Sample Data)

### Projects (With Real Sample Titles)
1. **Monsoon Whispers** (2024) - Feature Film
   - "A coming-of-age story set in the backwaters of Kerala during monsoon season."
2. **Urban Echoes** (2023) - Web Series
   - "Five interconnected stories exploring life in modern Thiruvananthapuram."
3. **Inheritance** (2025) - Feature Documentary (In Post-Production)
   - "A documentary exploring the cultural heritage and traditions of Kerala filmmaking."

### Team (Sample Names)
- Arjun Nair - Director
- Priya Menon - Producer
- Rohan Kumar - Cinematographer
- Anjali Singh - Editor

### Contact Information (Sample)
- Email: hello@trivandrumlobby.com
- Instagram: @trivandrumlobby
- WhatsApp: +91 98765 43210

### Homepage Copy
- Hero tagline: "Creating compelling stories for film and digital platforms from the heart of Kerala."
- Team intro: Real, honest description of a small team

## How to Test Locally

```bash
# Option 1: Open directly in browser
open /home/anand-saagee/assets/index.html

# Option 2: Use local server (Python)
cd /home/anand-saagee/assets
python -m http.server 8000
# Visit: http://localhost:8000

# Option 3: Use Node.js server
npx http-server /home/anand-saagee/assets
```

Then:
1. Click around the homepage
2. Click project cards - they link to detail pages
3. Resize browser to test mobile (360px, 768px)
4. Test navigation menu on mobile
5. Try the lightbox gallery on project pages
6. Test the contact form

## What's Already Working

✓ Homepage displays with sample project data  
✓ Project cards show sample titles and descriptions  
✓ Project detail pages have sample content  
✓ Team section displays sample team members  
✓ Navigation works (mobile menu + desktop)  
✓ Contact form ready (set endpoint when needed)  
✓ Instagram follow button linked to @trivandrumlobby  
✓ WhatsApp chat button linked to sample number  
✓ Responsive design (360px to 1440px+)  
✓ All links functional  

## What Still Needs Adding (When Ready)

**Images:**
- Hero poster (800x600px)
- Project 1 poster (280x420px)
- Project 2 poster (280x420px)
- Upcoming project still (800x600px)
- 4 team photos (200x200px each)
- 3 gallery stills per project
- 6 Instagram feed images

**Then Replace:**
- Project titles with real titles
- Project descriptions with real synopses
- Team names with real team members
- Contact email addresses
- Instagram handle
- WhatsApp number

## File Locations for Easy Editing

```
/home/anand-saagee/assets/
├── index.html                 ← Edit homepage text here
├── assets/js/main.js         ← Edit CONFIG and data arrays here
├── projects/
│   ├── project-one.html      ← Edit Project 1 details
│   ├── project-two.html      ← Edit Project 2 details
│   └── project-upcoming.html ← Edit Upcoming project
├── assets/css/style.css      ← Edit colors/design here
└── assets/img/               ← Add images here
```

## Sample Data to Replace

When you have real content, replace these:

**In assets/js/main.js:**
- Project titles, years, formats, descriptions
- Team names and roles
- Instagram handle
- WhatsApp number

**In projects/*.html:**
- Project synopsis
- Project credits (director, writer, producer, etc.)
- Runtime, language
- Links to where to watch

**Throughout all files:**
- hello@trivandrumlobby.com → Your business email
- info@trivandrumlobby.com → Your general inquiry email
- trivandrumlobby → Your Instagram handle
- 919876543210 → Your WhatsApp number

## Quick Navigation

**Homepage sections:**
- Hero (top)
- Our Work (project grid)
- In Post-Production (upcoming project)
- Team
- Follow Us (Instagram)
- Get in Touch (contact form)
- Footer

**Project pages:**
- Project title and details
- Credits section
- Gallery with lightbox
- Work with us CTA
- Back to projects link

## Testing Checklist

- [ ] Open homepage - loads correctly
- [ ] Click "View our work" - scrolls to projects
- [ ] Click project card - opens project page
- [ ] Resize to mobile (< 768px) - menu becomes hamburger
- [ ] Click hamburger - menu opens/closes
- [ ] Click gallery images - lightbox opens
- [ ] Press Esc - lightbox closes
- [ ] Click contact buttons - email/WhatsApp works
- [ ] Test at different screen sizes (360, 768, 1024, 1440px)

## Browser DevTools Tips

**Check responsiveness:**
- F12 > Device toolbar (Ctrl+Shift+M)
- Test at: iPhone 12, iPad, Desktop

**Check for errors:**
- F12 > Console - should be clean
- F12 > Network - check for 404s

**Performance:**
- F12 > Lighthouse - run audit

## Next Steps When Ready

1. **Add real project posters** (replace placeholder images)
2. **Update project details** (edit projects/*.html)
3. **Add team photos** (replace team-*.jpg)
4. **Update contact info** (real email, Instagram, WhatsApp)
5. **Test everything** at different breakpoints
6. **Deploy to GitHub Pages** (when ready)

## Current Sample Data

All placeholder text has been replaced with realistic sample content that matches a real Kerala-based production house. You can now see what the site looks like with actual data.

**Images are still placeholders** - that's intentional. When you have real posters and photos, just replace the image files. No code changes needed.

---

**Ready to improve?**

The site is now in a good state for local testing and iteration. Add images when ready, or keep testing with the current layout first.

You can edit any text directly in the HTML/JS files and refresh the browser to see changes instantly.

