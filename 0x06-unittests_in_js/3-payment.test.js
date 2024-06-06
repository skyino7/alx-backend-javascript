const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWith(spy, 'SUM', 100, 20);
    spy.restore();
  });
  it('should call Utils.calculateNumber with SUM, 10, and 5', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(10, 5);
    sinon.assert.calledWith(spy, 'SUM', 10, 5);
    spy.restore();
  });
});
