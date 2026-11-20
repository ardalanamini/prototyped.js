"use strict";

const assert = require("assert");
const { execFileSync } = require("child_process");
const fs = require("fs");
const os = require("os");
const path = require("path");

const tarball = path.resolve(process.argv[2] || "artifacts/package.tgz");
const consumer = fs.mkdtempSync(path.join(os.tmpdir(), "prototyped-consumer-"));
const installed = path.join(consumer, "node_modules", "prototyped.js");

try {
  fs.mkdirSync(installed, { recursive: true });
  fs.writeFileSync(path.join(consumer, "package.json"), JSON.stringify({ private: true }));
  execFileSync("tar", ["-xzf", tarball, "-C", installed, "--strip-components=1"]);

  const manifest = JSON.parse(fs.readFileSync(path.join(installed, "package.json"), "utf8"));
  const exports = Object.keys(manifest.exports).filter(key => key !== "./package.json");

  for (const [directory, type] of [["cjs", "commonjs"], ["esm", "module"]]) {
    const file = path.join(installed, "build", directory, "package.json");
    assert.strictEqual(JSON.parse(fs.readFileSync(file, "utf8")).type, type);
  }

  for (const key of exports) {
    for (const condition of ["import", "default"]) {
      const entry = manifest.exports[key][condition];
      for (const target of [entry.types, entry.default]) {
        assert(fs.existsSync(path.join(installed, target)), `Missing ${condition} target: ${target}`);
      }
    }
  }

  // Resolve from an isolated consumer so source mappings and repository files
  // cannot hide missing files or incorrect conditional exports in the tarball.
  const specifiers = exports.map(key => key === "." ? manifest.name : manifest.name + key.slice(1));
  const commonjs = `
    const assert = require("assert");
    for (const specifier of ${JSON.stringify(specifiers)}) require(specifier);
    const pt = require("prototyped.js");
    assert.deepStrictEqual(pt.string.words("hello world!"), ["hello", "world"]);
    assert.deepStrictEqual(require("prototyped.js/string/words").default("hello world!"), ["hello", "world"]);
    assert.deepStrictEqual("hello world!".words(), ["hello", "world"]);
  `;
  const esm = `
    import assert from "assert";
    for (const specifier of ${JSON.stringify(specifiers)}) await import(specifier);
    const pt = await import("prototyped.js");
    assert.deepStrictEqual(pt.string.words("hello world!"), ["hello", "world"]);
    const { default: words } = await import("prototyped.js/string/words");
    assert.deepStrictEqual(words("hello world!"), ["hello", "world"]);
    assert.deepStrictEqual("hello world!".words(), ["hello", "world"]);
  `;

  execFileSync(process.execPath, ["--eval", commonjs], { cwd: consumer, stdio: "inherit" });
  execFileSync(process.execPath, ["--input-type=module", "--eval", esm], { cwd: consumer, stdio: "inherit" });
  console.log(`Checked ${exports.length} exports in CommonJS and native ESM on ${process.version}.`);
} finally {
  fs.rmSync(consumer, { recursive: true, force: true });
}
