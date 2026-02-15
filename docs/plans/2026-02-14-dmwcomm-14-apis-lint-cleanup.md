# DMWCOMM-14 APIs Lint Cleanup Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Remove lint violations in `src/apis/**` with zero API behavior changes.

**Architecture:** Keep endpoint paths, payloads, and export surface intact; apply mechanical lint edits only.

**Tech Stack:** Next.js 14, ESLint, TypeScript, axios, Yarn 1 (`corepack yarn@1.22.22`).

---

### Task 1: Baseline checks

1. Run `corepack yarn@1.22.22 lint -- --dir src/apis`.
2. Run `corepack yarn@1.22.22 tsc --noEmit`.

### Task 2: Mechanical lint fixes in scope

1. Edit only `src/apis/**` files.
2. Preserve named exports used across app.
3. Keep request/response semantics unchanged.

### Task 3: Verification

1. Run `corepack yarn@1.22.22 lint -- --dir src/apis` until clean.
2. Run `corepack yarn@1.22.22 tsc --noEmit`.
3. Ensure diff scope is only `src/apis/**` and this plan file.
