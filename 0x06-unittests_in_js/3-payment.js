const Utils = require('./utils')

function sendPaymentRequestToApi(amount, token) {
    const res = Utils.calculateNumber('SUM', amount, token)
        console.log(`The total is ${res}`)
}

module.exports = sendPaymentRequestToApi
