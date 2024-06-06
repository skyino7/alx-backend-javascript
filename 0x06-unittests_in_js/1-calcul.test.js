const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should add two numbers and return the sum', function() {
      assert.strictEqual(calculateNumber('SUM', 1, 2), 3);
    });

    it('should round 1.4 and 4.5 and return 6', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should round 1.5 and 2.5 and return 5', function() {
      assert.strictEqual(calculateNumber('SUM', 1.5, 2.5), 5);
    });

    it('should round -1.4 and -2.4 and return -3', function() {
      assert.strictEqual(calculateNumber('SUM', -1.4, -2.4), -3);
    });
  });

  describe('SUBTRACT', function() {
    it('should round 1.4 and 4.5 and return -4', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should round 1.5 and 2.5 and return -1', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 2.5), -1);
    });

    it('should round -1.4 and -2.4 and return 1', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -2.4), 1);
    });
  });

  describe('DIVIDE', function() {
    it('should round 1.4 and 2.4 and return 0.5', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 2.4), 0.5);
    });

    it('should round 1.4 and 4.5 and return 0.2', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should round 1.4 and 0 and return Error', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });
});
