/* 
Write a constructor function BankAccount(owner, balance) and add prototype methods:
deposit(amount)
withdraw(amount)
getBalance()
*/

const BankAccount = function (owner, balance) {
  this.owner = owner;
  this.balance = balance;
};

BankAccount.prototype.deposit = function (amount) {
  console.log(`Total amount deposite  ${this.balance + amount}`);
};
BankAccount.prototype.withdraw = function (amount) {
  console.log(` Total amount withraw is ${this.balance - amount}`);
};

BankAccount.prototype.getBalance = function () {
  console.log(`Total Amount Available ${this.balance}`);
};

const bank01 = new BankAccount("Mahesh", 50000);
const bank02 = new BankAccount("Rahul", 1000000);
console.log(bank01);

console.log(bank02);
bank01.deposit(2300);
bank01.withdraw(5000);
bank01.getBalance();
