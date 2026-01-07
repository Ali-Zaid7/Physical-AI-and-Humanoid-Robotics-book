# Tasks: Docusaurus UI and Rendering Fixes

This document outlines the sequential and parallelizable tasks required to implement the specified UI and rendering fixes for the Docusaurus site.

## Implementation Strategy

The implementation will be executed in two main phases. Phase 1 will address all configuration-level changes in `docusaurus.config.ts`, including the header, navbar, and Mermaid rendering. Phase 2 will handle the content changes for the homepage hero section in `src/pages/index.tsx`. This separation ensures that configuration and component-level work are handled independently.

## Phases

### Phase 1: Site-Wide Configuration Updates

**Goal**: Apply all necessary changes to `docusaurus.config.ts` to update the site's branding, navigation, and diagram rendering capabilities.

**Independent Test Criteria**:
- After this phase, running the Docusaurus development server should show the updated site title, the new logo (`molvi.png`), and the corrected navbar links ("Book" and "Contact").
- Mermaid diagrams in the documentation should render as images instead of code blocks.

**Tasks**:
- [x] T001 [P] In `docusaurus/docusaurus.config.ts`, set the `title` property to `"Humanoid Robotics Book"`.
- [x] T002 [P] In `docusaurus/docusaurus.config.ts`, locate the `navbar.logo` object and update its `src` property to `'img/molvi.png'`.
- [x] T003 [P] In `docusaurus/docusaurus.config.ts`, find the navbar item with the label `'Tutorial'` and change its `label` to `'Book'`.
- [x] T004 [P] In `docusaurus/docusaurus.config.ts`, find the navbar item for the blog, change its `label` to `'Contact'`, and set its `href` to `'https://www.linkedin.com/in/ali-zaid-ba83a4381/'`, removing the `to` property.
- [x] T005 [P] In `docusaurus/docusaurus.config.ts`, add the `markdown: { mermaid: true }` property to the main config object.
- [x] T006 [P] In `docusaurus/docusaurus.config.ts`, add the `themes: ['@docusaurus/theme-mermaid']` property to the main config object.

### Phase 2: Homepage Hero Section Update

**Goal**: Update the hero section content on the homepage to reflect the project's new branding and messaging.

**Independent Test Criteria**:
- After this phase, the homepage on the development server must display the new title, subtitle, and call-to-action button text exactly as specified.
- The layout and styling of the hero section should remain unchanged.

**Tasks**:
- [x] T007 [P] In `docusaurus/src/pages/index.tsx`, find the `HomepageHeader` component.
- [x] T008 [T007] In the `HomepageHeader` component, change the main heading's text to `"Physical AI & Humanoid Robotics"`.
- [x] T009 [T007] In the `HomepageHeader` component, change the paragraph/subtitle text to `"Build robots that see, think, and act. Complete guide to humanoid robotics with modern AI tools and hands-on projects."`.
- [x] T010 [T007] In the `HomepageHeader` component, change the button's text to `"Start Reading 📖"`.

### Phase 3: Final Validation

**Goal**: Verify that all changes have been applied correctly and have not introduced any regressions.

**Tasks**:
- [x] T011 After all previous tasks are complete, start the development server.
- [x] T012 [T011] Visually confirm all changes from Phase 1 and 2 are correctly displayed in the browser.
- [x] T013 [T011] Confirm that no files other than `docusaurus.config.ts` and `docusaurus/src/pages/index.tsx` have been modified.

## Dependencies

The two main phases are independent of each other and can be executed in any order. However, within Phase 2, tasks T008, T009, and T010 depend on locating the correct component in T007.

- **Phase 1** -> **Phase 3**
- **Phase 2** -> **Phase 3**

## Parallel Execution

- All tasks in Phase 1 (T001-T006) can be executed in parallel as they all modify the same file (`docusaurus.config.ts`) but target different, independent properties within it.
- Tasks in Phase 2 (T008-T010) can also be executed in parallel after the initial component is located (T007).
