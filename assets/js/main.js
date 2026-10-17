const CONFIG = {
    formEndpoint: '',
    instagramHandle: 'trivandrumlobbyproductions',
    whatsappNumber: '+91 98765 43210'
};

const projects = [
    {
        id: 1,
        title: 'Monsoon Whispers',
        year: 2024,
        format: 'Feature Film',
        slug: 'project-one',
        description: 'A coming-of-age story set in the backwaters of Kerala during monsoon season.',
        poster: 'assets/img/poster-1.webp',
        posterFallback: 'assets/img/poster-1.jpg'
    },
    {
        id: 2,
        title: 'Urban Echoes',
        year: 2023,
        format: 'Web Series',
        slug: 'project-two',
        description: 'Five interconnected stories exploring life in modern Thiruvananthapuram.',
        poster: 'assets/img/poster-2.webp',
        posterFallback: 'assets/img/poster-2.jpg'
    }
];

const upcomingProject = {
    id: 3,
    title: 'Production No. 3',
    year: 2026,
    format: 'Feature Film',
    slug: 'project-upcoming',
    description: 'Written and directed by Vishnu John and Akhil Niranjan. Currently in production.',
    poster: 'assets/img/upcoming.webp',
    posterFallback: 'assets/img/upcoming.jpg'
};

const teamMembers = [
    { name: 'Arjun Nair', role: 'Director', image: 'assets/img/team-1.webp', imageFallback: 'assets/img/team-1.jpg' },
    { name: 'Priya Menon', role: 'Producer', image: 'assets/img/team-2.webp', imageFallback: 'assets/img/team-2.jpg' },
    { name: 'Rohan Kumar', role: 'Cinematographer', image: 'assets/img/team-3.webp', imageFallback: 'assets/img/team-3.jpg' },
    { name: 'Anjali Singh', role: 'Editor', image: 'assets/img/team-4.webp', imageFallback: 'assets/img/team-4.jpg' }
];

const instagramFeed = [
    { url: 'https://instagram.com/p/sample1/', image: 'assets/instagram/img-1.webp', fallback: 'assets/instagram/img-1.jpg' },
    { url: 'https://instagram.com/p/sample2/', image: 'assets/instagram/img-2.webp', fallback: 'assets/instagram/img-2.jpg' },
    { url: 'https://instagram.com/p/sample3/', image: 'assets/instagram/img-3.webp', fallback: 'assets/instagram/img-3.jpg' },
    { url: 'https://instagram.com/p/sample4/', image: 'assets/instagram/img-4.webp', fallback: 'assets/instagram/img-4.jpg' },
    { url: 'https://instagram.com/p/sample5/', image: 'assets/instagram/img-5.webp', fallback: 'assets/instagram/img-5.jpg' },
    { url: 'https://instagram.com/p/sample6/', image: 'assets/instagram/img-6.webp', fallback: 'assets/instagram/img-6.jpg' }
];

let lastScrollY = 0;
let scrollTimeout = null;

document.addEventListener('DOMContentLoaded', function() {
    renderProjects();
    renderTeam();
    renderInstagram();
    setupNavigation();
    setupContactForm();
    updateConfigLinks();
    setupScrollEffects();
    setupBackToTop();
});

function renderProjects() {
    const grid = document.getElementById('projects-completed');
    if (!grid) return;
    grid.innerHTML = projects.map(project => `
        <div class="project-card">
            <div class="project-poster">
                <picture>
                    <source srcset="${project.poster}" type="image/webp">
                    <img src="${project.posterFallback}" alt="${project.title} poster" loading="lazy" width="280" height="420">
                </picture>
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <div class="project-meta">${project.year} • ${project.format}</div>
                <p class="project-description">${project.description}</p>
                <a href="projects/${project.slug}.html">View project</a>
            </div>
        </div>
    `).join('');
}

function renderTeam() {
    const grid = document.getElementById('team-grid');
    if (!grid) return;
    grid.innerHTML = teamMembers.map(member => `
        <div class="team-card">
            <div class="team-photo">
                <picture>
                    <source srcset="${member.image}" type="image/webp">
                    <img src="${member.imageFallback}" alt="${member.name}" loading="lazy" width="200" height="200">
                </picture>
            </div>
            <div class="team-name">${member.name}</div>
            <div class="team-role">${member.role}</div>
        </div>
    `).join('');
}

