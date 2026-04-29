# CDIF4EOSC Microsite

A high-performance, premium editorial microsite for the **CDIF4EOSC** (Developing and implementing the Cross-Domain Interoperability Framework for EOSC) initiative.

## 🌟 Overview

This site is built using **Eleventy (11ty)**, a static site generator, and follows the **"Scholarly Luminary"** design system. It combines institutional authority with premium editorial aesthetics, featuring:

- **High-Fidelity Design**: Asymmetric layouts, tonal depth, and glassmorphism.
- **Modern Tech Stack**: 11ty, Vanilla CSS, and Nunjucks templating.
- **Automated Deployment**: Integrated GitHub Actions for seamless deployment to GitHub Pages.
- **Maintainable Content**: All site content is managed in standard Markdown.

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- npm

### Local Development
1. **Clone the repository**:
   ```bash
   git clone https://github.com/codata/cdif4eosc-www.git
   cd cdif4eosc-www
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npx @11ty/eleventy --serve
   ```
   The site will be available at `http://localhost:8080`.

4. **Build for production**:
   ```bash
   npx @11ty/eleventy
   ```
   The generated site will be in the `_site` directory.

## 🛠 Maintenance Instructions

### Updating Content
The main page content is located in `src/index.md`. You can update text, add new sections, or modify existing ones using standard Markdown and HTML.

### Design & Styling
The design system tokens and styles are located in `src/assets/css/style.css`.
- **Colors**: Update the `:root` variables for brand adjustments.
- **Layouts**: Section padding and grid patterns are defined here.
- **"No-Line" Rule**: Avoid using 1px solid borders. Use tonal shifts (background color changes) to define sections.

### Templates
- **Base Layout**: `src/_includes/layouts/base.njk` contains the HTML shell, header, and footer.
- **Assets**: Add new images to `src/assets/images/` and reference them in your Markdown/HTML.

### Deployment
Deployment is automatic. When you push changes to the `main` branch, a GitHub Action will:
1. Build the site using 11ty.
2. Deploy the resulting files to the `gh-pages` environment.

## 🎨 Design System: The Scholarly Luminary
This project adheres to the following principles:
- **Tonal Depth**: Use subtle shifts in the neutral scale rather than lines for structure.
- **Premium Typography**: Uses *Public Sans* for headlines and *Inter* for body text.
- **Intentional Asymmetry**: Break rigid grids to create visual tension and interest.

---
© 2026 CODATA | CDIF4EOSC Initiative
