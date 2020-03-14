const dotenv = require('dotenv');
const chalk = require('chalk');
const request = require('request-promise-native');
const ora = require('ora');

dotenv.config();

const spinner = ora({
  text: 'Retrieving Bitcoin data...',
  color: 'yellow',
});

function convertBTC(currency = 'USD', amount = 1) {
  const options = {
    url: `https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=${currency}&amount=${amount}`,
    headers: {
      'x-ba-key': process.env.API_KEY,
    },
  };

  spinner.start();

  return request(options)
    .then((body) => {
      spinner.stop();
      return body;
    })
    .then((body) => {
      const apiResponse = JSON.parse(body);
      console.info(`${chalk.red(amount)} BTC to ${chalk.cyan(currency)} = ${chalk.yellow(apiResponse.price)}`);
    })
    .catch((err) => {
      spinner.stop();
      console.info(chalk.red('Something went wrong in the API. Try in a few minutes.'));
      return err;
    });
}

module.exports = convertBTC;
