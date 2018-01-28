#!/usr/bin/env node

const path = require('path')
const rimraf = require('rimraf')
const {spawn} = require('child_process')
const fs = require('fs')
const fse = require('fs-extra')
const readdir = require('fs-readdir-recursive')
const babel = require('babel-core')
const UglifyJs = require('uglify-js')
const UglifyEs = require('uglify-es')

let startTime = new Date().getTime()

const es6Dir = path.join(__dirname, '..', 'es6')
const distDir = path.join(__dirname, '..', 'dist')

rimraf.sync(es6Dir)
rimraf.sync(distDir)

const tsc = spawn(path.join(__dirname, '..', 'node_modules', '.bin', 'tsc'))

tsc.stdout.on('data', (data) => console.log(`stdout: ${data}`))

tsc.stderr.on('data', (data) => console.log(`stderr: ${data}`))

tsc.on('close', (code) => {
  const dtsFileNames = readdir(es6Dir, (filename) => filename.indexOf('.') === -1 || /\.d\.ts$/.test(filename))

  fs.mkdirSync(distDir)

  dtsFileNames.map((filename) => {
    let distPath = path.join(distDir, filename)

    if (!fs.existsSync(path.dirname(distPath))) fse.mkdirsSync(path.dirname(distPath))

    fs.copyFileSync(path.join(es6Dir, filename), distPath)
  })

  const distFileNames = readdir(es6Dir, (filename) => /(?<!\.ts)$/.test(filename))

  distFileNames.map((filename) => {
    let filePath = path.join(es6Dir, filename)
    let distPath = path.join(distDir, filename)
    let content = fs.readFileSync(filePath, 'utf8')

    content = content.replace('Object.defineProperty(exports, "__esModule", { value: true });', '')

    content = babel.transform(content, {
      presets: 'env'
    })

    content = UglifyJs.minify(content.code, {
      toplevel: true,
    })

    if (content.error) throw new Error(content.error)

    fs.writeFileSync(distPath, content.code, 'utf8')
  })

  const es6FileNames = readdir(es6Dir, (filename) => /(?<!\.ts)$/.test(filename))

  es6FileNames.map((filename) => {
    let filePath = path.join(es6Dir, filename)
    let content = fs.readFileSync(filePath, 'utf8')

    content = content.replace('Object.defineProperty(exports, "__esModule", { value: true });', '')

    content = UglifyEs.minify(content, {
      toplevel: true,
    })

    if (content.error) throw new Error(content.error)

    fs.writeFileSync(filePath, content.code, 'utf8')
  })

  if (code === 0) console.log(`finished in ${new Date().getTime() - startTime}ms`)
  else console.log(`child process exited with code ${code}`)
})
