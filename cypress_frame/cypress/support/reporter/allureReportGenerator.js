const fs = require("fs");
const allure = require("allure-commandline");
const path = require("path");

const resultsPath = `report/allure/`
const allReports = fs.readdirSync(resultsPath);
const allureResults = allReports.filter(report => report.includes('allure-results'));
const latestAllureResult = allureResults.pop();

allure([
  'generate',
  `${path.join(resultsPath, latestAllureResult)}`,
  `--clean`,
  `--report-dir`,
  `${resultsPath}/allure-report`,
]);
