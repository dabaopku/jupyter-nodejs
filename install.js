
var fs = require('fs')
var path = require('path')
var mkdirp = require('mkdirp')

var installPath = path.join(process.env.HOME, '.ipython/kernels/coffee')
if (process.argv >= 3) {
  installPath = process.argv[2]
}

var fullPath = path.resolve(installPath)

mkdirp(fullPath)

fs.writeFileSync(path.join(fullPath, 'kernel.json'), JSON.stringify({
  argv: ['node', path.join(path.resolve(__dirname), 'build', 'run.js'), '{connection_file}'],
  display_name: 'CoffeeScript',
  language: 'CoffeeScript',
}, null, 2))

