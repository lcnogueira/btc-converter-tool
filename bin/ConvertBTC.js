"use strict";

var dotenv = require('dotenv');

var chalk = require('chalk');

var request = require('request');

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
  request(options, function (error, response, body) {
    var apiResponse;

    try {
      apiResponse = JSON.parse(body);
    } catch (parseError) {
      console.log(chalk.red('Something went wrong in the API. Try in a few minutes.'));
      return parseError;
    } finally {
      spinner.stop();
    }

    console.log("".concat(chalk.red(amount), " BTC to ").concat(chalk.cyan(currency), " = ").concat(chalk.yellow(apiResponse.price)));
  });
}

module.exports = convertBTC;