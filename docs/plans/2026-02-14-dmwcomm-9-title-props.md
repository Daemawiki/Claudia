# DMWCOMM-9 TitleProps noShow Contract Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Resolve TypeScript `TitleProps` contract mismatch caused by `noShow` usage in list/category pages without refactoring unrelated page UI.

**Architecture:** Identify real `noShow` call sites first, then patch the exact `Title` component they import. Keep the fix contract-focused: add only required prop definitions and minimal behavior needed to keep existing rendering stable.

**Tech Stack:** Next.js App Router, React 18 client components, TypeScript strict mode.

---

### Task 1: Capture DMWCOMM-9 baseline errors and call sites

**Files:**

- Verify: `src/app/**` files that pass `noShow` to `Title`
- Verify: actual `Title` component file imported by those call sites

**Step 1: Discover real `noShow` call sites**

```bash
grep -R "noShow" src/app --include "*.tsx"
```

Record each caller file and the import path it uses for `Title`.

**Step 2: Run baseline typecheck**

```bash
yarn tsc --noEmit
```

Expected:

- Confirm `TitleProps` errors are present on `noShow` (and related missing props if surfaced).

**Step 3: Scope lock**

Only fix `TitleProps` contract mismatch for this ticket. Do not include ESLint config or Sidebar changes.

**Step 4: Baseline decision branch**

- If `noShow`-related type errors are present: proceed.
- If not present: stop and close DMWCOMM-9 as already resolved.

### Task 2: Implement minimal Title contract fix on the actual shared file

**Files:**

- Modify: exact `Title` file used by `noShow` call sites (currently expected: `src/app/(with-header)/document/[id]/Title.tsx`)

**Step 1: Add only missing optional props required by current call sites**

At minimum, include `noShow?: boolean` if that is what typecheck reports.

**Step 2: Apply minimal runtime behavior for noShow**

Use `noShow` to conditionally hide the views block in `Title` while preserving current default behavior.

**Step 3: Keep diff focused**

Do not redesign typography/layout in this ticket; only adjust what is needed for contract compatibility.

### Task 3: Verify and classify outcomes

**Step 1: Run typecheck after fix**

```bash
yarn tsc --noEmit
```

Expected:

- `TitleProps noShow` errors in discovered call-site paths are removed.
- Any remaining failures are documented as pre-existing and out-of-scope.

**Step 2: Run lint for blocker classification**

```bash
yarn lint
```

Expected:

- Existing airbnb config load failure may remain (tracked separately by DMWCOMM-10).

**Step 3: Changed-file diagnostics**

Run diagnostics on modified files and ensure no new diagnostics.

### Task 4: Verification workflow and closeout

**Step 1: 1st checkpoint (plan readiness)**

Validate this plan is executable and ticket-scoped.

**Step 2: 2nd checkpoint (post-implementation, pre-PR)**

Run local code verification and targeted UI sanity for pages using `Title`.

**Step 3: PR and 3rd checkpoint (PR-level gate)**

Create PR with evidence, re-run typecheck/lint classification and UI sanity checks on PR HEAD, and merge only when no DMWCOMM-9-attributable blocker remains (or explicit waiver).
