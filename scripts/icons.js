// Modern SVG Icons Library
const icons = {
    // Service Icons
    document: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,

    edit: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`,

    target: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>`,

    mail: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,

    search: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path></svg>`,

    monitor: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,

    building: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>`,

    smartphone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`,

    // Feature Icons
    award: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,

    zap: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,

    globe: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,

    // Visual Card Icons
    lightbulb: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path></svg>`,

    sparkles: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>`,

    trendingUp: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>`,

    // Section Tag Icons
    stars: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>`,

    phone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`
};

// SVG Gradient Definition
const gradientDef = `
<svg class="icon-gradient-defs" aria-hidden="true">
    <defs>
        <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#7c3aed;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#ec4899;stop-opacity:1" />
        </linearGradient>
    </defs>
</svg>
`;

// Function to replace emoji with SVG icon
function replaceEmojisWithIcons() {
    // Add gradient definition to body
    if (!document.querySelector('.icon-gradient-defs')) {
        document.body.insertAdjacentHTML('afterbegin', gradientDef);
    }

    // Service icons mapping
    const serviceIconMap = {
        '📄': 'document',
        '📝': 'edit',
        '📑': 'document',
        '🎯': 'target',
        '📧': 'mail',
        '🔍': 'search',
        '💻': 'monitor',
        '🏗️': 'building',
        '📱': 'smartphone',
        '🏷️': 'target',
        '🏠': 'monitor'
    };

    // Feature icons mapping
    const featureIconMap = {
        '🎓': 'award',
        '🎯': 'target',
        '🏗️': 'building',
        '🌐': 'globe'
    };

    // Visual card icons mapping
    const visualIconMap = {
        '💡': 'lightbulb',
        '✨': 'sparkles',
        '📈': 'trendingUp'
    };

    // Replace service icons
    document.querySelectorAll('.service-icon, .service-detail-icon').forEach(icon => {
        const emoji = icon.textContent.trim();
        if (serviceIconMap[emoji]) {
            icon.innerHTML = icons[serviceIconMap[emoji]];
        }
    });

    // Replace feature icons
    document.querySelectorAll('.feature-icon').forEach(icon => {
        const emoji = icon.textContent.trim();
        if (featureIconMap[emoji]) {
            icon.innerHTML = icons[featureIconMap[emoji]];
        }
    });

    // Replace visual card icons
    document.querySelectorAll('.visual-emoji').forEach(icon => {
        const emoji = icon.textContent.trim();
        if (visualIconMap[emoji]) {
            icon.innerHTML = icons[visualIconMap[emoji]];
        }
    });

    // Replace section tag icons
    document.querySelectorAll('.section-tag').forEach(tag => {
        const text = tag.textContent;
        if (text.includes('✨')) {
            tag.innerHTML = icons.stars + text.replace('✨', '').trim();
        }
        if (text.includes('💡')) {
            tag.innerHTML = icons.lightbulb + text.replace('💡', '').trim();
        }
    });

    // Clean up phone emoji in CTA button (keep it as it's part of text)
    // We'll leave phone emojis in buttons and footer as they work well in context
}

// Initialize on DOM load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', replaceEmojisWithIcons);
} else {
    replaceEmojisWithIcons();
}
