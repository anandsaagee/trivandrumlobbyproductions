# Instagram Image Download Guide
## Trivandrum Lobby Productions (@trivandrumlobbyproductions)

**Last Updated:** October 17, 2026

## 📋 Instagram Posts to Download (Priority Order)

Based on analysis of your Instagram page, here are the posts to download:

### Priority 1: Key Posts (Must Download)

1. **September 29, 2026** - Production poster with cast/crew outdoors
   - Use as: Hero image or project poster
   - Save as: `hero.jpg` or `poster-production-3.jpg`

2. **September 18, 2026** - Production No. 3 Announcement Poster
   - Cartoon style poster with full credits
   - Shows: "TRIVANDRUM LOBBY PRODUCTIONS PRODUCTION NO3"
   - Credits: "WRITTEN & DIRECTED BY VISHNU JOHN AKHIL NIRANJAN"
   - Use as: Official Production No. 3 poster
   - Save as: `upcoming.jpg` (for the upcoming project section)

3. **August 26, 2026** - Behind-the-scenes with camera & tripod
   - Shows production crew working
   - Use as: Instagram feed or BTS gallery image
   - Save as: `instagram/img-1.jpg`

4. **August 25, 2026** - Happy Onam Video/Image
   - Palm trees with "TRIVANDRUM LOBBY HAPPY ONAM" text
   - Use as: Instagram feed image
   - Save as: `instagram/img-2.jpg`

5. **July 5, 2026** - Photo post
   - Use as: Instagram feed image
   - Save as: `instagram/img-3.jpg`

6. **May 11, 2026** - Photo post
   - Use as: Instagram feed image
   - Save as: `instagram/img-4.jpg`

### Priority 2: Additional Posts

7. **April 27, 2026** - Carousel post
   - Save as: `instagram/img-5.jpg`

8. **March 24, 2026** - Photo post
   - Save as: `instagram/img-6.jpg`

---

## 📥 How to Download Instagram Images

### Method 1: Direct Download via Browser (Recommended)

1. **Open Instagram on Desktop Browser**
   - Go to: https://www.instagram.com/trivandrumlobbyproductions/
   - Make sure you're logged in

2. **For Each Post:**
   ```
   a. Click on the post to open it full-screen
   b. Right-click on the image
   c. Select "Save image as..." or "Download image"
   d. Save to /home/anand-saagee/assets/assets/img/ or assets/instagram/
   ```

3. **For Videos (like Onam post):**
   ```
   a. Click on the video post
   b. Right-click → "Inspect Element" (F12)
   c. In the HTML, find <video> tag
   d. Right-click the video URL → "Open in new tab"
   e. Screenshot the video frame you want
   ```

### Method 2: Using Browser DevTools

```bash
1. Open Instagram post
2. Press F12 (Developer Tools)
3. Go to Network tab
4. Refresh page (Ctrl+R or Cmd+R)
5. Filter by "img" or "media"
6. Find the highest resolution image URL
7. Right-click → "Open in new tab"
8. Right-click image → "Save as"
```

### Method 3: Third-Party Tools (Use Responsibly)

**Online Tools:**
- https://instadownloader.com
- https://snapinsta.app
- https://downloadgram.com

**Steps:**
```
1. Go to Instagram post
2. Copy post URL (from browser address bar)
3. Paste URL into download tool
4. Click "Download"
5. Save to appropriate folder
```

⚠️ **Important:** Only download your own content. Respect Instagram's Terms of Service.

---

## 📁 Where to Save Images

### Project Posters & Hero Images
```
/home/anand-saagee/assets/assets/img/
├── hero.jpg                    (Sept 29 post - main hero image)
├── upcoming.jpg                (Sept 18 post - Production No. 3 poster)
├── poster-1.jpg               (If you have other projects)
├── poster-2.jpg
└── og-image.jpg               (Social media share image)
```

### Instagram Feed Images
```
/home/anand-saagee/assets/assets/instagram/
├── img-1.jpg    (Aug 26 - BTS camera)
├── img-2.jpg    (Aug 25 - Onam greeting)
├── img-3.jpg    (July 5 post)
├── img-4.jpg    (May 11 post)
├── img-5.jpg    (April 27 post)
└── img-6.jpg    (March 24 post)
```

