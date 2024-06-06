const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return a number', () => {
    assert.strictEqual(typeof calculateNumber(1, 2), 'number');
  });
  it('should return 3', () => {
    assert.strictEqual(calculateNumber(1, 2), 3);
  });
  it('should return 2', () => {
    assert.strictEqual(calculateNumber(1, 1), 2);
  });
  it('should return 4', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('should return 0', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });
  it('should return -4', () => {
    assert.strictEqual(calculateNumber(-2, -2), -4);
  });
});
