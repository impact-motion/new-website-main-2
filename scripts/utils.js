// Language switching
function setLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);

    document.querySelectorAll('[data-en][data-no]').forEach(el => {
        const text = el.getAttribute(`data-${lang}`);
        if (text) {
            const svg = el.querySelector('svg');
            if (svg) {
                const svgClone = svg.cloneNode(true);
                el.textContent = text + ' ';
                el.appendChild(svgClone);
            } else {
                el.textContent = text;
            }
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        const isActive = btn.getAttribute('data-lang') === lang;
        btn.classList.toggle('active', isActive);
    });

    // Update placeholders
    if (typeof updatePlaceholders === 'function') {
        updatePlaceholders(lang);
    }

    // Update quiz step indicator if exists
    const stepIndicator = document.getElementById('quiz-step-indicator');
    if (stepIndicator && typeof currentStep !== 'undefined') {
        stepIndicator.textContent = lang === 'en' ? `Step ${currentStep} of ${totalSteps}` : `Steg ${currentStep} av ${totalSteps}`;
    }

    // Update dynamic cities if on step 2
    if (typeof updateDynamicCities === 'function' && typeof currentStep !== 'undefined' && currentStep === 2) {
        updateDynamicCities();
    }

    document.documentElement.lang = lang === 'no' ? 'no' : 'en';
}

// Load saved language
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'no';
    setLanguage(savedLang);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});