function renderInstagram() {
    const grid = document.getElementById('instagram-grid');
    if (!grid) return;
    grid.innerHTML = instagramFeed.map((post, index) => `
        <a href="${post.url}" target="_blank" rel="noopener noreferrer" class="instagram-item">
            <picture>
                <source srcset="${post.image}" type="image/webp">
                <img src="${post.fallback}" alt="Instagram post ${index + 1}" loading="lazy" width="200" height="200">
            </picture>
            <div class="instagram-overlay">
                <span class="instagram-link-icon">↗</span>
            </div>
        </a>
    `).join('');
}

function setupNavigation() {
    const toggle = document.querySelector('.navbar-toggle');
    const menu = document.getElementById('navbar-menu');
    if (!toggle) return;

    toggle.addEventListener('click', function() {
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', !expanded);
        menu.classList.toggle('active');
        document.body.style.overflow = expanded ? 'auto' : 'hidden';
    });

    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            toggle.setAttribute('aria-expanded', 'false');
            menu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navbar')) {
            toggle.setAttribute('aria-expanded', 'false');
            menu.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            toggle.setAttribute('aria-expanded', 'false');
            menu.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

function setupScrollEffects() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    function updateScrollProgress() {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / scrollHeight) * 100;
        const progress = document.querySelector('.scroll-progress');
        if (progress) progress.style.width = scrolled + '%';
    }

    function updateNavbar() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        clearTimeout(scrollTimeout);
        if (window.scrollY > 100) {
            if (window.scrollY < lastScrollY) {
                navbar.classList.remove('hidden');
            } else {
                navbar.classList.add('hidden');
            }
        }

        scrollTimeout = setTimeout(() => {
            lastScrollY = window.scrollY;
        }, 100);
    }

    window.addEventListener('scroll', function() {
        updateScrollProgress();
        updateNavbar();
    }, { passive: true });
}

function setupBackToTop() {
    const btn = document.querySelector('.back-to-top');
    if (!btn) {
        const newBtn = document.createElement('button');
        newBtn.className = 'back-to-top';
        newBtn.setAttribute('aria-label', 'Back to top');
        newBtn.innerHTML = '↑';
        document.body.appendChild(newBtn);

        window.addEventListener('scroll', () => {
            if (window.scrollY > window.innerHeight) {
                newBtn.classList.add('visible');
            } else {
                newBtn.classList.remove('visible');
            }
        }, { passive: true });

        newBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const honeypot = form.querySelector('input[name="website"]').value;
        if (honeypot) return;

        if (!CONFIG.formEndpoint || CONFIG.formEndpoint === '[FORM_ENDPOINT]') {
            const name = form.querySelector('#name').value;
            const organization = form.querySelector('#organization').value;
            const enquiryType = form.querySelector('#enquiry-type').value;
            const message = form.querySelector('#message').value;
            const emailBody = `Name: ${name}\nOrganization: ${organization}\nEnquiry Type: ${enquiryType}\n\nMessage:\n${message}`;
            window.location.href = `mailto:hello@trivandrumlobby.com?subject=Enquiry from ${name}&body=${encodeURIComponent(emailBody)}`;
            return;
        }

        const formData = new FormData(form);
        fetch(CONFIG.formEndpoint, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        })
        .then(response => {
            if (response.ok) {
                showFormMessage('Message sent successfully. We will get back to you soon.', 'success');
                form.reset();
            } else {
                showFormMessage('Error sending message. Please try again.', 'error');
            }
        })
        .catch(error => {
            showFormMessage('Error sending message. Please try again.', 'error');
        });
    });
}

function showFormMessage(message, type) {
    const messageDiv = document.getElementById('form-message');
    if (!messageDiv) return;
    messageDiv.textContent = message;
    messageDiv.className = `form-message ${type}`;
    messageDiv.style.display = 'block';
    setTimeout(() => { messageDiv.style.display = 'none'; }, 5000);
}

function updateConfigLinks() {
    document.querySelectorAll('a[href*="instagram.com/[INSTAGRAM_HANDLE]"]').forEach(link => {
        if (CONFIG.instagramHandle !== '[INSTAGRAM_HANDLE]') {
            link.href = `https://instagram.com/${CONFIG.instagramHandle}`;
        }
    });

    document.querySelectorAll('a[href*="wa.me/[WHATSAPP_NUMBER]"]').forEach(link => {
        if (CONFIG.whatsappNumber !== '[WHATSAPP_NUMBER]') {
            link.href = `https://wa.me/${CONFIG.whatsappNumber}`;
        }
    });
}

if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                observer.unobserve(entry.target);
            }
        });
    });
    lazyImages.forEach(img => imageObserver.observe(img));
}
