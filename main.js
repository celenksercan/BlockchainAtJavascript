const {Blockchain, Transaction}=require('./blockchain');
const EC=require('elliptic').ec;
const ec=new EC('secp256k1');

const myKey=ec.keyFromPrivate('c3d3e71dc23e73e0a65657fb03e153738e8bbce5dc5e15e624bbf63d055122ff');
const myWalletAddress=myKey.getPublic('hex');

let Bakor=new Blockchain();
Bakor.createTransaction(new Transaction('address1','address2',100));
Bakor.createTransaction(new Transaction('address2','address1',500));
Bakor.createTransaction(new Transaction('address3','address4',500));


console.log('\n Starting the miner...');
Bakor.minePendingTransactions('miner-sercan');
console.log('\nBalance of sercan is', Bakor.getBalanceOfAddress('miner-sercan'));

console.log('\n Again start the mining....')
Bakor.minePendingTransactions('miner-sercan');
console.log('\nBalance of sercan is', Bakor.getBalanceOfAddress('miner-sercan'));
//






//console.log(JSON.stringify(Bakor,null,4)); blok olusturma