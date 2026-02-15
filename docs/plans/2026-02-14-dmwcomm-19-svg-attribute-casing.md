# DMWCOMM-19 SVG Attribute Casing Fix Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Remove React invalid DOM property warnings caused by kebab-case SVG attributes in asset icons, without changing icon appearance.

**Architecture:** Perform mechanical JSX attribute renames only (`stroke-linecap` -> `strokeLinecap`, etc.) in affected asset files. Keep path data, dimensions, and component APIs unchanged.

**Tech Stack:** Next.js 14, React 18, TypeScript strict, ESLint, Yarn via Corepack.

---

### Task 1: Baseline and scope lock

**Files:**

- Modify: `src/assets/Arrow_Short.tsx`
- Modify: `src/assets/Book.tsx`
- Modify: `src/assets/Calendar.tsx`
- Modify: `src/assets/Notebook.tsx`
- Modify: `src/assets/Warn.tsx`

**Step 1:** Confirm Yarn 4 toolchain (avoid unnecessary global changes).
Run: `yarn --version`
Expected: Yarn major version `4` is printed.

If NOT `4.x`:
Run: `corepack enable`
Run: `corepack prepare yarn@4 --activate`
Run: `yarn --version`
Expected: Yarn major version `4` is printed.

If `corepack` is unavailable, use a Node runtime that includes Corepack and retry.

**Step 2:** Install dependencies in fresh worktree.
Run: `yarn install`
Expected: Install completes without lockfile/config changes.

Run: `git status --porcelain`
Expected: No output (dependency install did not modify tracked files).

**Step 3:** Run scoped lint baseline for affected files.
Run: `yarn lint -- --file src/assets/Arrow_Short.tsx --file src/assets/Book.tsx --file src/assets/Calendar.tsx --file src/assets/Notebook.tsx --file src/assets/Warn.tsx`
Fallback: if repeated `--file` fails, run `yarn lint` and classify failures as pre-existing vs introduced.

**Step 4:** Run baseline typecheck.
Run: `yarn tsc --noEmit`

**Step 5:** Capture deterministic baseline evidence (pre-change).
Action: Open the five allowlisted files and confirm kebab-case attributes (`stroke-linecap`, `stroke-linejoin`, `stroke-width`) are present before fix.
Expected: At least one kebab-case attribute is found across the allowlisted files.

**Step 6:** Runtime warning baseline (fresh session).
Run: `yarn dev`
Action:

1. Start from a fresh terminal session (or stop the existing dev server in the same terminal with `Ctrl+C` and restart).
2. Open a fresh browser session/incognito window.
3. Open `http://localhost:3000/division`.
4. Confirm page renders normally (no runtime crash; cards/icons visible).
5. Clear console.
6. Hard reload (`Cmd+Shift+R`/`Ctrl+Shift+R`).
7. Record warnings containing exact substring `Invalid DOM property` and one of `stroke-linecap|stroke-linejoin|stroke-width`.
   Expected: At least one matching warning is recorded before fix.

### Task 2: Mechanical attribute casing normalization

**Files:**

- Modify: the five allowlisted `src/assets/*.tsx` files above

**Step 1:** Rename invalid SVG attributes to React casing.
Allowed changes:

- `stroke-linecap` -> `strokeLinecap`
- `stroke-linejoin` -> `strokeLinejoin`
- `stroke-width` -> `strokeWidth`
- (if encountered) `fill-rule` -> `fillRule`, `clip-rule` -> `clipRule`

**Step 2:** Preserve rendering behavior.
Do not change path coordinates, viewBox, width/height defaults, event handlers, or exported component names.

### Task 3: 2nd local verification gate

**Files:**

- Verify: five allowlisted asset files

**Step 1:** Re-run scoped lint.
Run: `yarn lint -- --file src/assets/Arrow_Short.tsx --file src/assets/Book.tsx --file src/assets/Calendar.tsx --file src/assets/Notebook.tsx --file src/assets/Warn.tsx`

**Step 2:** Re-run typecheck.
Run: `yarn tsc --noEmit`

**Step 3:** Run production build.
Run: `yarn build`
Expected: Build completes successfully.

**Step 4:** Runtime smoke check (same baseline flow, fresh session).
Run: `yarn dev`
Action:

1. Start from a fresh terminal session (or stop the existing dev server in the same terminal with `Ctrl+C` and restart).
2. Open fresh browser session/incognito.
3. Open `http://localhost:3000/division`.
4. Confirm page renders normally (no runtime crash; cards/icons visible).
5. Clear console.
6. Hard reload.
7. Confirm no warnings match exact substring `Invalid DOM property` with `stroke-linecap|stroke-linejoin|stroke-width`.
   Expected: Zero matching warnings after fix.

**Step 5:** Confirm diff scope.
Run: `git status --porcelain`
Run: `git diff --name-only`
Expected: Only the five allowlisted `src/assets/*.tsx` files changed.
