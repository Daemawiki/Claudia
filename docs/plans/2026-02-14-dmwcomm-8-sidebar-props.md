# DMWCOMM-8 Sidebar Props Contract Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Remove the `Sidebar` prop contract mismatch on document userInfo pages while preserving current document-page sidebar behavior.

**Architecture:** Keep one `Sidebar` component and make its prop contract safe for both call sites. Interactive mode (document detail page) continues to use open-state sync and TOC scrolling. Fixed mode (userInfo page) must render without requiring interactive-only props.

**Tech Stack:** Next.js App Router, React 18 client components, TypeScript strict mode, Tailwind CSS.

---

### Task 1: Reproduce and define exact baseline

**Files:**

- Verify: `src/components/Sidebar.tsx`
- Verify: `src/app/(with-header)/document/[id]/page.tsx`
- Verify: `src/app/(with-header)/document/[id]/userInfo/page.tsx`

**Step 1: Capture typecheck baseline**

Run:

```bash
corepack yarn tsc --noEmit
```

Expected:

- Record all current errors.
- Explicitly identify whether `Sidebar fixed` prop mismatch is present.

**Step 2: Handle baseline mismatch decision**

- If `Sidebar fixed` mismatch is present: continue with this plan.
- If not present: identify the actual DMWCOMM-8-attributable failure first.
- If no DMWCOMM-8-attributable failure exists: stop implementation and close ticket as already resolved.

**Step 3: Confirm ticket scope boundary**

The only in-scope fix is DMWCOMM-8 (`Sidebar` prop mismatch for userInfo usage). Do not include TitleProps or ESLint config fixes in this ticket.

### Task 2: Implement minimal Sidebar contract fix

**Files:**

- Modify: `src/components/Sidebar.tsx`

**Step 1: Update prop contract for dual usage**

Make interactive-only props safe for fixed mode usage, and keep document page behavior intact.

**Step 2: Guard interactive side effects**

Guard open-state sync logic so fixed-mode rendering does not call undefined callbacks.

**Step 3: Guard TOC rendering inputs**

Use safe defaults for TOC list access so rendering works when TOC data is not supplied.

**Step 4: Verify changed file compiles cleanly**

Run:

```bash
corepack yarn tsc --noEmit
```

Expected:

- `Sidebar fixed` prop mismatch is removed.
- Any remaining errors are documented as pre-existing and out-of-scope.

**Step 5: Commit**

```bash
git add src/components/Sidebar.tsx
git commit -m "fix :: Sidebar fixed 모드 타입 계약 정리"
```

### Task 3: Run required verification workflow checkpoints

**Files:**

- Verify: `src/components/Sidebar.tsx`
- Verify: `src/app/(with-header)/document/[id]/page.tsx`
- Verify: `src/app/(with-header)/document/[id]/userInfo/page.tsx`

**Step 1: 1st checkpoint (plan readiness)**

Validate that each step in this plan is executable in this repo and has measurable output.

**Step 2: 2nd checkpoint (post-implementation, pre-PR)**

Run:

```bash
corepack yarn tsc --noEmit
```

Then run UI manual checks with dev server:

```bash
corepack yarn dev -p 3001
```

Required checks:

- `/document/1` sidebar collapse/expand still works.
- TOC click scroll still works.
- Typecheck confirms no new DMWCOMM-8-attributable errors.

Note:

- `corepack yarn lint` is not a required gate in this ticket because ESLint config loading is tracked separately by DMWCOMM-10.

**Step 3: Create PR**

Title:

```text
[DMWCOMM-8] document userInfo Sidebar prop 타입 불일치 수정
```

PR body must include:

- Root cause
- Fix summary
- Verification evidence (commands and observed results)

**Step 4: 3rd checkpoint (PR-level gate)**

Re-run typecheck and UI checklist against PR HEAD and merge only when no DMWCOMM-8-attributable blocker remains.

### Task 4: Closeout

**Step 1: Merge PR**

```bash
gh pr merge <PR_NUMBER> --merge
```

If `gh` authentication is unavailable, merge via GitHub web UI using the same gate criteria.

**Step 2: Ticket update**

Post verification summary to ticket and set status to done.
