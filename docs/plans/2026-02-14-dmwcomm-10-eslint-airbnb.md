# DMWCOMM-10 ESLint Airbnb Config Recovery Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Restore `next lint` execution by fixing missing Airbnb ESLint config dependencies on the `dev` baseline.

**Architecture:** This is a dependency-contract repair, not a lint-rule refactor. We keep `.eslintrc.json` extends unchanged and install the exact Airbnb config packages plus required peer plugins so the existing config resolves normally.

**Tech Stack:** Next.js 14, ESLint 8, TypeScript ESLint 6, Yarn (node-modules linker).

---

### Task 1: Reproduce and pin the root cause

**Files:**

- Verify: `.eslintrc.json`
- Verify: `package.json`

**Step 1: Reproduce lint failure**

Run:

```bash
corepack yarn lint
```

Expected:

- `Failed to load config "airbnb" to extend from.`

**Step 2: Confirm missing dependency in package manifest**

Verify `package.json` does not include `eslint-config-airbnb` / `eslint-config-airbnb-typescript`.

### Task 2: Install minimal compatible dependency set

**Files:**

- Modify: `package.json`
- Modify: `yarn.lock`

**Step 1: Add Airbnb config packages + peers to devDependencies**

Add versions compatible with current stack (`eslint@8.56.0`, `@typescript-eslint/*@6.21.0`):

- `eslint-config-airbnb@19.0.4`
- `eslint-config-airbnb-typescript@17.1.0`
- `eslint-config-airbnb-base@15.0.0`
- `eslint-plugin-import@2.31.0`
- `eslint-plugin-jsx-a11y@6.10.2`
- `eslint-plugin-react@7.37.5`
- `eslint-plugin-react-hooks@4.6.2`

**Step 2: Install and refresh lockfile**

Run:

```bash
corepack yarn install
```

### Task 3: Verify lint command recovery

**Step 1: Re-run lint**

Run:

```bash
corepack yarn lint
```

Expected:

- Config loading error is gone.
- If lint now reports code issues, classify them as existing lint violations (not config-load failure).

**Step 2: Re-run typecheck for regression safety**

Run:

```bash
corepack yarn tsc --noEmit
```

Expected:

- no new type errors introduced by dependency fix.

### Task 4: Verification workflow and closeout

**Step 1: 1st checkpoint (plan readiness)**

Validate this plan is executable and scoped only to DMWCOMM-10.

**Step 2: 2nd checkpoint (post-implementation, pre-PR)**

Run local code verification:

- lint config-load recovery proof
- typecheck proof
- changed-file diagnostics proof

**Step 3: PR and 3rd checkpoint (PR-level gate)**

Create PR with evidence and run UI/code verifier gate. Merge if no DMWCOMM-10-attributable blocker remains.
