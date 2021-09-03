const assert = require('assert');
const { Transaction } = require('../src/blockchain');
const { createSignedTx, signingKey } = require('./helpers');

let txObject = null;

beforeEach(function() {
  txObject = new Transaction('fromAddress', 'toAddress', 9999);
});
