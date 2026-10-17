// Project page lightbox functionality
document.addEventListener('DOMContentLoaded', function() {
    setupLightbox();
    setupNavigation();
});

function setupLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    let currentIndex = 0;

    if (!lightbox || !galleryItems.length) return;

    // Open lightbox on image click
    galleryItems.forEach((img, index) => {
        img.addEventListener('click', function() {
            currentIndex = index;
            openLightbox(img.src);
        });

        // Keyboard: Enter or Space to open
        img.parentElement.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                currentIndex = index;
                openLightbox(img.src);
            }
        });
    });

    function openLightbox(src) {
        lightboxImage.src = src;
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    // Close button
    lightboxClose.addEventListener('click', closeLightbox);

    // Close on background click
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Previous image
    lightboxPrev.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        lightboxImage.src = galleryItems[currentIndex].src;
    });

    // Next image
    lightboxNext.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        lightboxImage.src = galleryItems[currentIndex].src;
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            lightboxPrev.click();
        } else if (e.key === 'ArrowRight') {
            lightboxNext.click();
        }
    });
}

// Mobile navigation toggle
function setupNavigation() {
    const toggle = document.querySelector('.navbar-toggle');
    const menu = document.getElementById('navbar-menu');

    if (!toggle) return;

    toggle.addEventListener('click', function() {
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', !expanded);
        menu.classList.toggle('active');
    });

    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            toggle.setAttribute('aria-expanded', 'false');
            menu.classList.remove('active');
        });
    });

    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navbar')) {
            toggle.setAttribute('aria-expanded', 'false');
            menu.classList.remove('active');
        }
    });
}
