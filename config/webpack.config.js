let chalk = require("chalk");
let fs = require('fs');
let path = require('path');
let useDefaultConfig = require('@ionic/app-scripts/config/webpack.config.js');

//var env = process.env.IONIC_ENV;
useDefaultConfig.prod.resolve.alias = {
  "@app/env": path.resolve(environmentPath())
};

useDefaultConfig.dev.resolve.alias = {
  "@app/env": path.resolve(environmentPath())
};

function environmentPath(env) {
  //var filePath = './src/env/env' + (env === 'prod' ? '.' + env : '') + '.ts';

  let filePath = './src/env/env.ts';

  if (!fs.existsSync(filePath)) {
    console.log(chalk.red('\n' + filePath + ' does not exist!'));
  } else {
    return filePath;
  }
}

function consoleOut(env) {
  console.log("=============== ENVIRONMENT ===============");
  console.log("                                           ");
  console.log("                 "+env+"                   ");
  console.log("                                           ");
  console.log("===========================================");
}

module.exports = function () {

  let env = process.env.ENV || 'dev';

  consoleOut(env);
  return useDefaultConfig;
};
