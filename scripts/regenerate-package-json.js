"use strict";

require("../build/cjs/shim");
const path = require("path");
const fs = require("fs");
const methods = require("../build/cjs");

const ENCODING = "utf8";

const generateKeywords = (obj = {}) => {
  const keywords = [];

  obj.$forEach((value, key) => {
    keywords.push(key);

    if (Object.isPlainObject(value)) keywords.push(...generateKeywords(value));
  });

  return keywords;
};

const generateExports = (obj = {}, prefix = "") => {
  return obj.$reduce((prev, value, key) => {
    const path = `${prefix}${key}`;

    prev[`./${path}`] = {
      import: `./build/esm/${path}/index.js`,
      default: `./build/cjs/${path}/index.js`,
    };

    prev[`./${path}/shim`] = {
      import: `./build/esm/${path}/shim.js`,
      default: `./build/cjs/${path}/shim.js`,
    };

    if (Object.isPlainObject(value)) {
      prev = {
        ...prev,
        ...generateExports(value, `${path}/`),
      };
    }

    return prev;
  }, {});
};

const generateTypesVersions = (obj = {}) => {
  return obj.$reduce((prev, value, key) => {
    prev[`${key}`] = [`build/types/${key}/index.d.ts`];
    prev[`${key}/*`] = [`build/types/${key}/*`, `build/types/${key}/*/index.d.ts`];

    return prev;
  }, {});
};

const PATH = path.join(__dirname, "..", "package.json");

const pkg = JSON.parse(fs.readFileSync(PATH, ENCODING));

pkg.keywords = [
  "server-side",
  "client-side",
  "common",
  "typescript",
  "prototype",
  ...generateKeywords(methods).distinct(),
];

pkg.exports = {
  ".": {
    "import": "./build/esm/index.js",
    "default": "./build/cjs/index.js",
  },
  "./shim": {
    "import": "./build/esm/shim.js",
    "default": "./build/cjs/shim.js",
  },
  ...generateExports(methods),
  "./package.json": "./package.json",
};

pkg.typesVersions = {
  "*": {
    "index.d.ts": ["build/types/index.d.ts"],
    "shim": ["build/types/shim.d.ts"],
    ...generateTypesVersions(methods),
  },
};

fs.writeFileSync(PATH, `${JSON.stringify(pkg, undefined, 2)}\n`, ENCODING);
