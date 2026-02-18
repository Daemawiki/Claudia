import { spawnSync } from "node:child_process";

const args = process.argv.slice(2);
const baseRef = args[0] || process.env.LINT_BASE_REF || "origin/dev";
const forwardArgs = args.slice(1);

const runGit = gitArgs =>
  spawnSync("git", gitArgs, {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });

const mergeBaseResult = runGit(["merge-base", "HEAD", baseRef]);

if (mergeBaseResult.status !== 0) {
  const errorOutput =
    mergeBaseResult.stderr.trim() ||
    `Unable to determine merge-base against ${baseRef}.`;
  process.stderr.write(`[lint:changed] ${errorOutput}\n`);
  process.stderr.write(
    "[lint:changed] Try running `git fetch origin` or provide a different base ref.\n",
  );
  process.exit(mergeBaseResult.status || 1);
}

const mergeBase = mergeBaseResult.stdout.trim();
const diffResult = runGit([
  "diff",
  "--name-only",
  "--diff-filter=ACMR",
  `${mergeBase}...HEAD`,
]);

if (diffResult.status !== 0) {
  const errorOutput =
    diffResult.stderr.trim() || "Unable to list changed files.";
  process.stderr.write(`[lint:changed] ${errorOutput}\n`);
  process.exit(diffResult.status || 1);
}

const lintableFilePattern = /\.(cjs|cts|js|jsx|mjs|mts|ts|tsx)$/;
const nextLintPathPattern = /^(app|pages|components|lib|src)\//;
const changedFiles = diffResult.stdout
  .split("\n")
  .map(filePath => filePath.trim())
  .filter(Boolean)
  .filter(filePath => lintableFilePattern.test(filePath))
  .filter(filePath => nextLintPathPattern.test(filePath))
  .filter(filePath => !filePath.endsWith(".d.ts"));

if (changedFiles.length === 0) {
  process.stdout.write(
    `[lint:changed] No changed JS/TS files since ${baseRef}.\n`,
  );
  process.exit(0);
}

process.stdout.write(`[lint:changed] Base ref: ${baseRef}\n`);
process.stdout.write(
  `[lint:changed] Linting ${changedFiles.length} file(s):\n`,
);
changedFiles.forEach(filePath => process.stdout.write(`- ${filePath}\n`));

const lintArgs = ["next", "lint"];
changedFiles.forEach(filePath => {
  lintArgs.push("--file", filePath);
});
lintArgs.push(...forwardArgs);

const lintRun = spawnSync("yarn", lintArgs, {
  stdio: "inherit",
  env: process.env,
});

if (typeof lintRun.status === "number") {
  process.exit(lintRun.status);
}

process.stderr.write("[lint:changed] Lint process terminated unexpectedly.\n");
process.exit(1);
