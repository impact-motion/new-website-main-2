# Impact Motion Website

B2B Lead Generation Agency website for Impact Motion.

## 📁 Project Structure

```
Impact Motions (ina)/
├── assets/
│   └── images/          # All image assets (optimized)
├── styles/
│   └── main.css         # Shared styles for all pages
├── scripts/
│   ├── navigation.js    # Shared navigation & footer components
│   └── utils.js         # Shared utility functions (language, smooth scroll)
├── components/          # Reusable component templates
├── archive/             # Old React/Next.js components (deprecated)
├── index.html           # Homepage
├── about.html           # About page
├── contact.html         # Contact page
├── lead-generation.html # Lead generation services page
├── results.html         # Case studies & results page
├── privacy.html         # Privacy policy
├── terms.html           # Terms of service
├── robots.txt           # SEO robots file
└── sitemap.xml          # SEO sitemap
```

## 🚀 Tech Stack

- **Frontend**: Pure HTML5, CSS3, Vanilla JavaScript
- **Fonts**: Google Fonts (Playfair Display, Inter)
- **Forms**: FormSubmit.co
- **Booking**: LeadConnector (GoHighLevel)
- **Localization**: Bilingual (Norwegian/English) via data attributes

## 🎨 Design System

### Colors
- **Background**: `#fffaf5` (Warm off-white)
- **Foreground**: `#2d2a26` (Dark brown)
- **Accent**: `#c9663c` (Warm orange)
- **Accent Light**: `#e07b4f`
- **Secondary**: `#fef3e7` (Light cream)
- **Muted**: `#fdf8f3`
- **Border**: `#e8ddd4`

### Typography
- **Headers**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Base Size**: 18px (desktop), 16px (mobile)

## 🚀 Quick Start

### First Time Setup
```bash
npm install
```

### Development
```bash
# Start dev server with live reload
npm run dev

# Optimize images
npm run optimize-images

# Test homepage
npm run test
```

## 🔧 Features

- ✅ Responsive design (mobile-first)
- ✅ Bilingual support (NO/EN)
- ✅ Interactive 7-step lead qualification quiz
- ✅ Booking calendar integration
- ✅ Contact forms
- ✅ Case studies showcase
- ✅ SEO optimized (sitemap, robots.txt)
- ✅ Privacy policy & Terms of Service
- ✅ Live reload development server
- ✅ Image optimization scripts

## 📝 Development Notes

### Shared Components
Navigation and footer are now centralized in `scripts/navigation.js` to avoid code duplication. Each page includes:

```html
<div id="navigation-placeholder"></div>
<!-- Page content -->
<div id="footer-placeholder"></div>

<script src="scripts/navigation.js"></script>
<script src="scripts/utils.js"></script>
```

### Language Switching
Language preferences are stored in localStorage. Use data attributes for bilingual content:

```html
<p data-en="English text" data-no="Norsk tekst">Norsk tekst</p>
```

### Image Optimization
All images should be:
- WebP format when possible
- Under 500KB for photos
- Under 100KB for logos/icons
- Properly sized for their display dimensions

## 🌐 Deployment

This is a static website that can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

## 📧 Contact

- **Email**: im@impact-motion.com
- **LinkedIn**: [Impact Motion](https://www.linkedin.com/company/impact-motion/)

## 📜 License

© 2025 Impact Motion. All Rights Reserved.
