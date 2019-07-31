const path = require("path");
const fs = require("fs");
const { zipFunctions } = require("@netlify/zip-it-and-ship-it");

const { getHammerConfig } = require("@hammerframework/hammer-api");
const hammerConfig = getHammerConfig();

const FUNCTIONS_SRC_PATH = path.join(
  hammerConfig.baseDir,
  "api/dist/functions"
);
const FUNCTIONS_BUILD_PATH = path.join(
  hammerConfig.baseDir,
  "api/dist/zippedFunctions/"
);

try {
  fs.mkdirSync(FUNCTIONS_BUILD_PATH);
} catch (e) {
  console.log(e);
}

zipFunctions(FUNCTIONS_SRC_PATH, FUNCTIONS_BUILD_PATH)
  .then(() => {
    console.log("All done.");
  })
  .catch(e => {
    console.log("------------");
    console.log(e);
    console.log("---------------");
  });
