# DMWCOMM-17B FO-Only Component Evaluation

## Goal

Decide whether FO-only component groups should be adopted into `origin/dev` or explicitly rejected.

## Evaluated component groups

- `src/components/table/*`
- `src/components/title/title.tsx`
- `src/components/lesson/lesson.tsx`

## Evidence

### 1) FO branch file presence

Command:

```bash
git ls-tree -r --name-only feature/FO-5-1 -- src/components/table src/components/title src/components/lesson
```

Observed files:

- `src/components/lesson/lesson.tsx`
- `src/components/table/Buttons.tsx`
- `src/components/table/editItem.tsx`
- `src/components/table/item.tsx`
- `src/components/table/linkBlock.tsx`
- `src/components/table/modal.tsx`
- `src/components/table/table.tsx`
- `src/components/title/title.tsx`

### 2) Current dev usage check

Command:

```bash
grep pattern: @/components/(table|title|lesson)|components/(table|title|lesson)
scope: src/**/*.ts, src/**/*.tsx
```

Result: no matches on current `origin/dev` baseline.

### 3) FO usage check

Command:

```bash
git grep -n "./table\|./title\|./lesson\|components/table\|components/title\|components/lesson" feature/FO-5-1 -- src
```

Result: no call-site references found.

## Disposition

### A) `src/components/table/*`

- Decision: reject for now.
- Rationale: zero references in both current dev and FO branch; introducing these files now adds dead code and lint/maintenance burden.

### B) `src/components/title/title.tsx`

- Decision: reject for now.
- Rationale: current route-level title handling is already implemented in app-local components; no active imports require a shared `src/components/title/title.tsx` entry.

### C) `src/components/lesson/lesson.tsx`

- Decision: reject for now.
- Rationale: no current product route references this component; no issue explicitly requires lesson-module rollout.

## Follow-up policy

If any route later requires these patterns, reintroduce only the needed subset via a dedicated ticket with:

1. concrete route consumer(s),
2. lint/type-safe implementation on `origin/dev`,
3. verification evidence (`yarn eslint` scoped + `yarn tsc --noEmit`).

## Conclusion

All three FO-only component groups are waived (not adopted) in current parity cycle.
