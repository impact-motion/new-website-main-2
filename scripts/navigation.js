// Navigation Component - Shared across all pages
function renderNavigation() {
  const nav = `
    <header class="header">
      <div class="container">
        <div class="header-content">
          <a href="/" class="logo">
            <img src="assets/images/Kopi av Kopi av Impact Motion-kopi.png" alt="Impact Motion" class="logo-img">
          </a>
          
          <nav class="nav">
            <ul class="nav-links" id="nav-links">
              <li><a href="/lead-generation" class="nav-link" data-en="Lead Generation" data-no="Leadsgenerering">Leadsgenerering</a></li>
              <li><a href="/about" class="nav-link" data-en="About Us" data-no="Om oss">Om oss</a></li>
              <li><a href="/contact" class="nav-link" data-en="Contact" data-no="Kontakt">Kontakt</a></li>
              <li><a href="https://api.leadconnectorhq.com/widget/booking/pECTe1fz7k95BVoAEmKH" target="_blank" class="nav-link" data-en="Booking" data-no="Booking">Booking</a></li>
              <li class="mobile-lang-toggle">
                <button class="lang-btn" data-lang="en" onclick="setLanguage('en')">EN</button>
                <button class="lang-btn active" data-lang="no" onclick="setLanguage('no')">NO</button>
              </li>
            </ul>

            <div class="lang-toggle desktop-only">
              <button class="lang-btn" data-lang="en" onclick="setLanguage('en')">EN</button>
              <button class="lang-btn active" data-lang="no" onclick="setLanguage('no')">NO</button>
            </div>

            <button class="hamburger" id="hamburger" onclick="toggleMobileMenu()" aria-label="Toggle menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  `;

  document.getElementById('navigation-placeholder').innerHTML = nav;
}

function renderFooter() {
  const footer = `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <h3>Impact Motion</h3>
            <p data-en="B2B Lead Generation Agency helping growth-oriented companies scale their business." data-no="B2B Leadsgenerering byrå som hjelper vekstorienterte selskaper med å skalere virksomheten.">B2B Leadsgenerering byrå som hjelper vekstorienterte selskaper med å skalere virksomheten.</p>
            <div class="footer-social">
              <a href="mailto:im@impact-motion.com" aria-label="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/impact-motion/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          <div class="footer-column">
            <h4 data-en="Services" data-no="Tjenester">Tjenester</h4>
            <ul>
              <li><a href="/lead-generation" data-en="Lead Generation" data-no="Leadsgenerering">Leadsgenerering</a></li>
              <li><a href="/about" data-en="About Us" data-no="Om oss">Om oss</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h4 data-en="Company" data-no="Selskap">Selskap</h4>
            <ul>
              <li><a href="/contact" data-en="Contact" data-no="Kontakt">Kontakt</a></li>
              <li><a href="https://api.leadconnectorhq.com/widget/booking/pECTe1fz7k95BVoAEmKH" target="_blank" data-en="Booking" data-no="Booking">Booking</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h4 data-en="Legal" data-no="Juridisk">Juridisk</h4>
            <ul>
              <li><a href="/privacy" data-en="Privacy Policy" data-no="Personvernerklæring">Personvernerklæring</a></li>
              <li><a href="/terms" data-en="Terms" data-no="Vilkår">Vilkår</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>© 2025. Impact Motion. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  `;

  document.getElementById('footer-placeholder').innerHTML = footer;
}

// Mobile menu toggle
function toggleMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
}

// Close mobile menu when clicking a link
document.addEventListener('DOMContentLoaded', () => {
  renderNavigation();
  renderFooter();

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const hamburger = document.getElementById('hamburger');
      const navLinks = document.getElementById('nav-links');
      if (hamburger && navLinks) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      }
    });
  });
});
