#!/usr/bin/env node

const path = require("path");
const { execSync } = require("child_process");
const fs = require("fs");

const startTime = new Date().getTime();

const DOCS_DIR = path.resolve(__dirname, "..", "docs");
const DOCS_PATH = path.resolve(DOCS_DIR, "README.md");

execSync(path.resolve(__dirname, "..", "node_modules", ".bin", "tsc"));

const DOCS = execSync(
  path.resolve(__dirname, "..", "node_modules", ".bin", "jsdoc2md") +
    " dist/*.js dist/**/*.js dist/**/**/*.js --example-lang javascript",
);

fs.writeFileSync(DOCS_PATH, `# Documents\n\n${DOCS.toString()}`, "utf8");

console.log(`finished in ${new Date().getTime() - startTime}ms`);
