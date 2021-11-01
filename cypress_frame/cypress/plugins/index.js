const fs = require('fs-extra')
const path = require('path')
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve(__dirname, '../..', `cypress${file && `-${file}`}.json`)

  return fs.readJson(pathToConfigFile)
}

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  const file = config.env.config || ''
  allureWriter(on, config);
  return getConfigurationByFile(file)
}

