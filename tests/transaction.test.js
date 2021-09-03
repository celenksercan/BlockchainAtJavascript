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
