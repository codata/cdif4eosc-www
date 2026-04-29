
# Project Brief: CDIF4EOSC Microsite Creation

**Project Name:** CDIF4EOSC Microsite
**Status:** New Project
**Date:** 2026-04-29
**Priority:** High

---

## 1. Project Overview
We need to create a new microsite for the "CDIF4EOSC" initiative. The primary goal is to migrate the existing content from the current website and present it in a new, modern, and user-friendly format. This project will be built using **11ty**, a static site generator, ensuring fast performance and easy maintainability.

---

## 2. Objectives

- **Migration:** Transfer the complete content from the current CDIF4EOSC website to the new platform.
- **Design:** Apply the design aesthetics and guidelines from our existing "CDIF for EOSC Microsite" project (Stitch Project ID: **7126616463869757744**).
- **Technology:** Use **11ty** as the static site generator.
- **Content Management:** Structure the site so that content can be easily maintained in **Markdown** format.
- **Deployment:** Set up **GitHub Actions** to automate the build and deployment process to GitHub Pages.

---

## 3. Scope

### 3.1 In Scope

- **Content Migration:**
  - Capture all text, headings, and subheadings.
  - Preserve all images, ensuring they are properly optimized and displayed.
  - Migrate tables, lists, and any other formatting elements.
- **Design Implementation:**
  - Use the color palette, typography, and layout patterns from the reference Stitch project.
  - Maintain a responsive design that works on desktop, tablet, and mobile devices.
- **Site Structure:**
  - A clear, single-page layout that is easy to navigate.
  - Consider adding a sticky navigation bar for better UX.
- **Technical Requirements:**
  - Clean, semantic HTML5 structure.
  - Minimal and efficient CSS.
  - Optimized images (WebP where appropriate).

### 3.2 Out of Scope

- Development of new content (only existing content will be migrated).
- Integration with external APIs (unless strictly necessary for displaying existing content).
- Complex interactive features beyond what is present in the current site.

---

## 4. Source Material

- **Target Website:** https://codata.org/initiatives/making-data-work/cdif4eosc/
- **Design Reference:** Stitch Project ID `7126616463869757744`

---

## 5. Deliverables

- A complete 11ty project repository.
- Source files (Markdown content, Nunjucks templates, CSS, JS).
- A `.github/workflows/` directory containing the deployment pipeline.
- Clear documentation on how to update content.

---

## 6. Success Criteria

- The new site loads successfully and displays all content from the source URL.
- The visual design matches the reference Stitch project's style.
- The site is fully responsive and functional on mobile devices.
- Changes made to Markdown files are automatically reflected on the live site via GitHub Actions.
- The code is clean, well-organized, and follows best practices.
