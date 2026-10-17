#!/bin/bash
# Quick Reference Commands for Trivandrum Lobby Website

# LOCAL TESTING
# =============

# Option 1: Open directly in browser (macOS)
open /home/anand-saagee/assets/index.html

# Option 2: Python 3 local server
cd /home/anand-saagee/assets
python -m http.server 8000
# Then visit http://localhost:8000

# Option 3: Node.js http-server
npx http-server /home/anand-saagee/assets
# Then visit http://localhost:8080

# CONTENT EDITING
# ===============

# Search for all placeholders (to fill in)
grep -r "\[ADD" /home/anand-saagee/assets --include="*.html" --include="*.js" --include="*.md"

# Search for configuration values
grep -n "FORM_ENDPOINT\|INSTAGRAM_HANDLE\|WHATSAPP_NUMBER" /home/anand-saagee/assets/assets/js/main.js

# Find all email addresses to replace
grep -r "trivandrumlob by.com" /home/anand-saagee/assets --include="*.html" --include="*.js"

# IMAGE OPTIMIZATION
# ==================

# Install sharp (for image conversion to WebP)
cd /home/anand-saagee/assets
npm install sharp

# Run optimization script
node scripts/optimize-images.js

# Manual WebP conversion with cwebp (if installed)
cwebp hero.jpg -o hero.webp -q 80

# GIT SETUP
# =========

# Initialize repository
cd /home/anand-saagee/assets
git init

# Add all files
git add .

# Initial commit
git commit -m "Initial commit: Trivandrum Lobby website"

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/trivandrum-lobby.git

# Set main branch and push
git branch -M main
git push -u origin main

# LIGHTHOUSE TESTING
# ==================

# Run Lighthouse from command line (requires Chrome/Chromium)
# In Chrome DevTools: F12 > Lighthouse > Generate report

# Or use CLI (requires npm install -g lighthouse)
lighthouse http://localhost:8000 --view
lighthouse http://localhost:8000/projects/project-one.html --view

# RESPONSIVE TESTING
# ==================

# Test breakpoints in browser DevTools:
# F12 > Device toolbar (Ctrl+Shift+M)
# Presets: iPhone 12 (390x844), iPad (768x1024), Desktop (1440x900)

# Or test manually at:
# 360px (mobile)
# 768px (tablet)
# 1024px (small desktop)
# 1440px (large desktop)

# DEPLOYMENT
# ==========

# GitHub Pages setup (one-time):
# 1. Go to repository Settings > Pages
# 2. Source: Deploy from a branch
# 3. Select "main" branch, "/" folder
# 4. Save

# Auto-deploy on push
git push origin main

# FORM ENDPOINT SETUP
# ===================

# Formspree (recommended):
# 1. Visit https://formspree.io
# 2. Create form, get ID (e.g., f_abc123xyz)
# 3. In assets/js/main.js line 6:
#    formEndpoint: 'https://formspree.io/f_abc123xyz'

# Web3Forms:
# 1. Visit https://web3forms.com
# 2. Get access key
# 3. In assets/js/main.js line 6:
#    formEndpoint: 'https://api.web3forms.com/submit'

# VERIFICATION CHECKLIST
# ======================

# Check for em dashes and en dashes (should be none)
grep -r "[—–]" /home/anand-saagee/assets --include="*.html" --include="*.css" --include="*.js" --include="*.md"

# Check for banned words
grep -riE "elevate|seamless|cutting-edge|unleash|unlock|delve|tapestry|vibrant|immersive|journey|passion|world-class|innovative|leverage|bespoke|dynamic|synergy|game-changer" /home/anand-saagee/assets --include="*.html" --include="*.md"

# Validate HTML
# Install: npm install -g html-validator-cli
html-validator /home/anand-saagee/assets/index.html

# Check links
# Install: npm install -g broken-link-checker
blc http://localhost:8000 -r

# FILE OPERATIONS
# ===============

# Count total lines of code
find /home/anand-saagee/assets -name "*.html" -o -name "*.css" -o -name "*.js" | xargs wc -l

# List all files with sizes
du -sh /home/anand-saagee/assets/*

# Archive site for backup
tar -czf trivandrum-lobby-backup.tar.gz /home/anand-saagee/assets

# TROUBLESHOOTING
# ===============

# Check browser console for errors (DevTools F12 > Console)

# Test form submission locally (watch network tab)
# F12 > Network > Fill form > Submit > Check POST request

# Test images loading (check Network tab for 404s)

# Test responsive menu
# Resize browser or use device toolbar
# Check hamburger menu opens/closes

# Clear browser cache
# Ctrl+Shift+Delete (Windows/Linux)
# Cmd+Shift+Delete (macOS)

# USEFUL LINKS
# ============

# Design System Variables: assets/css/style.css (line 1-30)
# Configuration: assets/js/main.js (line 1-10)
# Content Checklist: CONTENT_CHECKLIST.md
# Setup Guide: SETUP.md
# Build Summary: BUILD_SUMMARY.md
# GitHub Pages Docs: https://pages.github.com
# Formspree: https://formspree.io
# Web3Forms: https://web3forms.com

# EXAMPLE WORKFLOW
# ================

# 1. Test locally
cd /home/anand-saagee/assets
python -m http.server 8000
# Visit http://localhost:8000

# 2. Fill placeholders
# Edit index.html, projects/*.html, assets/js/main.js
# Update emails, form endpoint, Instagram handle, WhatsApp number

# 3. Add images
# Place images in assets/img/ and assets/instagram/
# Run: node scripts/optimize-images.js

# 4. Test responsive design
# F12 > Device toolbar > Test at 360px, 768px, 1024px, 1440px

# 5. Run Lighthouse
# F12 > Lighthouse > Generate report (check 90+ scores)

# 6. Git setup
git init
git add .
git commit -m "Initial commit: Trivandrum Lobby website"
git remote add origin https://github.com/YOUR_USERNAME/trivandrum-lobby.git
git branch -M main
git push -u origin main

# 7. Enable GitHub Pages
# Go to repo Settings > Pages > Deploy from branch > main / root > Save

# 8. Test live site
# Visit https://YOUR_USERNAME.github.io/trivandrum-lobby/

# 9. Set custom domain (optional)
# Update DNS records
# GitHub Pages handles HTTPS automatically
