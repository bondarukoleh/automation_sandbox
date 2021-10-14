const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve(__dirname, '../..', `cypress${file && `-${file}`}.json`)

  return fs.readJson(pathToConfigFile)
}

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  const file = config.env.config || ''

  return getConfigurationByFile(file)
}

