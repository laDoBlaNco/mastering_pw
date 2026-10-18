// BankAccount class
// Properties
//  * balance (defaults to 0 if not provided)
//  * accountHolder
//  * accountNumber
// Methods
//  * deposit(amt) - increases balance by amt
//  * withdraw(amt) - decreases balance by amt

class BankAccount {
  constructor(accountHolder, accountNumber, balance = 0) {
    this.accountHolder = accountHolder;
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amt) {
    if (amt <= 0) {
      console.log(`Not a valid deposit amount: ${amt}`);
      return;
    }
    this.balance += amt;
  }
  withdraw(amt) {
    if (amt <= 0) {
      console.log(`Not a valid withdrawal amount: ${amt}`);
      return;
    }
    if (amt > this.balance) {
      console.log(`Insufficient funds. Current balance: ${this.balance}`);
      return;
    }
    this.balance -= amt;
  }
}

const coltAccount = new BankAccount("Colt Steele", "123abc");
console.log(coltAccount);

console.log(coltAccount.balance);

coltAccount.deposit(200);
console.log(coltAccount.balance);

coltAccount.withdraw(500);
coltAccount.withdraw(150);
console.log(coltAccount.balance);
