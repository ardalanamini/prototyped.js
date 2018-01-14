#!/usr/bin/env node

const path = require('path')
const rimraf = require('rimraf')
const {spawn} = require('child_process')
const fs = require('fs')
const readdir = require('fs-readdir-recursive')
const babel = require('babel-core')
const Uglify = require('uglify-js')

let startTime = new Date().getTime()

rimraf(path.join(__dirname, '..', 'dist'), (err) => {
  if (err) throw new Error(err)

  const tsc = spawn(path.join(__dirname, '..', 'node_modules', '.bin', 'tsc'))

  tsc.stdout.on('data', (data) => console.log(`stdout: ${data}`))

  tsc.stderr.on('data', (data) => console.log(`stderr: ${data}`))

  tsc.on('close', (code) => {
      const distDir = path.join(__dirname, '..', 'dist')

      const distFileNames = readdir(distDir, (filename) => /(?<!\.ts)$/.test(filename))

      distFileNames.map((filename) => {
        let filePath = path.join(distDir, filename)
        let content = fs.readFileSync(filePath, 'utf8')

        const jsonFiles = content.match(/require\("(.*\.json)"\)/g)
        if (jsonFiles) {
          for (let jsonFile of jsonFiles) {
            let jsonContent = fs.readFileSync(
              path.join(
                path.dirname(filePath.replace(/\/dist\//, '/src/')),
                /"(.*\.json)"/.exec(jsonFile)[1]
              ),
             'utf8'
           )

           content = content.replace(jsonFile, jsonContent)
          }
        }

        content = babel.transform(content, {
          presets: 'env'
        })

        content = Uglify.minify(content.code, {
          toplevel: true,
        })

        if (content.error) throw new Error(content.error)

        fs.writeFileSync(filePath, content.code, 'utf8')
      })

    if (code === 0) console.log(`finished in ${new Date().getTime() - startTime}ms`)
    else console.log(`child process exited with code ${code}`)
  })
})
