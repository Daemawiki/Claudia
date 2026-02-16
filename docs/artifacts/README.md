# UI Artifact Policy

This directory is the only approved location for retained UI audit screenshots.

## Scope

- Root-level ad-hoc capture files are not retained in repository history.
- Root-level capture patterns are ignored by `.gitignore` to prevent working-tree pollution.
- Keep only evidence needed for merged PR review or release notes.

## Retention Rules

1. Keep final before/after evidence only.
2. Delete transient debug captures (multiple retries, viewport probes, one-off checks).
3. Use deterministic names:
   - `<issue>-<route>-<viewport>-<state>.png`
   - example: `dmwcomm-17-main-1440x900-after.png`

## Suggested Local Cleanup Flow

```bash
mkdir -p docs/artifacts/ui-audit
mv ./audit*.png ./agent*.png ./pr*.png ./ui*.png docs/artifacts/ui-audit/ 2>/dev/null
```

Review moved files, keep final artifacts only, and delete the rest before commit.
