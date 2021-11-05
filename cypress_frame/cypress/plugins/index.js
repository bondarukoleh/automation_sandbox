const fs = require('fs-extra')
const path = require('path')
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const {
  writeAllureReportInfo,
  ALLURE_RESULTS_PATH,
  TMS_URL,
  ISSUE_URL,
} = require("../support/reporter/writeAllureEnvData");

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve(__dirname, '../..', `cypress${file && `-${file}`}.json`)

  return fs.readJson(pathToConfigFile)
}

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  /* We could use something like this, but it leads to misunderstanding, so I'll keep it as example
    const file = config.env.config || ''
  * const dynamicConfig = getConfigurationByFile(file)
  *  */

  if(config.env.allure) {
    config.env.allureResultsPath = ALLURE_RESULTS_PATH
    config.env.tmsPrefix = TMS_URL
    config.env.issuePrefix = ISSUE_URL
    on('before:run', (details) => {
      writeAllureReportInfo(details, config)
    })
    allureWriter(on, config)
  }

  return config;
}

