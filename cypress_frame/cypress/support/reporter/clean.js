const fs = require("fs");

const reportPath = `report/`
const allureDefaultResultsPath = `allure-results`
const allureDefaultReportPath = `allure-report`
const mochawesomeDefaultReportPath = `cypress/results`
const compiledTs = `dist`

fs.rmdirSync(reportPath, {recursive: true})
fs.rmdirSync(allureDefaultResultsPath, {recursive: true})
fs.rmdirSync(allureDefaultReportPath, {recursive: true})
fs.rmdirSync(mochawesomeDefaultReportPath, {recursive: true})
fs.rmdirSync(compiledTs, {recursive: true})
