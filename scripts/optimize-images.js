#!/usr/bin/env node

/**
 * Image optimization helper for Trivandrum Lobby website
 * Converts JPG images to WebP format using sharp
 *
 * Usage: node scripts/optimize-images.js
 *
 * Requires: npm install sharp
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imageSizes = {
    'assets/img/hero.jpg': { width: 800, height: 600 },
    'assets/img/poster-1.jpg': { width: 280, height: 420 },
    'assets/img/poster-2.jpg': { width: 280, height: 420 },
    'assets/img/upcoming.jpg': { width: 800, height: 600 },
    'assets/img/team-1.jpg': { width: 200, height: 200 },
    'assets/img/team-2.jpg': { width: 200, height: 200 },
    'assets/img/team-3.jpg': { width: 200, height: 200 },
    'assets/img/team-4.jpg': { width: 200, height: 200 },
    'assets/img/still-1.jpg': { width: 280, height: 200 },
    'assets/img/still-2.jpg': { width: 280, height: 200 },
    'assets/img/still-3.jpg': { width: 280, height: 200 },
    'assets/img/og-image.jpg': { width: 1200, height: 630 },
    'assets/instagram/img-1.jpg': { width: 200, height: 200 },
    'assets/instagram/img-2.jpg': { width: 200, height: 200 },
    'assets/instagram/img-3.jpg': { width: 200, height: 200 },
    'assets/instagram/img-4.jpg': { width: 200, height: 200 },
    'assets/instagram/img-5.jpg': { width: 200, height: 200 },
    'assets/instagram/img-6.jpg': { width: 200, height: 200 }
};

async function optimizeImages() {
    console.log('Starting image optimization...\n');

    for (const [imagePath, size] of Object.entries(imageSizes)) {
        if (!fs.existsSync(imagePath)) {
            console.log(`Skipped ${imagePath} (file not found)`);
            continue;
        }

        const webpPath = imagePath.replace('.jpg', '.webp');

        try {
            await sharp(imagePath)
                .resize(size.width, size.height, {
                    fit: 'cover',
                    position: 'center'
                })
                .webp({ quality: 80 })
                .toFile(webpPath);

            console.log(`✓ ${webpPath} (${size.width}x${size.height})`);
        } catch (error) {
            console.error(`✗ Error processing ${imagePath}: ${error.message}`);
        }
    }

    console.log('\nImage optimization complete!');
}

optimizeImages();
