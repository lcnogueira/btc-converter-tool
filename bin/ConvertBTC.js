"use strict";

var dotenv = require('dotenv');

var chalk = require('chalk');

var request = require('request-promise-native');

var ora = require('ora');

dotenv.config();
var spinner = ora({
  text: 'Retrieving Bitcoin data...',
  color: 'yellow'
});

function convertBTC() {
  var currency = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'USD';
  var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var options = {
    url: "https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=".concat(currency, "&amount=").concat(amount),
    headers: {
      'x-ba-key': process.env.API_KEY
    }
  };
  spinner.start();
  return request(options).then(function (body) {
    spinner.stop();
    return body;
  }).then(function (body) {
    var apiResponse = JSON.parse(body);
    console.info("".concat(chalk.red(amount), " BTC to ").concat(chalk.cyan(currency), " = ").concat(chalk.yellow(apiResponse.price)));
  })["catch"](function (err) {
    spinner.stop();
    console.info(chalk.red('Something went wrong in the API. Try in a few minutes.'));
    return err;
  });
}

module.exports = convertBTC;