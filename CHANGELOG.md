# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] - 2026-06-25

### Added
- **Enterprise Documentation & Architecture Guides (Release v1.0.0)**:
  - Generated and integrated the official high-resolution, vector-style **Ghost AI Logo** (`public/ghost_ai_logo.png`) as the project repository branding header.
  - Refactored `README.md` into an enterprise-ready portal featuring centered logo headers, detailed feature columns, environment variables specification matrices, and quick start guide paths.
  - Authored a comprehensive `ARCHITECTURE.md` specification detailing real-time sync states, multiplayer CRDT mapping, serverless background task schedules, Postgres schemas, and endpoint references.
  - Updated `CONTRIBUTING.md` developer guidelines with conventions for conventional commits and pull request checks.

### Changed
- Bounded package production version to stable release `v1.0.0`.

## [0.11.0] - 2026-06-25

### Added
- **AI Design Agent & Background Task Orchestration (Features 22-26)**:
  - Setup Trigger.dev v3 framework integration (`trigger.config.ts`, tasks configuration, and model fallbacks).
  - Implemented the Ghost AI Design Agent task (`trigger/design-agent.ts`) that mutates the Liveblocks canvas room storage to add, move, resize, and delete nodes/edges.
  - Implemented Clerk-authenticated endpoints (`/api/ai/design` and `/api/ai/design/token`) to trigger the design task and retrieve public access tokens.
  - Integrated the client-side design agent UI, including a chat feed with real-time thinking states, user/assistant bubble styling, and quick prompt chips.
- **Technical Specification Generator (Features 27-29)**:
  - Implemented the Spec Generator task (`trigger/generate-spec.ts`) utilizing the `@ai-sdk/google` provider to generate detailed markdown documentation from the canvas.
  - Configured Vercel Blob persistence for generated spec files and mapped them to database records via the `ProjectSpec` database model.
  - Created specs REST API endpoints (`/api/projects/[projectId]/specs`, `GET`, `POST`, `DELETE`, and download handlers) for Clerk-authorized project specs.
  - Integrated the Spec Tab interface within the AI Workspace Sidebar, providing dynamic spec generation buttons, static spec list widgets, download triggers, and real-time generation trackers.

### Changed
- **Database Schema**:
  - Expanded Prisma schema (`prisma/models/project.prisma`) with `ProjectSpec` and `TaskRun` models, ran database migrations, and regenerated the Prisma Client.
- **SSL Security Mode**:
  - Replaced deprecated `sslmode=require` database connection alias with explicit `sslmode=verify-full` in `.env.local` to satisfy security warnings in `pg-connection-string`.

### Fixed
- **ESLint & TypeScript Conformance**:
  - Configured `eslint.config.mjs` to ignore Trigger.dev temporary build directories (`.trigger/**`) to prevent unrelated lint failures.
  - Resolved `exhaustive-deps` linter warnings and synchronous state updates inside `useEffect` in `ai-sidebar.tsx`.

## [0.11.0-alpha] - 2026-06-24

### Added
- **Presence Cursors & Collaborator Avatars (Feature 19)**:
  - Added live cursor presence rendering on the canvas using `@liveblocks/react` to display active user pointers along with their names and custom color.
  - Implemented the `<CollaboratorAvatars />` component in the canvas toolbar to display a list/stack of active collaborators currently in the room.
- **Canvas Auto Save (Feature 21)**:
  - Configured `@vercel/blob` storage integration for canvas persistence.
  - Implemented client-side canvas auto-save hook (`useCanvasAutosave`) debounced by 2 seconds.
  - Added visual save status indicator (idle, saving, saved, error).
  - Renamed `canvasJsonPath` database field to `canvasBlobUrl` in Prisma schema, generated updated client, and ran migration.
  - Added REST API endpoint `/api/projects/[projectId]/canvas` to fetch and store canvas state.

