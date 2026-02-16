# DMWCOMM-17 FO-5-1 Baseline Parity Audit (v2)

## Baseline decision

- Source of truth for ongoing work: `origin/dev` (`df9d959`)
- Local WIP reference branch: `feature/FO-5-1` (`a910bfd`)
- Remote FO branch snapshot: `origin/feature/FO-5-1` (`da36918`)

## Current branch relationship snapshot

- `git rev-list --left-right --count origin/feature/FO-5-1...feature/FO-5-1` => `284 271`
- Interpretation: both FO branches have diverged heavily after repository history rewrite; do not use either as a direct merge baseline.

## Local uncommitted delta snapshot (`feature/FO-5-1`)

- Total entries: `320`
- Tracked modifications: `35`
- Untracked files: `285`
- Type classification:
  - images: `265`
  - code: `37`
  - config/data: `4`
  - docs: `2`
  - other: `12`
- Top-level distribution:
  - repository root: `271`
  - `src/`: `45`
  - `.sisyphus/`: `1`
  - `docs/`: `1`
  - `eslint/`: `1`
  - `next.js/`: `1`

## Tree-level parity deltas (`origin/dev` vs `feature/FO-5-1`)

- Broadly affected domains:
  - app shell/pages (`src/app/**`)
  - assets (`src/assets/**`)
  - shared components (`src/components/**`)
  - API modules (`src/apis/**`)
  - lint/config (`.eslintrc.json`, `package.json`, `yarn.lock`)
- Added in FO branch but not in `origin/dev`:
  - `src/components/table/*`
  - `src/components/title/title.tsx`
  - `src/components/lesson/lesson.tsx`
- Removed in FO branch compared with `origin/dev`:
  - `src/apis/wiki.ts`
  - `src/interfaces/wiki.ts`
  - `src/components/wiki/*`
  - multiple `docs/plans/*` files

## Active/related PR alignment check

- `#64` `[DMWCOMM-15]` is `CLOSED` and not merged.
- `#65` `[DMWCOMM-13]` is `MERGED` (commit `c2d2d71`).
- `#66` `[DMWCOMM-14]` is `MERGED` (commit `efefadd`).
- Practical implication: parity references should use merged state on `origin/dev`, not historical FO branch assumptions.

## Recommended parity workflow

1. Keep implementation branches based on `origin/dev` only.
2. Treat local `feature/FO-5-1` uncommitted set as candidate material, not baseline truth.
3. Promote candidate changes by narrow-domain tickets and PRs (one domain per branch).
4. Avoid direct cherry-pick from `feature/FO-5-1` until each candidate file is lint/type checked against current `origin/dev`.

## Follow-up ticket proposal set

- Ticket A: classify and archive screenshot artifacts under root (move/delete policy).
- Ticket B: evaluate FO-only table/title/lesson components for adoption or rejection.
- Ticket C: reconcile wiki module deletion in FO branch against current merged wiki stack on `origin/dev`.
- Ticket D: reconcile app-page presentation differences (`division/recent/team/main/popular`) as independent UI parity tasks.

## Exit criteria tracking for DMWCOMM-17

- [x] Baseline branch decision recorded.
- [x] Local uncommitted change inventory captured and classified.
- [x] Related PR status mapped to current baseline.
- [ ] Follow-up tickets created and prioritized.
- [ ] Parity deltas resolved or explicitly waived via merged PRs.
