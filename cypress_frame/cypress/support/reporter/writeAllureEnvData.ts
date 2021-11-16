import * as fs from 'fs'
import * as path from 'path'
import {Status} from "@shelex/allure-js-commons-browser";

const {TEST_ENV = 'DEV', BUILD_ID = '1'} = process.env;

const PIPELINES_URL = `https://pipelines.com/`
const REPORT_SERVER_URL = `https://reports.com/`
const TMS_URL = `https://some-tms.com/`
const ISSUE_URL = `https://bug-tracker.com/`
const getCurrentTime = () => `${new Date().toISOString().replace(/[:.]/g, '-')}` /* 2021-11-05T20-04-59-474Z' */
const ALLURE_RESULTS_PATH = `report/allure/${TEST_ENV}/allure-results-${getCurrentTime()}`

function addTmsLinkByName(itName: string) {
  cy.allure().link(`${TMS_URL}${itName}`, 'TMS TC', 'tms')
}

function writeAllureReportInfo(runDetails: Cypress.BeforeRunDetails, config: Cypress.CoreConfigOptions) {
  const allureEnvPropertiesPath = path.join(ALLURE_RESULTS_PATH, `/environment.properties`)
  const allureCategoriesPath = path.join(ALLURE_RESULTS_PATH, `/categories.json`)
  const allureExecutorPath = path.join(ALLURE_RESULTS_PATH, `/executor.json`)

  const environmentInfo = `Environment ${TEST_ENV}\nBrowser ${runDetails.browser?.name || 'Unknown'}`

  const executorInfo = {
    name: 'Automation tests for SkyNet project',
    buildName: 'Pipeline URL',
    type: 'jenkins',
    url: PIPELINES_URL,
    buildUrl: `${PIPELINES_URL}/${BUILD_ID}`,
    reportUrl: `${REPORT_SERVER_URL}/${TEST_ENV}/${BUILD_ID}`,
    reportName: 'Allure report',
  }

  const categoriesDefinitions = [
    {
      name: `Couldn't wait for some condition`,
      traceRegex: '.*Timed out retrying.*',
      matchedStatuses: [Status.BROKEN, Status.FAILED],
    },
  ]

  try {
    createResultsDirectory(ALLURE_RESULTS_PATH)
    fs.writeFileSync(allureEnvPropertiesPath, environmentInfo, {encoding: 'utf8'})
    fs.writeFileSync(allureCategoriesPath, JSON.stringify(categoriesDefinitions), {encoding: 'utf8'})
    fs.writeFileSync(allureExecutorPath, JSON.stringify(executorInfo), {encoding: 'utf8'})
  } catch (e) {
    console.warn(`Couldn't write Allure Report Info for report. Error is: ${(e as unknown as Error).message}`)
    console.warn(e)
  }
}

function createResultsDirectory(allureResultsPath: string) {
  if (!fs.existsSync(allureResultsPath)) {
    console.log(`Creating results directory "${allureResultsPath}"`)
    fs.mkdirSync(allureResultsPath, {recursive: true})
  } else {
    console.log(`Setting properties: Results directory "${allureResultsPath}" is already present.`)
  }
}

export {writeAllureReportInfo, ALLURE_RESULTS_PATH, TMS_URL, ISSUE_URL}
