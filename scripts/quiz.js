// Quiz functionality for homepage lead qualification

let currentStep = 1;
const totalSteps = 7;

// City mapping by country
const citiesByCountry = {
    'Norge': ['Oslo', 'Bergen', 'Trondheim', 'Stavanger', 'Kristiansand'],
    'Sverige': ['Stockholm', 'Göteborg', 'Malmö', 'Uppsala'],
    'Danmark': ['København', 'Aarhus', 'Odense'],
    'Finland': ['Helsinki', 'Tampere', 'Turku'],
    'Island': ['Reykjavik'],
    'Tyskland': ['Berlin', 'München', 'Frankfurt', 'Hamburg', 'Düsseldorf'],
    'Storbritannia': ['London', 'Manchester', 'Birmingham', 'Edinburgh'],
    'Frankrike': ['Paris', 'Lyon', 'Marseille'],
    'Nederland': ['Amsterdam', 'Rotterdam', 'Utrecht'],
    'Belgia': ['Brussel', 'Antwerpen'],
    'Sveits': ['Zürich', 'Genève', 'Basel'],
    'Østerrike': ['Wien', 'Salzburg'],
    'Spania': ['Madrid', 'Barcelona', 'Valencia'],
    'Italia': ['Milano', 'Roma', 'Torino'],
    'Portugal': ['Lisboa', 'Porto'],
    'Hellas': ['Athen', 'Thessaloniki'],
    'Polen': ['Warszawa', 'Kraków', 'Wrocław'],
    'Tsjekkia': ['Praha', 'Brno'],
    'Romania': ['București', 'Cluj-Napoca'],
    'Ungarn': ['Budapest'],
    'USA': ['New York', 'Los Angeles', 'Chicago', 'San Francisco', 'Boston', 'Miami'],
    'Canada': ['Toronto', 'Vancouver', 'Montreal'],
    'Australia': ['Sydney', 'Melbourne', 'Brisbane'],
    'Asia': ['Singapore', 'Hong Kong', 'Tokyo', 'Shanghai'],
    'Midtøsten': ['Dubai', 'Tel Aviv'],
    'Afrika': ['Cape Town', 'Johannesburg'],
    'Sør-Amerika': ['São Paulo', 'Buenos Aires']
};

function updateDynamicCities() {
    const citiesContainer = document.getElementById('dynamic-cities');
    if (!citiesContainer) return;

    const selectedCountries = [];
    document.querySelectorAll('input[name="countries[]"]:checked').forEach(cb => {
        selectedCountries.push(cb.value);
    });

    const savedLang = localStorage.getItem('preferredLanguage') || 'no';

    if (selectedCountries.length === 0) {
        citiesContainer.innerHTML = `<p class="no-cities-message" data-en="Please select countries in the previous step first." data-no="Vennligst velg land i forrige steg først.">${savedLang === 'en' ? 'Please select countries in the previous step first.' : 'Vennligst velg land i forrige steg først.'}</p>`;
        return;
    }

    let html = '';
    selectedCountries.forEach(country => {
        const cities = citiesByCountry[country];
        if (cities && cities.length > 0) {
            html += `<div class="city-group"><h4>${country}</h4><div class="city-options">`;
            cities.forEach(city => {
                html += `<label class="city-option"><input type="checkbox" name="cities[]" value="${city}"> ${city}</label>`;
            });
            html += '</div></div>';
        }
    });

    citiesContainer.innerHTML = html || `<p class="no-cities-message">${savedLang === 'en' ? 'No cities available for selected countries.' : 'Ingen byer tilgjengelig for valgte land.'}</p>`;
}

