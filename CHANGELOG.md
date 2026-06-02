# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [0.2.0-alpha] - 2026-06-02

### Added
- Created `components/editor/editor-navbar.tsx` — fixed-height top navbar with left/center/right sections and sidebar toggle button using `PanelLeftOpen`/`PanelLeftClose` icons.
- Created `components/editor/project-sidebar.tsx` — floating overlay sidebar that slides in from the left without pushing page content, featuring:
  - Header with "Projects" title and close button
  - shadcn `Tabs` component with "My Projects" and "Shared" tabs (both with empty placeholder states)
  - Full-width "New Project" button with `Plus` icon at the bottom
  - Backdrop overlay for click-to-close behavior
- Added `context/feature-specs/02-editor.md` feature specification for editor chrome.

### Changed
- Rewired `app/page.tsx` to compose the editor layout with `EditorNavbar`, `ProjectSidebar`, and a canvas placeholder area with sidebar toggle state management.
- Updated `context/progress-tracker.md` to reflect Phase 2 completion.

## [0.1.2-alpha] - 2026-06-02


### Added
- Initialized and configured `shadcn/ui` with Next.js and Tailwind CSS v4 compatibility.
- Installed `lucide-react` for stroke-based interface icons.
- Installed core `shadcn/ui` primitive components in `components/ui/`:
  - `Button`, `Card`, `Dialog`, `Input`, `Tabs`, `Textarea`, `ScrollArea`
- Added workspace settings in `.vscode/settings.json` to ignore unknown Tailwind v4 CSS at-rules (`@theme`, `@apply`, `@custom-variant`).

### Changed
- Configured visual styling variable tokens in `app/globals.css` with the dark technical workspace palette specified in `ui-context.md`.

### Fixed
- Added `@emnapi/core` and `@emnapi/runtime` as development dependencies to prevent lockfile sync failures on Linux-based CI runners.


## [0.1.1-alpha] - 2026-06-02


### Added
- Created agent application building context files under `context/`:
  - `project-overview.md` (Product goals, user personas, core feature flow)
  - `architecture-context.md` (Data schemas, state synchronization, background workers)
  - `ui-context.md` (Layouts, themes, interactive canvas requirements)
  - `code-standards.md` (Coding style and standards)
  - `ai-workflow-rules.md` (Task breakdown, PR practices, testing rules)
  - `progress-tracker.md` (Project phase and checklist tracking)

### Changed
- Updated `AGENTS.md` rule instructions to integrate context verification for AI agents.

## [0.1.0-alpha] - 2026-06-02


### Added
- Enterprise-grade documentation templates (`README.md`, `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, `CHANGELOG.md`, `LICENSE`, `.env.example`).
- Standard GitHub templates for Issues and Pull Requests.
- CI Workflow for code quality validation.

### Changed
- Cleaned up Next.js boilerplate.
- Stripped `app/globals.css` to only use Tailwind v4 directives.
- Replaced `app/page.tsx` with a minimal centered `"ghost AI"` placeholder.

### Removed
- Unused SVG assets from the `public` directory.
