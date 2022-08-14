"use strict";

require("../build/cjs/shim");
const path = require("path");
const fs = require("fs");
const methods = require("../build/cjs");

const ENCODING = "utf8";

const generateKeywords = (obj = {}) => {
  const keywords = [];

  obj.$forEach((value, key) => {
    if (key.toUpperCase() === key) return;

    keywords.push(key);

    if (Object.isPlainObject(value)) keywords.push(...generateKeywords(value));
  });

  return keywords;
};

const generateExports = (obj = {}, prefix = "") => {
  return obj.$reduce((prev, value, key) => {
    if (key.toUpperCase() === key) return prev;

    const path = `${prefix}${key}`;

    prev[`./${path}`] = {
      import: {
        types: `./build/esm/${path}/index.d.ts`,
        default: `./build/esm/${path}/index.js`,
      },
      default: {
        types: `./build/cjs/${path}/index.d.ts`,
        default: `./build/cjs/${path}/index.js`,
      },
    };

    prev[`./${path}/shim`] = {
      import: {
        types: `./build/esm/${path}/shim.d.ts`,
        default: `./build/esm/${path}/shim.js`,
      },
      default: {
        types: `./build/cjs/${path}/shim.d.ts`,
        default: `./build/cjs/${path}/shim.js`,
      },
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
    import: {
      types: "./build/esm/index.d.ts",
      default: "./build/esm/index.js",
    },
    default: {
      types: "./build/cjs/index.d.ts",
      default: "./build/cjs/index.js",
    }
  },
  "./shim": {
    import: {
      types: "./build/esm/shim.d.ts",
      default: "./build/esm/shim.js",
    },
    default: {
      types: "./build/cjs/shim.d.ts",
      default: "./build/cjs/shim.js",
    },
  },
  ...generateExports(methods),
  "./package.json": "./package.json",
};

fs.writeFileSync(PATH, `${JSON.stringify(pkg, undefined, 2)}\n`, ENCODING);
