"use strict";

function convertBTC() {
  var currency = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'USD';
  var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "".concat(amount, " BTC to ").concat(currency, " = 2000");
}

module.exports = convertBTC;