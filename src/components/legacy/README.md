# Legacy Components Deprecation (Phase 1)

This directory documents deprecated component groups that should not be used for
new or updated pages.

## Deprecated Groups

- `src/components/table/*`
- `src/components/title/*`
- `src/components/lesson/*`

## Why Deprecated

- These components are not used by current user-facing routes.
- Their styling and structure diverge from the current page patterns.
- Keeping them active increases accidental reuse risk.

## Migration Path

- Document pages: use route-scoped patterns in
  `src/app/(with-header)/document/[id]/`.
- List/section pages: follow modern layout conventions in
  `src/app/(with-header)/division/`, `src/app/(with-header)/recent/`, and
  `src/app/(with-header)/team/`.

## Phase 1 Policy

- New imports from legacy groups are blocked by ESLint (`no-restricted-imports`).
- Legacy component files are removed in this phase to prevent reintroduction.
