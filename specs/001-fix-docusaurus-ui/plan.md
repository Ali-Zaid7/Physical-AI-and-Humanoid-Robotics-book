# Implementation Plan: Docusaurus UI and Rendering Fixes

## 1. Technical Context

This plan outlines the steps to apply several UI and rendering fixes to the Docusaurus website. The changes are strictly confined to configuration and a single React component to avoid any impact on the existing book content.

-   **Project**: Docusaurus v3 website for the "Physical AI & Humanoid Robotics" book.
-   **Key Files**: `docusaurus.config.ts`, `src/pages/index.tsx`.
-   **Dependencies**: No changes to dependencies are required. The plan will use existing Docusaurus features.
-   **Clarifications**: No pending clarifications. The specification is precise.

## 2. Constitution Check

-   **I. Spec-First Execution**: This plan is derived directly from an approved spec. **(PASS)**
-   **II. Technical Correctness**: The changes involve standard Docusaurus configuration and React component modification, adhering to correct technical practices. **(PASS)**
-   **III. Progressive Clarity**: Not applicable to this UI fix.
-   **IV. Practical Grounding**: Not applicable to this UI fix.
-   **V. AI-Compatible Structure**: The changes are structured and will be committed atomically, maintaining a clean history. **(PASS)**
-   **Docusaurus Requirements**: All changes will be made in Docusaurus-compatible files and respect the existing structure. **(PASS)**

**Result**: All applicable constitutional principles are met.

## 3. Implementation Phases

### Phase 0: Research
No research is required. The feature specification is clear and relies on standard Docusaurus functionality.

### Phase 1: Design & Contracts
-   **Data Model**: Not applicable, as no new data entities are being created.
-   **API Contracts**: Not applicable.

### Phase 2: Implementation Plan

#### Step 2.1: Update Header, Navbar, and Mermaid Config
**File to Modify**: `docusaurus/docusaurus.config.ts`

**Changes**:
1.  **Title**: Locate the `title` property and set its value to `"Humanoid Robotics Book"`.
2.  **Logo**: Find the `navbar.logo` configuration. Update the `src` property to `'img/molvi.png'`. Ensure any duplicate or incorrect logo configurations are removed.
3.  **Navbar Items**:
    -   Find the item with `label: 'Tutorial'` and change it to `label: 'Book'`.
    -   Find the item with `label: 'Blog'`. Change its `label` to `'Contact'` and add an `href` property with the value `'https://www.linkedin.com/in/ali-zaid-ba83a4381/'`. Remove any `to` property if it exists on this item.
4.  **Mermaid Configuration**:
    -   Add `markdown: { mermaid: true }` to the main config object.
    -   Add `themes: ['@docusaurus/theme-mermaid']` to the main config object.
    -   If a `themeConfig.mermaid` object does not exist, add one with a default theme: `mermaid: { theme: { light: 'neutral', dark: 'dark' } }`.

#### Step 2.2: Update Homepage Hero Section
**File to Modify**: `docusaurus/src/pages/index.tsx`

**Changes**:
1.  Locate the `HomepageHeader` function or equivalent component that renders the hero section.
2.  Update the main title (`<h1>` or `<Heading>`) to be `"Physical AI & Humanoid Robotics"`.
3.  Update the subtitle (`<p>`) to be `"Build robots that see, think, and act. Complete guide to humanoid robotics with modern AI tools and hands-on projects."`.
4.  Update the call-to-action button text to be `"Start Reading 📖"`.

---

This plan will now be broken down into specific, actionable tasks.