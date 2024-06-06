const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
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
  it('should round -1.4 and -2.4 and return -3', () => {
    assert.strictEqual(calculateNumber(-1.4, -2.4), -3);
  });
  it('should round 1.5 and 2.5 and return 5', () => {
    assert.strictEqual(calculateNumber(1.5, 2.5), 5);
  });
  it('should round 1.51 and 2.51 and return 5', () => {
    assert.strictEqual(calculateNumber(1.51, 2.51), 5);
  });
  it('should round 1 and 3.7 and return 5', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('should round 1.2 and 3.7 and return 5', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it('should round 1.5 and 3.7 and return 6', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
