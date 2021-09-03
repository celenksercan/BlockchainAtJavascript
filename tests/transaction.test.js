const assert = require('assert');
const { Transaction } = require('../src/blockchain');
const { createSignedTx, signingKey } = require('./helpers');

let txObject = null;

beforeEach(function() {
  txObject = new Transaction('fromAddress', 'toAddress', 9999);
});

describe('Transaction class', function() {
  describe('Constructor', function() {
    it('should automatically set the current date', function() {
      const actual = txObject.timestamp;
      const minTime = Date.now() - 1000;
      const maxTime = Date.now() + 1000;
      
      assert(actual > minTime && actual < maxTime, 'Tx does not have a good timestamp');
    });


    it('should correctly save from, to and amount', function() {
      txObject = new Transaction('a1', 'b1', 10);

      assert.strict.equal(txObject.fromAddress, 'a1');
      assert.strict.equal(txObject.toAddress, 'b1');
      assert.strict.equal(txObject.amount, 10);
    });
  });
