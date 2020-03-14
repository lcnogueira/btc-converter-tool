const chalk = require('chalk');
const request = require('request');
const dotenv = require('dotenv');

dotenv.config();

function convertBTC(currency = 'USD', amount = 1) {
  const options = {
    url: `https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=${currency}&amount=${amount}`,
    headers: {
      'x-ba-key': process.env.API_KEY,
    },
  };

  request(options, (error, response, body) => {
    let apiResponse;
    try {
      apiResponse = JSON.parse(body);
    } catch (parseError) {
      console.log(chalk.red('Something went wrong in the API. Try in a few minutes.'));
      return parseError;
    }
    console.log(`${chalk.red(amount)} BTC to ${chalk.cyan(currency)} = ${chalk.yellow(apiResponse.price)}`);
  });
}

module.exports = convertBTC;
