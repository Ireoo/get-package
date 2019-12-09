const fs = require('fs')
const core = require('@actions/core')

async function run() {
  try {
    const packagePath = core.getInput('path', { required: true })
    const key = core.getInput('key', { required: true })

    const package_file = fs.readFileSync(packagePath)
    const package = JSON.parse(package_file)
    console.log(JSON.stringify(package, null, 2))

    core.setOutput(key, eval(`package.${key}`))
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
