require("../cjs/shim");
const path = require("path");
const fs = require("fs");
const methods = require("../cjs");

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
      import: `./es/${path}/index.js`,
      default: `./cjs/${path}/index.js`,
    };

    prev[`./${path}/shim`] = {
      import: `./es/${path}/shim.js`,
      default: `./cjs/${path}/shim.js`,
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

const package = JSON.parse(fs.readFileSync(PATH, "utf8"));

package.keywords = [
  "server-side",
  "client-side",
  "common",
  "typescript",
  "prototype",
  ...generateKeywords(methods).distinct(),
];

package.exports = {
  ".": {
    "import": "./es/index.js",
    "default": "./cjs/index.js",
  },
  "./shim": {
    "import": "./es/shim.js",
    "default": "./cjs/shim.js",
  },
  ...generateExports(methods),
  "./package.json": "./package.json",
};

fs.writeFileSync(PATH, `${JSON.stringify(package, undefined, 2)}\n`);
