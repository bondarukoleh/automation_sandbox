const cypress = require('cypress');

cypress
  .run({
      "viewportWidth": 1000,
      "viewportHeight": 660,
      "watchForFileChanges": false,
      "integrationFolder": "cypress/integration/tests",
      "testFiles": "**/**.spec.js"
    }
  )
  .then((results) => {
    console.log(results);
  })
  .catch((err) => {
    console.error(err);
  });
