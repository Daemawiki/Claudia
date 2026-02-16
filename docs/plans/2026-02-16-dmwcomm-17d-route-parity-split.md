# DMWCOMM-17D Route Parity Split Plan

## Goal

Break app-page parity work into route-scoped tracks so each accepted delta is delivered in a small PR.

## Parent issue

- `#111` `[DMWCOMM-17D] App page parity split for division/recent/team/main/popular`

## Created route issues

1. `#116` division parity (`/division`)
2. `#117` recent parity (`/recent`)
3. `#118` team parity (`/team`)
4. `#119` main parity (`/main`)
5. `#120` popular parity (`/popular`)

## Split policy

- One route per branch/PR.
- No cross-route edits in parity PRs.
- Each PR includes route-level verification evidence.

## Route checklist template (apply per issue)

1. Collect FO-vs-dev UI/behavior delta evidence for target route only.
2. Mark each delta as accept/reject with reason.
3. Implement accepted deltas with minimal diff.
4. Verify with scoped lint and `yarn tsc --noEmit`.
5. Merge route PR and update parent issue links.

## Execution order

1. `#116` division
2. `#117` recent
3. `#118` team
4. `#119` main
5. `#120` popular

## Completion gate for #111

- Backlog split is complete when all route issues exist and are linked.
- Parent issue can close after this split plan is merged.
