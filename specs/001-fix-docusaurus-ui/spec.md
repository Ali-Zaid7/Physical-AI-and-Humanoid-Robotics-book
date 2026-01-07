# Feature Specification: Docusaurus UI and Rendering Fixes

## 1. Overview

The goal of this feature is to correct several UI and rendering issues on the Docusaurus site to improve visual presentation and user experience. This includes fixing the header, navbar, and homepage hero section, as well as ensuring that embedded Mermaid diagrams render correctly instead of showing raw code. All changes must be strictly limited to configuration files and must not alter any book content.

## 2. User Scenarios

-   **As a visitor**, I want to see a clean and professional header with the correct site title ("Humanoid Robotics Book") and logo (`molvi.png`), so I can easily identify the website.
-   **As a visitor**, I want to use a clear navigation bar that directs me to the "Book" content and provides a "Contact" link to the author's LinkedIn profile.
-   **As a visitor**, I want to see a compelling hero section on the homepage that accurately describes the book's purpose and encourages me to start reading.
-   **As a reader**, I want to see rendered Mermaid diagrams within the book content, not raw code blocks, so I can understand the technical illustrations as intended.

## 3. Functional Requirements

-   **FR1 (Header Title)**: The site header MUST display the title "Humanoid Robotics Book".
-   **FR2 (Logo)**: The site logo MUST be the image located at `static/img/molvi.png`. All other logos, duplicated logos, or broken logo images MUST be removed.
-   **FR3 (Navbar - Book Link)**: The primary navigation link, originally "Tutorial", MUST be renamed to "Book".
-   **FR4 (Navbar - Contact Link)**: The navigation link originally labeled "Blog" MUST be renamed to "Contact" and its URL MUST point to `https://www.linkedin.com/in/ali-zaid-ba83a4381/`.
-   **FR5 (Homepage Title)**: The main title (H1) on the homepage hero section MUST be "Physical AI & Humanoid Robotics".
-   **FR6 (Homepage Subtitle)**: The subtitle/tagline on the homepage hero section MUST be "Build robots that see, think, and act. Complete guide to humanoid robotics with modern AI tools and hands-on projects.".
-   **FR7 (Homepage CTA)**: The primary call-to-action button on the homepage hero section MUST display the text "Start Reading 📖".
-   **FR8 (Mermaid Rendering)**: The Docusaurus site MUST be configured, using official Docusaurus methods only, to render all `mermaid` code blocks as visual diagrams.

## 4. Non-Functional Requirements

-   **NFR1 (Content Immutability)**: No existing book content (files within `docs/`, `blog/`, etc.) may be altered in any way.
-   **NFR2 (Targeted Changes)**: All code and configuration modifications MUST be strictly limited to `docusaurus.config.ts` and `src/pages/index.tsx`.
-   **NFR3 (Dependency Stability)**: No project dependencies may be added, removed, or have their versions changed.
-   **NFR4 (No Structural Changes)**: No project files or folders may be deleted, moved, or renamed.

## 5. Out of Scope

-   Modifying the text or structure of any markdown (`.md`, `.mdx`) files.
-   Adding or removing any Docusaurus plugins beyond what is required for Mermaid rendering via official, stable methods.
-   Changing the site's theme, color scheme, or overall styling beyond the specified text and logo changes.

## 6. Success Criteria

-   The site header title is verified to be "Humanoid Robotics Book".
-   The site logo is visually confirmed to be `molvi.png`.
-   The main navigation contains a "Book" link and a "Contact" link pointing to the correct LinkedIn URL.
-   The homepage hero section displays the exact title, subtitle, and button text as specified in the functional requirements.
-   A page containing a `mermaid` diagram code block is visited, and the diagram renders correctly.
-   A `git diff` against the `main` branch shows changes *only* in the `docusaurus.config.ts` and/or `src/pages/index.tsx` files.
-   The Docusaurus site builds and runs successfully using `npm run start` without any new errors or warnings related to the changes.

## 7. Assumptions

-   The image file `static/img/molvi.png` exists and is accessible at that path.
-   The project uses a standard Docusaurus setup where the header, navbar, and homepage hero are configurable via `docusaurus.config.ts` and `src/pages/index.tsx`.
-   Docusaurus provides an official, stable method for enabling Mermaid rendering via the main configuration file, which does not require modifying individual markdown files.