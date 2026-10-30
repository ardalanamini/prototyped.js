"use strict";

const assert = require("assert");
const releaseMetadata = require("./release-metadata");

for (const version of ["3.0.5", "4.0.0", "4.0.0+build.1"]) {
  assert.deepStrictEqual(releaseMetadata(version, `v${version}`), { "dist-tag": "latest", prerelease: false });
}

for (const version of ["4.0.0-alpha", "4.0.0-beta.1", "4.0.0-rc.0", "4.0.0-0", "4.0.0-rc.1+build.2"]) {
  assert.deepStrictEqual(releaseMetadata(version, `v${version}`), { "dist-tag": "next", prerelease: true });
}

for (const version of ["04.0.0", "4.0", "4.0.0-01", "4.0.0-rc..1", "4.0.0-", "4.0.0+", "4.0.0\n"]) {
  assert.throws(() => releaseMetadata(version, `v${version}`), /Invalid package version/);
}

for (const tag of [undefined, "3.0.5", "v3.0.6", "v3.0.5-rc.1", "v3.0.5\n"]) {
  assert.throws(() => releaseMetadata("3.0.5", tag), /Release tag must exactly match/);
}

console.log("Release channel and tag validation checks passed.");
