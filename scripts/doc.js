#!/usr/bin/env node

const path = require("path");
const rimraf = require("rimraf");
const {execSync} = require("child_process");
const fs = require("fs");

const startTime = new Date().getTime();

const DOCS_DIR = path.resolve(__dirname, "..", "docs");
const DOCS_PATH = path.resolve(DOCS_DIR, "README.md");

rimraf.sync(DOCS_DIR);

fs.mkdirSync(DOCS_DIR);

fs.writeFileSync(path.join(DOCS_DIR, "CNAME"), "prototyped.js.org", "utf8");

execSync(path.resolve(__dirname, "..", "node_modules", ".bin", "tsc"));

const DOCS = execSync(path.resolve(__dirname, "..", "node_modules", ".bin", "jsdoc2md") + " es6/*.js es6/**/*.js es6/**/**/*.js --example-lang javascript");

fs.writeFileSync(DOCS_PATH, `# Documents\n\n${DOCS.toString()}`, "utf8");

console.log(`finished in ${new Date().getTime() - startTime}ms`);
