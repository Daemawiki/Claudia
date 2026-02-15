# DMWCOMM-13 Assets Lint Cleanup Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Remove lint violations in `src/assets/**` with zero behavior changes.

**Architecture:** Keep icon rendering unchanged; perform mechanical lint edits only.

**Tech Stack:** Next.js 14, ESLint, TypeScript, Yarn 1 (`corepack yarn@1.22.22`).

---

### Task 1: Baseline checks

1. Run `corepack yarn@1.22.22 lint -- --dir src/assets`.
2. Run `corepack yarn@1.22.22 tsc --noEmit`.

### Task 2: Mechanical lint fixes in scope

1. Apply lint-safe edits only in `src/assets/**`.
2. Preserve public exports from `src/assets/index.ts`.
3. Avoid runtime SVG/DOM behavior changes.

### Task 3: Verification

1. Run `corepack yarn@1.22.22 lint -- --dir src/assets` until clean.
2. Run `corepack yarn@1.22.22 tsc --noEmit`.
3. Ensure diff scope is only `src/assets/**` and this plan file.
