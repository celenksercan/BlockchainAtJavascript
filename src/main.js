const {Blockchain, Transaction}=require('./blockchain');
const EC=require('elliptic').ec;
const ec=new EC('secp256k1');

const myKey=ec.keyFromPrivate('c3d3e71dc23e73e0a65657fb03e153738e8bbce5dc5e15e624bbf63d055122ff');
const myWalletAddress=myKey.getPublic('hex');

let Bakor=new Blockchain();


const tx1=new Transaction(myWalletAddress, 'publicKey goes here', 10);
tx1.signTransaction(myKey);
Bakor.addTransaction(tx1);


console.log('\n Starting the miner...');
Bakor.minePendingTransactions(myWalletAddress);

console.log('\nBalance of sercanWallets', Bakor.getBalanceOfAddress(myWalletAddress));







//Private key= c3d3e71dc23e73e0a65657fb03e153738e8bbce5dc5e15e624bbf63d055122ff

//Public key= 0401c6e9cd9804207d2a0bf92d511490ca61925091c80e3b2e35b203efe66dca348c94bd4487b2faee86f44add67632c6fdd0ccff41a5379fdb87cc9c938005cb6