---

## 🎯 Image Specifications

### For Hero/Posters
- **Dimensions:** 800x600px minimum (or original size)
- **Format:** JPG (convert to WebP later for optimization)
- **Quality:** High (90-100%)

### For Instagram Feed
- **Dimensions:** 200x200px (square, will be auto-cropped by CSS)
- **Format:** JPG
- **Quality:** 80-85%

---

## 🔗 Update Instagram Post URLs

After downloading, you need to update the post URLs in the website code.

**File:** `/home/anand-saagee/assets/assets/js/main.js`

Find the `instagramFeed` array and update:

```javascript
const instagramFeed = [
    { url: 'https://instagram.com/p/POST_ID_HERE/', image: 'assets/instagram/img-1.webp', fallback: 'assets/instagram/img-1.jpg' },
    { url: 'https://instagram.com/p/POST_ID_HERE/', image: 'assets/instagram/img-2.webp', fallback: 'assets/instagram/img-2.jpg' },
    // ... continue for all 6 images
];
```

### How to Get Instagram Post ID:

1. Open the post on Instagram
2. Look at the URL: `https://www.instagram.com/p/ABCD1234xyz/`
3. The post ID is: `ABCD1234xyz`
4. Copy and paste into the code

---

## 🖼️ Image Optimization (After Download)

### Convert to WebP Format (Optional but Recommended)

**If you have ImageMagick installed:**
```bash
cd /home/anand-saagee/assets/assets/img
for file in *.jpg; do 
    convert "$file" -quality 80 "${file%.jpg}.webp"
done

cd ../instagram
for file in *.jpg; do 
    convert "$file" -quality 80 "${file%.jpg}.webp"
done
```

**Or using the provided script:**
```bash
cd /home/anand-saagee/assets
npm install sharp  # One-time only
node scripts/optimize-images.js
```

### Resize Images (If Needed)

```bash
# Resize hero/poster images to 800x600px
convert hero.jpg -resize 800x600^ -gravity center -extent 800x600 hero.jpg

# Resize Instagram images to 200x200px
convert img-1.jpg -resize 200x200^ -gravity center -extent 200x200 img-1.jpg
```

---

## ✅ Verification Checklist

After downloading and adding images:

### 1. Check Files Exist
```bash
ls -lh /home/anand-saagee/assets/assets/img/
ls -lh /home/anand-saagee/assets/assets/instagram/
```

### 2. Test Website Locally
```bash
cd /home/anand-saagee/assets
python -m http.server 8000
# Visit: http://localhost:8000
```

### 3. Verify Images Display
- [ ] Hero image loads on homepage
- [ ] Production No. 3 poster loads in "In Post-Production" section
- [ ] Instagram feed shows all 6 images
- [ ] Images are properly cropped/sized
- [ ] No broken image icons

### 4. Check Responsive Design
- [ ] Images look good on mobile (F12 → Device toolbar → iPhone)
- [ ] Images look good on tablet (iPad)
- [ ] Images look good on desktop (1440px)

### 5. Commit and Push
```bash
cd /home/anand-saagee/assets
git add assets/img/* assets/instagram/*
git commit -m "Add official Instagram images and Production No. 3 poster"
git push origin main
```

---

## 🎬 Quick Summary

**What You've Analyzed:**
- 12 Instagram posts from Sept 2026 to Dec 2025
- Key project: "Production No. 3" by Vishnu John & Akhil Niranjan
- Multiple behind-the-scenes and promotional content

**What to Download:**
1. Sept 18 poster → Save as `upcoming.jpg`
2. Sept 29 image → Save as `hero.jpg`
3. 6 recent posts → Save as `img-1.jpg` through `img-6.jpg`

**Next Steps:**
1. Download images using methods above
2. Save to correct folders
3. Update Instagram post URLs in `main.js`
4. Test locally
5. Commit and push to GitHub
6. GitHub Pages will auto-deploy in 1-2 minutes

---

## 🆘 Need Help?

If you encounter issues:
1. Make sure Instagram images are public
2. Try different browsers (Chrome, Firefox)
3. Clear browser cache if images don't load
4. Check file permissions: `chmod 644 *.jpg`

**Questions?** Just ask and I'll help troubleshoot!
