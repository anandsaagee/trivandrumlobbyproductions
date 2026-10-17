# Quick Start Guide - Trivandrum Lobby Website

**Your site is ready. Here's how to use it.**

## Test It Right Now

```bash
open /home/anand-saagee/assets/index.html
```

The site loads with sample data. Everything is interactive.

## What You See

- Homepage with sample project titles: "Monsoon Whispers", "Urban Echoes", "Inheritance"
- Sample team: Arjun Nair, Priya Menon, Rohan Kumar, Anjali Singh
- Contact info (sample): hello@trivandrumlobby.com
- Instagram: @trivandrumlobby
- WhatsApp: +91 98765 43210

All buttons work. All links work. Navigation works on mobile too.

## How to Improve It

### 1. Change Project Names and Descriptions
**File:** `/home/anand-saagee/assets/assets/js/main.js`

Find this section and edit:
```javascript
const projects = [
    {
        id: 1,
        title: 'Monsoon Whispers',  // ← Change this
        year: 2024,
        format: 'Feature Film',     // ← And this
        description: 'A coming-of-age story...'  // ← And this
    },
    ...
]
```

Refresh browser (F5) - changes appear instantly.

### 2. Change Team Names
**File:** Same file, find `teamMembers`:
```javascript
const teamMembers = [
    {
        name: 'Arjun Nair',  // ← Change names
        role: 'Director',    // ← Change roles
    },
    ...
]
```

### 3. Update Contact Information
**File:** Same file, find `CONFIG`:
```javascript
const CONFIG = {
    instagramHandle: 'trivandrumlobby',  // ← Change this
    whatsappNumber: '+91 98765 43210'    // ← Change this
};
```

**Also edit these in index.html:**
- Replace `hello@trivandrumlobby.com` with your email
- Replace `info@trivandrumlobby.com` with your email

### 4. Add Images (When Ready)

Save images to these folders:
```
/home/anand-saagee/assets/assets/img/
  poster-1.jpg / poster-1.webp     (280x420px)
  poster-2.jpg / poster-2.webp     (280x420px)
  upcoming.jpg / upcoming.webp     (800x600px)
  hero.jpg / hero.webp             (800x600px)
  team-1.jpg through team-4.jpg    (200x200px each)
  still-1.jpg through still-3.jpg  (280x200px each)

/home/anand-saagee/assets/assets/instagram/
  img-1.jpg through img-6.jpg      (200x200px each)
```

No code changes needed. Images will load automatically.

### 5. Edit Project Details
**File:** `/home/anand-saagee/assets/projects/project-one.html`

Find and edit:
- `<h1>[ADD TITLE]</h1>` → Your project title
- Synopsis section → Your description
- Credits → Director, writer, producer, etc.
- Links → Where to watch

Repeat for `project-two.html` and `project-upcoming.html`

## Three Ways to Work

### Way 1: Simple Refresh (Easiest)
1. Edit a file in your editor
2. Save (Cmd+S or Ctrl+S)
3. Refresh browser (F5)
4. See changes instantly

### Way 2: Live Server (Better)
```bash
cd /home/anand-saagee/assets
python -m http.server 8000
```
Visit `http://localhost:8000` - changes appear on save automatically in some editors.

### Way 3: Code Editor with Preview
- Open `/home/anand-saagee/assets` in VS Code
- Split view: code on left, browser on right
- Edit → Save → F5 in browser → See changes

## File Map (What to Edit)

| Change | File | Section |
|--------|------|---------|
| Project titles/descriptions | assets/js/main.js | `projects` array |
| Team names/roles | assets/js/main.js | `teamMembers` array |
| Instagram handle | assets/js/main.js | `CONFIG` object |
| WhatsApp number | assets/js/main.js | `CONFIG` object |
| Email addresses | index.html + projects/*.html | Search and replace |
| Project details | projects/project-*.html | Entire file |
| Colors/design | assets/css/style.css | `:root` section |
| Homepage text | index.html | Hero section |

## Key Shortcuts

**Refresh browser:** F5 or Cmd+R  
**Open DevTools:** F12 or Cmd+Option+I  
**Mobile view:** F12 → Device toolbar → Cmd+Shift+M  
**Find/Replace:** Cmd+F (browser) or Cmd+H (editor)  

## Testing Tips

1. **Test on mobile:** F12 → Device toolbar → pick iPhone or iPad
2. **Check links:** Click everything, make sure nothing breaks
3. **Test form:** F12 → Network tab → Fill form → Submit → Check request
4. **Check images:** F12 → Network tab → Load page → See if any 404s

## Common Questions

**Q: I edited a file but changes don't appear**  
A: Make sure to save (Cmd+S) and refresh browser (F5)

**Q: How do I add more projects?**  
A: Copy `projects/project-one.html`, edit it, add data to `assets/js/main.js` array

**Q: Images aren't showing**  
A: Check they're in the right folder and named correctly (poster-1.jpg, etc.)

**Q: How do I change the red color?**  
A: Edit `assets/css/style.css` line 9: `--red: #C1121F;`

**Q: Can I use this offline?**  
A: Yes, just open index.html directly. No server needed.

## When Ready to Deploy

```bash
cd /home/anand-saagee/assets
git init
git add .
git commit -m "Trivandrum Lobby website"
git remote add origin https://github.com/anandsaagee/trivandrumlobbyproductions.git
git branch -M main
git push -u origin main
```

Then on GitHub: Settings > Pages > Deploy from main > Save

Live at: `https://anandsaagee.github.io/trivandrumlobbyproductions/`

## Structure (Don't Change)

```
index.html                    ← Main page
projects/project-one.html     ← Don't rename these
projects/project-two.html
projects/project-upcoming.html
assets/css/style.css          ← Don't move
assets/js/main.js             ← Don't move
assets/img/                   ← Put images here
.github/workflows/pages.yml   ← For GitHub Pages
```

## You're Set

The site is production-ready. You can now:
- Edit text and see changes instantly
- Add images when ready
- Deploy to GitHub Pages anytime

Start by changing the project titles to your real projects. Then add images. That's it.

**Questions?** Check the other docs (README.md, SETUP.md) for more details.

**Ready to improve?** Start editing! Changes refresh in seconds.
