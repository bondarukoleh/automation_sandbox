const {zip} = require('zip-a-folder');
const fetch = require('node-fetch');
const fs = require("fs");

const {TEST_ENV = 'DEV', BUILD_ID = '1'} = process.env;

const allureReportPath = `report/allure/${TEST_ENV}`;
const mergedResults = `${allureReportPath}/merged-results`;
const zippedResultsPath = `${allureReportPath}/${TEST_ENV}-${BUILD_ID}-${new Date().toISOString()
  .replace(/[:|-]/g, '')}.zip`;
const allureServerUrl = `https://reportServer/upload/${TEST_ENV}/${BUILD_ID}`;

const sendMergedResults = async() => {
  console.info(`Zipping the allure report...`);
  await zip(mergedResults, zippedResultsPath);

  try {
    return fetch(allureServerUrl, {
      body: fs.createReadStream(zippedResultsPath),
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
    });
  } catch (e) {
    console.error(`Couldn't send the results to server!`);
    console.error(e);
  }
};

sendMergedResults()
  .then(res => {
    console.log('Results send');
    console.log(res.status);
    console.log(res.statusText);
  })
  .catch(err => {
    console.error(`Couldn't send the request with results!`);
    console.error(err)
  });
