# Instagram Integration Guide - Trivandrum Lobby Productions

**Official Instagram:** [@trivandrumlobbyproductions](https://www.instagram.com/trivandrumlobbyproductions/)

## ✅ What's Already Updated

- Instagram handle changed from `@trivandrumlobby` to `@trivandrumlobbyproductions`
- All links in the website now point to the official Instagram page
- Instagram follow button is correctly linked

## 📸 Instagram Posts to Download

Based on the official page (as of October 17, 2026), here are the posts to download:

### Recent Posts (12 visible posts)

1. **September 29, 2026** - Production poster with people outdoors
2. **September 18, 2026** - "Production No. 3" cartoon poster with cast/crew credits
3. **August 26, 2026** - Behind-the-scenes with camera and tripod
4. **August 25, 2026** - Happy Onam greeting (video/image)
5. **July 5, 2026** - Photo post
6. **May 11, 2026** - Photo post
7. **April 27, 2026** - Carousel (multiple images)
8. **March 24, 2026** - Photo post
9. **March 18, 2026** - Photo post
10. **January 21, 2026** - Photo post
11. **December 30, 2025** - Photo post
12. **December 25, 2025** - Video/reel

## 📥 How to Download Instagram Images

### Method 1: Screenshot (Simplest)
1. Visit https://www.instagram.com/trivandrumlobbyproductions/
2. Click on each post to open it
3. Take a screenshot (Cmd+Shift+4 on Mac, Win+Shift+S on Windows)
4. Crop to just the image
5. Save as JPG

### Method 2: Browser Developer Tools
1. Open Instagram post in browser
2. Right-click on image → "Inspect" or press F12
3. Find the `<img>` tag in the HTML
4. Right-click the image URL in the `src` attribute
5. Open in new tab and save

### Method 3: Instagram Download Tools (Third-party)
Use websites like:
- instadp.com
- instadownloader.com
- snapinsta.app

**Note:** Always respect Instagram's terms of service. Only download your own content.

## 🎯 Where to Save Downloaded Images

Save the 6 most recent/best images to:

```
/home/anand-saagee/assets/assets/instagram/
├── img-1.jpg  (Most recent - Sept 29, 2026)
├── img-2.jpg  (Sept 18, 2026 - Production No. 3 poster)
├── img-3.jpg  (Aug 26, 2026 - BTS camera shot)
├── img-4.jpg  (Aug 25, 2026 - Onam greeting)
├── img-5.jpg  (July 5, 2026)
├── img-6.jpg  (May 11, 2026)
```

**Image specifications:**
- Size: 200x200px (square, for grid display)
- Format: JPG or WebP
- Quality: 80-90%

## 🔗 Update Instagram Post URLs

After downloading, edit `/home/anand-saagee/assets/assets/js/main.js`:

Find the `instagramFeed` array and update with real Instagram post URLs:

```javascript
const instagramFeed = [
    { url: 'https://instagram.com/p/POST_ID_1/', image: 'assets/instagram/img-1.webp', fallback: 'assets/instagram/img-1.jpg' },
    { url: 'https://instagram.com/p/POST_ID_2/', image: 'assets/instagram/img-2.webp', fallback: 'assets/instagram/img-2.jpg' },
    // ... etc
];
```

To get the post ID:
1. Click on an Instagram post
2. Look at the URL: `https://www.instagram.com/p/ABCD1234/`
3. Copy `ABCD1234` - that's the post ID

## 🖼️ Image Optimization

After downloading, optimize images:

```bash
# Install sharp (if not already)
npm install sharp

# Run optimization script
node scripts/optimize-images.js
```

Or manually with ImageMagick/cwebp:

```bash
# Resize to 200x200px
convert img-1.jpg -resize 200x200^ -gravity center -extent 200x200 img-1.jpg

# Convert to WebP
cwebp img-1.jpg -o img-1.webp -q 80
```

## 📝 Current Website Status

### ✅ Already Done
- Instagram handle updated to `@trivandrumlobbyproductions`
- All Instagram links corrected throughout the site
- Instagram follow button works
- Instagram grid structure ready (shows 6 images)

### 🔲 To Do
- Download 6 Instagram post images
- Save to `assets/instagram/` folder
- Update post URLs in `assets/js/main.js` with real Instagram post IDs
- Optimize images to WebP format

## 🎬 Production Information from Instagram

Based on the Instagram page, I can see:

**Production No. 3** (Current/Recent project)
- Announced: September 18, 2026
- Written/Directed by: Vishnu John, Akhil Niranjan
- Poster style: Cartoon/illustrated

This might be the project to feature as your upcoming/in post-production project on the website.

## 🔄 Updating the Website Content

If you want to update the project information based on Instagram content:

**Edit:** `/home/anand-saagee/assets/assets/js/main.js`

Replace the `upcomingProject` section with:

```javascript
const upcomingProject = {
    id: 3,
    title: 'Production No. 3',
    year: 2026,
    format: 'Feature Film', // or Web Series, Documentary, etc.
    slug: 'project-upcoming',
    description: 'Written and directed by Vishnu John and Akhil Niranjan.',
    poster: 'assets/img/upcoming.webp',
    posterFallback: 'assets/img/upcoming.jpg'
};
```

## 📌 Quick Checklist

- [x] Instagram handle updated to `@trivandrumlobbyproductions`
- [x] All Instagram links corrected in website
- [ ] Download 6 Instagram post images
- [ ] Save images to `assets/instagram/` folder
- [ ] Rename images as img-1.jpg through img-6.jpg
- [ ] Update Instagram post URLs in `assets/js/main.js`
- [ ] Optimize images to WebP format (optional)
- [ ] Update project information if needed

## 🚀 After Adding Images

1. Test locally: `open /home/anand-saagee/assets/index.html`
2. Scroll to "Follow Us" section
3. Check that Instagram images load correctly
4. Click on images to verify they link to Instagram posts
5. Test responsive design (F12 → Device toolbar)

---

**Note:** Due to Instagram's terms of service and API restrictions, I cannot automatically download the images. You'll need to download them manually following the methods above.

Once you add the images, the website will be complete with your official Instagram content!
