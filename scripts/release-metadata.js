"use strict";

const assert = require("assert");
const fs = require("fs");

const number = "(?:0|[1-9][0-9]*)";
const identifier = "(?:0|[1-9][0-9]*|[0-9A-Za-z-]*[A-Za-z-][0-9A-Za-z-]*)";
const semver = new RegExp(`^${number}\\.${number}\\.${number}(-${identifier}(?:\\.${identifier})*)?(?:\\+[0-9A-Za-z-]+(?:\\.[0-9A-Za-z-]+)*)?$`);

function releaseMetadata(version, tag) {
  const match = semver.exec(version);
  assert(match && match[0] === version, `Invalid package version: ${version}`);
  assert.strictEqual(tag, `v${version}`, "Release tag must exactly match package.json version");

  const prerelease = Boolean(match[1]);
  return { "dist-tag": prerelease ? "next" : "latest", prerelease };
}

if (require.main === module) {
  const { version } = require("../package.json");
  const metadata = releaseMetadata(version, process.env.RELEASE_TAG);
  const output = Object.entries(metadata).map(([key, value]) => `${key}=${value}`).join("\n") + "\n";
  if (process.env.GITHUB_OUTPUT) fs.appendFileSync(process.env.GITHUB_OUTPUT, output);
  process.stdout.write(output);
}

module.exports = releaseMetadata;
