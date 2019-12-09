const fs = require('fs')
const core = require('@actions/core')

try {
  const packagePath = core.getInput('path', { required: true })

  const package_file = fs.readFileSync(packagePath)

  const package = JSON.parse(package_file)

  core.setOutput('package', package)
} catch (error) {
  core.setFailed(error.message)
}