function updateQuizUI() {
    // Update progress bar
    const progressBar = document.getElementById('quiz-progress-bar');
    progressBar.style.width = `${(currentStep / totalSteps) * 100}%`;

    // Update step indicator
    const stepIndicator = document.getElementById('quiz-step-indicator');
    const savedLang = localStorage.getItem('preferredLanguage') || 'no';
    stepIndicator.textContent = savedLang === 'en' ? `Step ${currentStep} of ${totalSteps}` : `Steg ${currentStep} av ${totalSteps}`;

    // Show/hide steps
    document.querySelectorAll('.quiz-step').forEach(step => {
        step.classList.remove('active');
    });
    document.querySelector(`.quiz-step[data-step="${currentStep}"]`).classList.add('active');

    // Update cities when moving to step 2
    if (currentStep === 2) {
        updateDynamicCities();
    }

    // Show/hide navigation buttons
    const prevBtn = document.querySelector('.quiz-prev');
    const nextBtn = document.querySelector('.quiz-next');
    const submitBtn = document.querySelector('.quiz-submit');

    prevBtn.style.display = currentStep === 1 ? 'none' : 'inline-flex';
    nextBtn.style.display = currentStep === totalSteps ? 'none' : 'inline-flex';
    submitBtn.style.display = currentStep === totalSteps ? 'inline-flex' : 'none';
}

function nextStep() {
    if (currentStep < totalSteps) {
        currentStep++;
        updateQuizUI();
        document.getElementById('quiz-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        updateQuizUI();
        document.getElementById('quiz-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Update placeholders when language changes
function updatePlaceholders(lang) {
    document.querySelectorAll('[data-placeholder-en][data-placeholder-no]').forEach(el => {
        const placeholder = el.getAttribute(`data-placeholder-${lang}`);
        if (placeholder) {
            el.placeholder = placeholder;
        }
    });
}

// Initialize quiz on page load
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('quiz-form')) {
        updateQuizUI();
        // Add listener for country checkboxes
        document.querySelectorAll('input[name="countries[]"]').forEach(cb => {
            cb.addEventListener('change', updateDynamicCities);
        });

        // Enhance flag display with SVG icons
        enhanceFlagDisplay();
    }
});

// Country code mapping for flag-icons library
const countryCodeMap = {
    'Norge': 'no',
    'Norway': 'no',
    'Sverige': 'se',
    'Sweden': 'se',
    'Danmark': 'dk',
    'Denmark': 'dk',
    'Finland': 'fi',
    'Island': 'is',
    'Iceland': 'is',
    'Tyskland': 'de',
    'Germany': 'de',
    'Storbritannia': 'gb',
    'United Kingdom': 'gb',
    'Frankrike': 'fr',
    'France': 'fr',
    'Nederland': 'nl',
    'Netherlands': 'nl',
    'Belgia': 'be',
    'Belgium': 'be',
    'Sveits': 'ch',
    'Switzerland': 'ch',
    'Østerrike': 'at',
    'Austria': 'at',
    'Spania': 'es',
    'Spain': 'es',
    'Italia': 'it',
    'Italy': 'it',
    'Portugal': 'pt',
    'Hellas': 'gr',
    'Greece': 'gr',
    'Polen': 'pl',
    'Poland': 'pl',
    'Tsjekkia': 'cz',
    'Czech Republic': 'cz',
    'Romania': 'ro',
    'Ungarn': 'hu',
    'Hungary': 'hu',
    'USA': 'us',
    'Canada': 'ca',
    'Australia': 'au'
};

// Function to enhance flag display with SVG icons
function enhanceFlagDisplay() {
    // Select all country and city option spans
    const optionSpans = document.querySelectorAll('.country-option span, .city-option span');

    optionSpans.forEach(span => {
        const text = span.textContent.trim();

        // Remove emoji flags (they appear as text codes on Windows)
        const cleanText = text.replace(/[\u{1F1E6}-\u{1F1FF}]{2}|🌍|🌎|🌏/gu, '',).trim();

        // Try to find country code from the text
        let countryCode = null;
        for (const [country, code] of Object.entries(countryCodeMap)) {
            if (cleanText.includes(country)) {
                countryCode = code;
                break;
            }
        }

        if (countryCode) {
            // Create flag icon using flag-icons library
            span.innerHTML = `<span class="fi fi-${countryCode} flag-icon"></span><span class="country-name">${cleanText}</span>`;
        } else {
            // For regions without specific flags (Asia, Middle East, etc.)
            span.innerHTML = `<span class="region-icon">🌍</span><span class="country-name">${cleanText}</span>`;
        }
    });
}
