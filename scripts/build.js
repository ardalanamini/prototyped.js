#!/usr/bin/env node

const path = require("path");
const rimraf = require("rimraf");
const { spawn } = require("child_process");
const fs = require("fs");
const fse = require("fs-extra");
const readdir = require("fs-readdir-recursive");
const babel = require("babel-core");

const startTime = new Date().getTime();

const es6Dir = path.join(__dirname, "..", "es6");
const es5Dir = path.join(__dirname, "..", "es5");

rimraf.sync(es6Dir);
rimraf.sync(es5Dir);

const tsc = spawn(path.join(__dirname, "..", "node_modules", ".bin", "tsc"));

tsc.stdout.on("data", data => console.log(`stdout: ${data}`));

tsc.stderr.on("data", data => console.log(`stderr: ${data}`));

tsc.on("close", code => {
  const dtsFileNames = readdir(
    es6Dir,
    filename => filename.indexOf(".") === -1 || /\.d\.ts$/.test(filename),
  );

  fs.mkdirSync(es5Dir);

  dtsFileNames.forEach(filename => {
    let distPath = path.join(es5Dir, filename);

    if (!fs.existsSync(path.dirname(distPath)))
      fse.mkdirsSync(path.dirname(distPath));

    fs.copyFileSync(path.join(es6Dir, filename), distPath);
  });

  const es5FileNames = readdir(es6Dir, filename => /(?<!\.ts)$/.test(filename));

  es5FileNames.forEach(filename => {
    let filePath = path.join(es6Dir, filename);
    let distPath = path.join(es5Dir, filename);
    let content = fs.readFileSync(filePath, "utf8");

    content = babel.transform(content, {
      presets: "env",
    });

    if (content.error) throw new Error(content.error);

    fs.writeFileSync(distPath, content.code, "utf8");
  });

  const es6FileNames = readdir(es6Dir, filename => /(?<!\.ts)$/.test(filename));

  es6FileNames.forEach(filename => {
    const filePath = path.join(es6Dir, filename);

    fs.writeFileSync(filePath, fs.readFileSync(filePath, "utf8"), "utf8");
  });

  if (code === 0)
    console.log(`finished in ${new Date().getTime() - startTime}ms`);
  else console.log(`child process exited with code ${code}`);
});
