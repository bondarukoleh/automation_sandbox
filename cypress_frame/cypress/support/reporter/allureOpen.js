const fs = require("fs");
const allure = require("allure-commandline");
const {TEST_ENV = 'DEV'} = process.env;

const allureReportFolder = `report/allure/${TEST_ENV}`
const allReports = fs.readdirSync(allureReportFolder);
const reportPath = allReports.find(report => report.includes('allure-report'));

allure([
  'open',
  `${allureReportFolder}/${reportPath}`,
]);
