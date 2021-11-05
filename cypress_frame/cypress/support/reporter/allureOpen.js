const fs = require("fs");
const allure = require("allure-commandline");

const allureReportFolder = `report/allure/`
const allReports = fs.readdirSync(allureReportFolder);
const reportPath = allReports.find(report => report.includes('allure-report'));

allure([
  'open',
  `${allureReportFolder}/${reportPath}`,
]);
