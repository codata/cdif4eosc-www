# CDIF4EOSC Microsite

A high-performance, premium professional portal for the **CDIF4EOSC** (Cross-Domain Interoperability Framework for EOSC) initiative.

## 🌟 Overview

This site is built using **Eleventy (11ty)** and adheres to the **"Scholarly Luminary"** design system. It combines institutional authority with technical precision, featuring:

- **High-Fidelity Visuals**: Europe-centered dynamic globe, technical grid backgrounds, and glassmorphic UI components.
- **Modern Tech Stack**: 11ty, Vanilla CSS (Design Tokens), and Nunjucks templating.
- **Multi-Environment Portability**: Built-in support for both subpath (GitHub Pages) and root-level hosting.
- **Automated CI/CD**: Integrated GitHub Actions for zero-touch deployment.

---

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
   npm start
   ```
   The site will be available at `http://localhost:8080`. Local development runs at the **root path (/)**.

### Production Build
To build the site for production (e.g., for GitHub Pages deployment):
```bash
npm run build
```
This command automatically sets `ELEVENTY_ENV=production`, which applies the necessary path prefix for subpath hosting.

---

## 🛠 Multi-Environment Hosting (Subpaths vs. Root)

The project is engineered to work seamlessly whether hosted at a subpath (like GitHub Pages) or a dedicated root domain.

### GitHub Pages (Subpath)
By default, the `npm run build` command applies a `pathPrefix` of `/cdif4eosc-www/`. This ensures all internal links, images, and stylesheets resolve correctly at `codata.github.io/cdif4eosc-www/`.

### Custom Domain (Root)
If you move the site to a root domain (e.g., `ddi4eosc.eu`), you have two options:
1. **Command Line**: Run the build without the environment variable: `npx @11ty/eleventy`.
2. **Config Change**: Update `.eleventy.js` to set `pathPrefix: "/"` even in production.

---

## 📝 Content Management

### Updating the Main Page
All primary content is managed in **`src/index.md`**.
- Use standard **Markdown** for text and lists.
- You can embed **HTML** directly for specialized layouts (like the hero or consortium sections).
- Always use the **`| url` filter** for internal links or asset paths to ensure compatibility with path prefixing:
  ```html
  <img src="{{ "/assets/images/my-image.png" | url }}">
  ```

### Adding Assets
- Place new images in `src/assets/images/`.
- Update the main stylesheet in `src/assets/css/style.css`.

---

## 🎨 Design System

- **Technical Blueprint**: The page uses a technical grid background to symbolize data interoperability.
- **Zero-JS Mobile Nav**: The responsive menu uses a CSS-only checkbox toggle for maximum performance and reliability.
- **Glassmorphism**: Section components (like Work Packages) use tonal depth and blur effects instead of traditional borders.

---

© 2026 CODATA | CDIF4EOSC Initiative
