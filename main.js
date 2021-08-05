
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