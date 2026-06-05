# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase
- Feature 05 (Prisma) — complete

## Current Goal
- Feature 06 (TBD)

## Completed

- Feature 05: Prisma Integration — Added `Project` and `ProjectCollaborator` database models under `prisma/models/project.prisma` using Prisma 7 schema splitting. Configured cached singleton client in `lib/prisma.ts` branching on `DATABASE_URL` (Accelerate vs Pg adapter). Ran migration and generated local client in `app/generated/prisma`. Verified type safety via `npm run build`.
- Feature 04: Project Dialogs — Created `useProjectDialogs` hook to manage mock projects list, dialog states (create, rename, delete), loading delay, and form input/live slug generation. Created `ProjectDialogs` component rendering responsive dialog modals. Updated `ProjectSidebar` to list owned/shared projects and render rename/delete action triggers on hover. Updated `app/editor/page.tsx` to wire sidebar action parameters and dialog layout.
- Feature 01: Design System — shadcn/ui installed and configured for Tailwind v4, dark-only theme tokens in globals.css, Button/Card/Dialog/Input/Tabs/Textarea/ScrollArea components added to components/ui/, lucide-react installed, lib/utils.ts cn() helper in place. TypeScript compiles clean.
- Feature 02: Editor Chrome — EditorNavbar (fixed top bar with PanelLeftOpen/PanelLeftClose toggle) and ProjectSidebar (fixed overlay, slides from left, Projects title + close button, My Projects/Shared tabs with empty states, New Project button) added to components/editor/. Dialog pattern confirmed ready via existing components/ui/dialog.tsx. app/page.tsx rewired with sidebar state management and canvas placeholder. TypeScript and ESLint clean.
- Feature 03: Auth — Clerk auth wired end-to-end. ClerkProvider wraps root layout with dark base theme and CSS variable overrides (no hardcoded colors). proxy.ts at project root uses clerkMiddleware with createRouteMatcher to protect all routes except /sign-in and /sign-up. Sign-in and sign-up pages under app/(auth)/ route group with two-panel layout (left: compact logo, tagline, text feature list; right: centered Clerk form; collapses to form-only on small screens). Root page.tsx redirects authenticated users to /editor and unauthenticated to /sign-in. Editor moved to app/editor/page.tsx. UserButton added to EditorNavbar right section for profile and logout. @clerk/themes installed for dark theme. npm run build passes clean.

## In Progress

- None.

## Next Up
- Feature 06 (TBD)

## Open Questions

- None yet.

## Architecture Decisions

- shadcn/ui over Tailwind v4 (CSS-based token config via @theme inline in globals.css, no tailwind.config.js).
- Dark-only theme: all shadcn :root variables set to dark values directly — no .dark class switching.
- Do not modify generated components/ui/* files after shadcn installation.
- Editor chrome components live under components/editor/.
- Sidebar is a floating overlay — does not push page content.
- Next.js 16 uses proxy.ts instead of middleware.ts for route-level middleware.
- Clerk appearance uses CSS variables from the design system, not hardcoded colors.
- Auth pages live under app/(auth)/ route group for shared two-panel layout.
- Root / is a redirect-only page — no UI content.

## Session Notes

- Using Next.js 16.2.7 with React 19 and Tailwind CSS v4.
- shadcn version 4.10.0 was used; it auto-detected Tailwind v4.
- lucide-react installed as a direct dependency.
- Version 0.2.1-alpha released: Updated and styled the LICENSE file with a custom ASCII-art layout branded with GHOST-AI.
- Version 0.3.0-alpha released: Full Clerk auth integration — provider, proxy, auth pages, redirects, route protection, UserButton.
- Version 0.4.0-alpha released: Implement project dialog actions (create, rename, delete) using React custom hook and state-management, rendering hover actions on ProjectSidebar, and mobile-responsive backdrop.
- Version 0.5.0-alpha released: Set up Prisma 7 schema models, cached client singleton with connection URL branching, database migrations, and local type-safe client generation.
