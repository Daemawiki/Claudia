# DMWCOMM-15 Document Route Lint Cleanup Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Remove lint violations in `src/app/(with-header)/document/[id]/**` with zero UI/data behavior changes.

**Architecture:** Restrict edits to document route files; keep rendering, route params, and data flow unchanged.

**Tech Stack:** Next.js 14 App Router, React 18, ESLint, TypeScript, Yarn 1 (`corepack yarn@1.22.22`).

---

### Task 1: Baseline checks

1. Run `corepack yarn@1.22.22 lint -- --dir "src/app/(with-header)/document/[id]"`.
2. Run `corepack yarn@1.22.22 tsc --noEmit`.

### Task 2: Mechanical lint fixes in scope

1. Edit only `src/app/(with-header)/document/[id]/**`.
2. Keep JSX structure and interactions behaviorally identical.
3. Touch related userInfo files only when lint directly requires it.

### Task 3: Verification

1. Run `corepack yarn@1.22.22 lint -- --dir "src/app/(with-header)/document/[id]"` until clean.
2. Run `corepack yarn@1.22.22 tsc --noEmit`.
3. Ensure diff scope is document route files and this plan file.
