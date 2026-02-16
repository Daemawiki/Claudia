# DMWCOMM-17C Wiki Stack Reconciliation

## Goal

Resolve parity ambiguity for FO branch wiki-module deletions and decide whether current dev wiki stack should be kept or removed.

## Modules in scope

- `src/apis/wiki.ts`
- `src/interfaces/wiki.ts`
- `src/components/wiki/*`

## Evidence

### 1) Runtime usage exists on current `origin/dev`

Observed references:

- `src/app/(with-header)/popular/page.tsx`
  - imports `fetchPopularDocuments` from `@/apis`
  - imports `DocumentTable`, `PageHeader`, `PageSection` from `@/components/wiki`
  - uses `queryFn: fetchPopularDocuments`
- `src/components/wiki/CategoryBadge.tsx`
  - imports `wikiCategoryLabel` from `@/apis/wiki`
  - imports `WikiCategory` from `@/interfaces/wiki`
- `src/components/wiki/DocumentTable.tsx`
  - imports `WikiDocumentSummary` from `@/interfaces/wiki`
- `src/apis/index.ts`
  - exports `./wiki`

### 2) FO branch deletion state

Command:

```bash
git ls-tree -r --name-only feature/FO-5-1 -- src/apis/wiki.ts src/interfaces/wiki.ts src/components/wiki
```

Result: no files returned (FO branch omits these modules).

### 3) Product impact assessment

- Current `/popular` route uses the wiki API and wiki UI component chain directly.
- Removing this module set from current dev would break `/popular` route data/UI composition.

## Decision

- **Keep** wiki modules on current `origin/dev` baseline.
- FO-branch deletion intent is treated as stale relative to merged parity baseline.

## Action taken

- No runtime code removal applied.
- Decision recorded and linked to issue workflow to prevent accidental module deletion.

## Reintroduction/removal policy

Future removal is allowed only if all are true:

1. `/popular` route is redesigned to remove wiki-module dependencies.
2. all import/export paths are updated without dead references.
3. verification passes (`yarn eslint` scoped + `yarn tsc --noEmit`).

## Conclusion

Wiki stack remains part of current product baseline and is explicitly retained in this parity cycle.
