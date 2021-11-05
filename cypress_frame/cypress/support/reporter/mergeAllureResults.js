const fs = require("fs");
const path = require("path");

const resultsPath = `report/allure`;
const getAllResultsPaths = () => fs.readdirSync(resultsPath)
  .filter(folder => folder.includes('allure-results'))
  .map(file => path.resolve(resultsPath, file));
const MERGED_FOLDER = `${resultsPath}/merged-results`;

const readDirRecursively = (dir, result = []) => {
  if (fs.existsSync(dir) && !fs.statSync(dir).isDirectory()) {
    throw new Error(`Cannot read recursively. "${dir}" isn't directory.`);
  }

  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      readDirRecursively(filePath, result);
    } else {
      result.push(filePath);
    }
  });
  return result;
};

if (require.main === module) {
  /* require.main === module - check if this file invoked directly. Won't run if you require() this file */
  if (!fs.existsSync(MERGED_FOLDER)) {
    fs.mkdirSync(MERGED_FOLDER);
  }
  const allResultsFiles = getAllResultsPaths().map(resultFolder => readDirRecursively(resultFolder)).flat();
  allResultsFiles.forEach(filePath => {
    fs.copyFileSync(filePath, path.resolve(MERGED_FOLDER, path.basename(filePath)));
  });
}

module.export = {MERGED_FOLDER};
