# Project Specification: CDIF4EOSC Microsite

**Project Name:** CDIF4EOSC Microsite
**Design System:** Scholarly Luminary (Institutional, Technical, High-Precision)
**Last Updated:** 2026-04-29
**Status:** Implementation Finalized

---

## 1. Project Overview
The CDIF4EOSC microsite is a high-performance, single-page professional portal designed to showcase the "Cross-Domain Interoperability Framework for EOSC". It prioritizes scholarly authority, technical clarity, and modern web aesthetics.

---

## 2. Technical Stack
- **Framework:** [Eleventy (11ty)](https://www.11ty.dev/) Static Site Generator.
- **Templating:** Nunjucks (`.njk`).
- **Content:** Markdown (`.md`) for primary content management.
- **Styling:** Vanilla CSS with a centralized design token system (CSS Variables).
- **Deployment:** GitHub Pages via automated GitHub Actions pipeline.
- **Portability:** Multi-environment support for root (`/`) and subpath (`/cdif4eosc-www/`) hosting using conditional path prefixing.

---

## 3. Design System: Scholarly Luminary

### 3.1 Visual Identity
- **Atmospheric Background:** A technical "Interoperability Grid" featuring a blueprint-style dotted grid (20px) and structural major lines (100px).
- **Hero Visualization:** A dynamic, glowing 3D digital globe centered on Europe, featuring luminous consortium partner hubs, data connection trails, and a subtle "sprinkle" of binary data streams.
- **Color Palette:**
  - `Primary`: Deep Navy (#000628)
  - `Secondary`: Tech Blue (#00639a)
  - `Surface`: Ultra-light sky (#f8faff)
  - `Accents`: Electric Cyan for data visualizations.

### 3.2 Layout Patterns
- **Header:** Sticky glassmorphic header with integrated navigation, responsive hamburger menu, and partner branding.
- **Consortium Section:** A light-surface grid with rounded corners (16px), utilizing a two-column asymmetric layout for institutional partners.
- **Work Packages:** Glassmorphic cards with hover-lift effects and glowing borders, organized in a responsive technical grid.
- **Statistics:** High-impact metric cards providing an immediate overview of project scale.

---

## 4. Key Features
- **Responsive Design:** Fully optimized for desktop, tablet, and mobile, featuring a dedicated CSS-only slide-out navigation drawer.
- **SEO Optimized:** Semantic HTML5 structure with descriptive meta tags and clear heading hierarchy.
- **Performance:** Static asset optimization and minimal CSS footprint for lightning-fast load times.
- **Maintainability:** Content-driven architecture allowing non-technical updates via `src/index.md`.

---

## 5. Deployment & Configuration
- **Local Dev:** `npm start` (Runs at root `localhost:8080`).
- **Production Build:** `npm run build` (Sets `ELEVENTY_ENV=production` and applies the `/cdif4eosc-www/` path prefix).
- **GitHub Actions:** Automated CI/CD pipeline triggered on every push to `main`.

---

## 6. Implementation Notes
- The site replaces older design references with a custom-engineered institutional aesthetic tailored for the European Open Science Cloud (EOSC) community.
- All iconography and visualizations are custom-generated to reflect "Data Framework" and "Scientific Interoperability" concepts.
