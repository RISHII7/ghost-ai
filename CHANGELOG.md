# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [0.7.1-alpha] - 2026-06-08

### Fixed
- Fixed build failure on CI/CD environments by prepending `prisma generate` to the `build` script in `package.json` to automatically compile the type-safe Prisma client before Next.js compiles.

## [0.7.0-alpha] - 2026-06-05

### Added
- Switched the main `/editor` route handler to an async server component to fetch owned and shared projects server-side.
- Implemented server-side data fetching helper `getProjectsForUser` (`lib/projects.ts`) to query database records concurrently.
- Created `EditorHomeClient` (`components/editor/editor-home-client.tsx`) as a shared client shell for editor workspace views.
- Created `useProjectActions` hook (`hooks/use-project-actions.ts`) to coordinate modal interactions and API mutations (POST, PATCH, DELETE) for real project data.
- Configured dynamic room ID slugification with randomized short suffixes when creating new projects.
- Integrated `ProjectSidebar` and `ProjectDialogs` components with real backend-bound API mutations and navigation routing hooks.

## [0.6.0-alpha] - 2026-06-05

### Added
- Created backend REST API endpoints for listing (`GET /api/projects`) and creating (`POST /api/projects`) projects.
- Created dynamic REST API endpoints for renaming (`PATCH /api/projects/[projectId]`) and deleting (`DELETE /api/projects/[projectId]`) projects.
- Integrated dynamic path parameters under Next.js 16 requirements by awaiting `params`.
- Implemented Clerk-based authentication and user verification, returning `401` status for unauthenticated requests and `403` status for unauthorized project mutations (non-owner updates/deletions).
- Configured default parameter fallback naming projects to `"Untitled Project"` and supporting optional custom ID parameter overrides.

## [0.5.0-alpha] - 2026-06-05

### Added
- Implemented database models `Project` and `ProjectCollaborator` using Prisma 7 schema splitting inside `prisma/models/project.prisma`.
- Configured project schemas with status enums (`DRAFT`, `ARCHIVED`), owner ID indexes, cascade deletes on collaborator associations, unique email constraints, and compound indexes.
- Created `lib/prisma.ts` cached client singleton that branches on `DATABASE_URL`:
  - Directly instantiates `PrismaClient` for `prisma+postgres://` protocols (Accelerate).
  - Uses `@prisma/adapter-pg` with a PostgreSQL connection pool otherwise.
- Ran the first migration (`20260605142318_init`) and generated the local type-safe client in `app/generated/prisma`.

### Fixed
- Fixed ESLint explicit `any` error in `lib/prisma.ts` constructor casting.

## [0.4.0-alpha] - 2026-06-05

### Added
- Created a dedicated React hook `hooks/use-project-dialogs.ts` centralizing state management for mock projects list, active dialog types (create, rename, delete), loading delay (400ms), name input, and automatic live slug generation.
- Created `<ProjectDialogs />` component in `components/editor/project-dialogs.tsx` hosting modals for Create Project (featuring live slug preview with monospaced typography and layout-stability minimum height), Rename Project (auto-focusing and prefilled), and Delete Project (destructive confirmations).
- Updated `<ProjectSidebar />` in `components/editor/project-sidebar.tsx` to list owned ("My Projects") vs shared ("Shared") projects.
- Added rename (pencil) and delete (trash) icons next to owned projects in the sidebar that fade in on hover (`group-hover:opacity-100`), while suppressing these actions on shared/collaborator projects.
- Constrained the sidebar's backdrop scrim to mobile layouts (`md:hidden`), allowing desktop canvas interactions to occur while keeping the sidebar open, and configured backdrop clicks to dismiss the sidebar on mobile.
- Updated `app/editor/page.tsx` to integrate with `useProjectDialogs` and wire the centered Editor Home view (heading, description, and "New Project" trigger).

### Changed
- Adjusted the ASCII art border width and spacing inside the `LICENSE` file.

## [0.3.0-alpha] - 2026-06-05

### Added
- Integrated Clerk auth end-to-end (ClerkProvider, sign-in, and sign-up).
- Added a two-panel visual layout for auth pages (`app/(auth)/layout.tsx`) featuring branding, dark themed messaging, list of feature points on the left (40% width, hides on mobile), and Clerk form on the right (60% width).
- Added custom styling to Clerk via CSS design system variable mapping (`var(--color-bg-base)`, etc.) in `app/layout.tsx`.
- Implemented route protection using Next.js 16 root `proxy.ts`, configuring route matching to protect all editor paths while allowing public access to `/sign-in` and `/sign-up`.
- Added redirects on the root page (`app/page.tsx`) directing authenticated users to `/editor` and unauthenticated users to `/sign-in`.
- Added `UserButton` to `EditorNavbar` to support profile settings and sign out.

### Fixed
- Fixed bug where the editor sidebar failed to open or close due to a property mismatch (`isSidebarOpen` and `onToggleSidebar` passed instead of `isOpen` and `onToggle` expected by `EditorNavbar`).

## [0.2.1-alpha] - 2026-06-02

### Changed
- Replaced the standard MIT License with a premium, styled ASCII art layout branded with "GHOST-AI", outlining repository metadata and clear checkmark lists for permissions, conditions, and limitations.

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