### Changed
- **Tailwind CSS v4 Classes (Feature 20)**:
  - Refactored `components/editor/ai-sidebar.tsx` fixed spacing scale, updating `top-[3.75rem]` to `top-15` and `w-[21rem]` to `w-84`.
- **Presence Cursor Ref Rendering (Bugfix)**:
  - Fixed a React render lifecycle error in `presence-cursors.tsx` by resolving cursor offsets inside `useEffect` and window resize listeners instead of directly querying the ref during rendering.

## [0.10.0-alpha] - 2026-06-24

### Added
- **Node Shapes, Formatting & Label Editing (Features 13 & 14)**:
  - Added double-click handlers to trigger direct inline text input editing on canvas node labels.
  - Custom styled 6 canvas shapes (rectangle, diamond, circle, pill, cylinder, hexagon) with tailored geometry, bounds, and alignment.
- **Node Colors Toolbar (Feature 15)**:
  - Created context floating toolbar on selected nodes allowing real-time theme color selection from an 8-color palette.
- **Custom Collaborative Edges (Feature 16)**:
  - Created customized connection edges featuring dashed svg paths, custom stroke widths, and hover-triggered delete buttons.
- **Ergonomics & Keyboard Shortcuts (Feature 17)**:
  - Created `useKeyboardShortcuts` hook supporting `Delete` / `Backspace` bindings to clear selected nodes or edges.
  - Created `<CanvasControls />` overlay for Canvas lock toggle, fit-to-view, zoom-in, and zoom-out operations.
- **Starter Templates (Feature 18)**:
  - Implemented `<StarterTemplatesModal />` providing Microservices, Layered, and Event-Driven diagrams to instantly populate blank rooms.

## [0.9.0-alpha] - 2026-06-24

### Added
- **Liveblocks Setup (Feature 10)**:
  - Installed `@liveblocks/node` dependency and set up the Liveblocks authorization endpoint (`/api/liveblocks-auth`) to issue session tokens for authorized users.
  - Linked Clerk user metadata (display name, avatar, and color from a 10-color palette) to the Liveblocks session identities.
- **Base Canvas (Feature 11)**:
  - Integrated `@xyflow/react` (React Flow) with Liveblocks using `@liveblocks/react-flow`.
  - Created `CanvasRoom` and `CanvasEditor` to load the dynamic collaborative whiteboard, including standard pan, zoom, grid dots background, and minimap.
- **Shape Panel (Feature 12)**:
  - Created a floating `ShapePanel` overlay supporting draggable buttons for 6 shape types (rectangle, diamond, circle, pill, cylinder, hexagon) with default sizes and fill/text color configurations.
  - Implemented the `onDrop` handler in `CanvasEditor` utilizing `screenToFlowPosition` to automatically convert drop coordinates and create new nodes in Liveblocks storage.
  - Refactored `CanvasNodeComponent` and handlers to match canonical Tailwind v4 suffix important styles (`!`).

## [0.8.0-alpha] - 2026-06-08

### Added
- **Editor Workspace Shell (Feature 08)**:
  - Created dynamic route `/editor/[roomId]` to load individual project workspace layouts.
  - Implemented authorization boundary checks using Clerk identities, rendering an `<AccessDenied />` screen for unauthorized users.
  - Integrated full 3-column workspace layout hosting the responsive sidebar, top navbar, canvas area with visual placeholder grid, and fixed right-hand AI panel toggle.
  - Refactored arbitrary Tailwind CSS v4 styles to use canonical classes and variables.
- **Collaborator Share Dialog (Feature 09)**:
  - Created REST API endpoints for project collaborators (`GET`, `POST`, `DELETE` under `/api/projects/[projectId]/collaborators`) supporting user invitations and access removals.
  - Integrated Clerk user lookup API to retrieve collaborator display names, primary emails, and avatar URLs.
  - Created `<ProjectShareDialog />` modal rendering a list of current active collaborators, copyable project URL, and invite forms.
  - Developed custom hook `useProjectShare` to manage permission states, form validations, and asynchronous mutations.

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
