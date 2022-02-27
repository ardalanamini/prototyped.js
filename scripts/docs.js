#!/usr/bin/env node

"use strict";

const path = require("path");
const fs = require("fs");

const ENCODING = "utf8";
const DOCS_DIR = path.resolve(__dirname, "..", "docs");

fs.writeFileSync(path.resolve(DOCS_DIR, "CNAME"), "prototyped.js.org", ENCODING);
