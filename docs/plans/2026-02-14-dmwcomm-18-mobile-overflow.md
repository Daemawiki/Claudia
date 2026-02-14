# DMWCOMM-18 Mobile Overflow Fix Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Remove mobile horizontal overflow on `/main`, `/team`, `/division`, `/recent`, and `/document/1` at `390x844` without changing desktop behavior.

**Architecture:** Apply a minimal layout-only fix in three proven overflow points: shared header nav row, `/team` hero first section, and `/document/[id]` content padding. Keep interactions and desktop layout behavior intact while eliminating page-level horizontal overflow on mobile.

**Tech Stack:** Next.js 14 App Router, React 18, Tailwind CSS, ESLint, TypeScript strict, Yarn via Corepack.

---

### Task 1: Toolchain preflight and baseline reproduction

**Files:**

- Modify: `src/components/Header.tsx`
- Modify: `src/app/(with-header)/team/page.tsx`
- Modify: `src/app/(with-header)/document/[id]/page.tsx`

**Step 1:** Confirm repo-valid Yarn runtime.
Run: `corepack enable`
Run: `corepack prepare yarn@4 --activate`
Run: `yarn --version`
Expected: Yarn major version `4` is printed.

**Step 2:** Install dependencies in fresh worktree.
Run: `yarn install`
Expected: Dependencies install without lockfile/toolchain errors.

**Step 3:** Run baseline typecheck.
Run: `yarn tsc --noEmit`
Expected: Baseline type status recorded.

**Step 4:** Start local server for visual baseline.
Run: `yarn dev -p 3018`
Expected: Local app starts on `http://localhost:3018`.

**Step 5:** Reproduce baseline overflow on required routes.
At viewport `390x844`, open `/main`, `/team`, `/division`, `/recent`, `/document/1` and run in browser console:

```js
Math.max(document.documentElement.scrollWidth, document.body.scrollWidth) >
  window.innerWidth;
```

Expected: At least one route returns `true` before fixes.

### Task 2: Header mobile overflow fix (shared routes)

**Files:**

- Modify: `src/components/Header.tsx`

**Step 1:** Make the first-row left cluster shrinkable.
Update the row/left group classes so nav can shrink on mobile (`min-w-0` on the left cluster parent).

**Step 2:** Constrain nav strip width on mobile.
In the nav container (`src/components/Header.tsx`, nav strip block), replace the current `flex-none` behavior with shrinkable + internally scrollable behavior (`min-w-0 max-w-full overflow-x-auto`) and keep item chips non-shrinking.

**Step 3:** Preserve interactions and desktop parity.
Keep existing click handlers and dropdown behavior unchanged; do not remove nav items.

### Task 3: Route-specific overflow fixes (`/team`, `/document/[id]`)

**Files:**

- Modify: `src/app/(with-header)/team/page.tsx`
- Modify: `src/app/(with-header)/document/[id]/page.tsx`

**Step 1:** Make `/team` hero first section responsive on mobile.
In the first hero row (`src/app/(with-header)/team/page.tsx`, top section), switch to mobile-safe stacking (`flex-col` on small viewport, `lg:flex-row` on desktop) so logo/text no longer exceed viewport width.

**Step 2:** Prevent `/document/[id]` mobile padding overflow.
Change the root container padding logic so `pl-[300px]` applies only on large viewport when sidebar is open (e.g. `openSidebar ? "pl-6 lg:pl-[300px]" : "pl-6"`).

**Step 3:** Keep desktop behavior unchanged.
Desktop (`lg`) with expanded sidebar should preserve current visual spacing.

### Task 4: 2nd local verification (implementation gate)

**Files:**

- Verify: `src/components/Header.tsx`
- Verify: `src/app/(with-header)/team/page.tsx`
- Verify: `src/app/(with-header)/document/[id]/page.tsx`

**Step 1:** Re-run scoped lint.
Run: `yarn lint -- --file src/components/Header.tsx --file "src/app/(with-header)/team/page.tsx" --file "src/app/(with-header)/document/[id]/page.tsx"`
Expected: No new lint issues introduced by this ticket.
Fallback: If repeated `--file` arguments are rejected, run `yarn lint` and classify failures as pre-existing vs ticket-introduced.

**Step 2:** Re-run typecheck.
Run: `yarn tsc --noEmit`
Expected: No new TypeScript errors introduced.

**Step 3:** Re-run build gate.
Run: `yarn build`
Expected: Build succeeds, or pre-existing failures are explicitly documented.

**Step 4:** Verify mobile overflow behavior on required routes.
At viewport `390x844`, verify `/main`, `/team`, `/division`, `/recent`, `/document/1` all satisfy:

```js
Math.max(document.documentElement.scrollWidth, document.body.scrollWidth) <=
  window.innerWidth;
```

**Step 5:** Verify desktop regression safety.
At desktop viewport (`>=1420px`), confirm no layout regression in `/team` hero and `/document/1` main content width.

**Step 6:** Confirm diff scope.
Run: `git status --porcelain`
Run: `git diff --name-only`
Expected: Only allowlisted source files changed (no lockfile/config/generated file changes).
Exception rule: If mobile overflow still reproduces on any required route after Tasks 2-3, expand to the minimum additional causal file(s) only, and record the reason for each added file in the PR description.
