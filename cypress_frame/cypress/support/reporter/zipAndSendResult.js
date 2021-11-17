const {zip} = require('zip-a-folder');
const fetch = require('node-fetch');
const fs = require("fs");
const FormData = require("form-data");

const {
  TEST_ENV = 'DEV',
  BUILD_ID = '1',
  JOB_TYPE = 'core',
  ALLURE_SERVER_HOST = 'http://localhost:4400',
} = process.env;

const allureReportPath = `report/allure/${TEST_ENV}`;
const mergedResults = `${allureReportPath}/merged-results`;
const zippedResultsPath = `${allureReportPath}/${TEST_ENV}-${JOB_TYPE}-${BUILD_ID}__${new Date().toISOString()
  .replace(/[:|\-|.]/g, '')}.zip`; /* DEV-core-1__20211117T172220772Z.zip */
const sendMergedResults = async() => {
  console.info(`Zipping the allure report...`);
  await zip(mergedResults, zippedResultsPath);
  const formData = new FormData();
  /* formData.append('allureArchive' - this name vital to get data on server side */
  formData.append('allureArchive', fs.createReadStream(zippedResultsPath));
  console.info(`Zipped the allure report`);
  try {
    return fetch(ALLURE_SERVER_HOST, {
      body: formData,
      method: 'POST',
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
    console.error(err);
  });
