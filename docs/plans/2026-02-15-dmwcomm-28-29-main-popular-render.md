# DMWCOMM-28-29 Main/Popular Rendering Recovery Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Restore meaningful rendering for `/main` and `/popular` on `origin/dev` so both routes no longer show header-only blank bodies.

**Architecture:** Keep the diff minimal and route-focused. Replace the current empty stub pages with the established implementations from the working baseline, then add only the missing wiki API/types/components required by `/popular`. Do not refactor unrelated UI domains in this ticket.

**Tech Stack:** Next.js 14 App Router, React 18, TypeScript strict, React Query, Tailwind CSS.

---

### Task 1: Scope lock and dependency inventory

**Files:**

- Verify: `src/app/(with-header)/main/page.tsx`
- Verify: `src/app/(with-header)/popular/page.tsx`
- Verify: `src/apis/index.ts`
- Verify: `src/components/index.ts`

**Step 1:** Confirm branch and clean baseline.
Run: `git status --short --branch`
Expected: branch `dmwcomm-28-29-main-popular-render`, no unrelated edits.

**Step 2:** Confirm current stubs.
Run: `git show HEAD:"src/app/(with-header)/main/page.tsx" && git show HEAD:"src/app/(with-header)/popular/page.tsx"`
Expected: both files are stub implementations (`return <></>`).

**Step 3:** Lock missing dependencies required by `/popular` implementation.
Run: `git grep -n "fetchPopularDocuments\|DocumentTable\|PageHeader\|PageSection" src`
Expected: unresolved references in current branch before adding wiki modules.

### Task 2: Restore `/main` route rendering

**Files:**

- Modify: `src/app/(with-header)/main/page.tsx`

**Step 1:** Replace stub with full route content.
Action: apply the established `Main` page implementation used in the current working baseline (hero + featured docs + people + guide sections + CTA flow).

**Step 2:** Validate imports remain within existing modules.
Action: ensure `Main` imports only available symbols (`Arrow_Short`, `Document`, `Quotes`, `next/navigation`, `useState`).

**Step 3:** Keep route behavior aligned.
Action: keep CTA links to `/division`, `/popular`, `/document/new`, `/division/student` as in baseline.

### Task 3: Restore `/popular` route rendering and required wiki modules

**Files:**

- Modify: `src/app/(with-header)/popular/page.tsx`
- Create: `src/interfaces/wiki.ts`
- Create: `src/apis/wiki.ts`
- Modify: `src/apis/index.ts`
- Create: `src/components/wiki/CategoryBadge.tsx`
- Create: `src/components/wiki/DocumentTable.tsx`
- Create: `src/components/wiki/PageHeader.tsx`
- Create: `src/components/wiki/PageSection.tsx`
- Create: `src/components/wiki/index.ts`
- Modify: `src/components/index.ts`

**Step 1:** Replace `/popular` stub.
Action: implement `Popular` route with React Query (`fetchPopularDocuments`) and loading/table states.

**Step 2:** Add wiki type contracts.
Action: add `WikiCategory`, `WikiDocumentSummary`, and related interfaces in `src/interfaces/wiki.ts`.

**Step 3:** Add wiki API module.
Action: add `src/apis/wiki.ts` with in-memory wiki dataset and exported helpers (`fetchPopularDocuments`, category labels, and supporting functions required by components).

**Step 4:** Wire API barrel export.
Action: update `src/apis/index.ts` to export `./wiki`.

**Step 5:** Add wiki UI components.
Action: add `CategoryBadge`, `DocumentTable`, `PageHeader`, `PageSection`, plus wiki barrel `src/components/wiki/index.ts`.

**Step 6:** Wire component barrel export.
Action: update `src/components/index.ts` to export `./wiki`.

### Task 4: Verification gate

**Files:**

- Verify all modified/created files above

**Step 1:** LSP diagnostics check.
Run diagnostics on each changed TS/TSX file.
Expected: no new diagnostics from changed files.

**Step 2:** Typecheck.
Run: `yarn tsc --noEmit`
Expected: exit 0.

**Step 3:** Scoped lint.
Run:
`yarn lint --file src/app/(with-header)/main/page.tsx --file src/app/(with-header)/popular/page.tsx --file src/apis/wiki.ts --file src/interfaces/wiki.ts --file src/components/wiki/CategoryBadge.tsx --file src/components/wiki/DocumentTable.tsx --file src/components/wiki/PageHeader.tsx --file src/components/wiki/PageSection.tsx --file src/components/wiki/index.ts --file src/apis/index.ts --file src/components/index.ts`
Expected: if non-zero, classify pre-existing/global vs new route-scope issues.

**Step 4:** Build check.
Run: `yarn build`
Expected: if non-zero, classify failure source and confirm whether caused by this diff.

**Step 5:** Runtime smoke.
Run: `yarn dev`
Action:

1. Verify `/main` renders non-empty body on desktop/mobile.
2. Verify `/popular` renders header and loading/table area on desktop/mobile.
3. Confirm no header-only blank body for these routes.

### Task 5: Delivery preparation

**Files:**

- Verify changed-file list only contains issue-scope files

**Step 1:** Scope confirmation.
Run: `git diff --name-only`
Expected: only route recovery + wiki dependency files + this plan doc.

**Step 2:** Commit/PR prep (when requested).
Action: split commits by concern (plan doc vs route/wiki implementation) and prepare PR targeting `dev` with `Closes #80` and `Closes #81`.
