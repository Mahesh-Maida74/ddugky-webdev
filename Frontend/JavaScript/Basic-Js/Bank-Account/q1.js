const getCurrTime = function () {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  }).format(new Date());
};

const countDeposite = function (amount) {
  // let totaldeposite = a++;
  // return totaldeposite;
  return amount;
};

class BankAccount {
  #nominee;
  #phone;
  #pan;
  #initialAmount;
  #accountNo;
  #transaction;
  #accountOpenDate;
  #balance;

  constructor({ name, phone, pan, nominee, initialAmount }) {
    this.name = name;
    this.#nominee = nominee;
    this.#phone = phone;
    this.#pan = pan;
    this.#initialAmount = initialAmount;
    this.#accountNo = phone + Date.now();
    this.#balance = +initialAmount;
    this.#transaction = [{ time: getCurrTime(), amount: +initialAmount }];
  }

  get accountNo() {
    return this.#accountNo;
  }

  get accountDetails() {
    return {
      "Owner Name": this.name,
      "Nominee Name": this.#nominee,
      "Account Number": this.#accountNo,
      "Phone Number": this.#phone,
      "Nominee Name": this.#nominee,
    };
  }

  deposit(depositAmount) {
    this.#balance += depositAmount;
    this.#transaction.push({
      time: getCurrTime(),
      amount: depositAmount,
      type: "deposit",
    });
  }

  withdraw(withdrawAmount) {
    if (withdrawAmount > this.#balance) {
      console.log(`Withdrawal of ₹${withdrawAmount} can't be processed`);
      console.log(`Error: Insufficient Balance`);
      return;
    }

    this.#balance -= withdrawAmount;
    this.#transaction.push({
      time: getCurrTime(),
      amount: -withdrawAmount,
      type: "withdrawal",
    });
  }

  displayStatement() {
    console.log(`\n\n--- TRANSACTIONS FOR ACC NO: ${this.#accountNo} ---`);
    console.table(this.#transaction);
  }

  ApproveLoan(depositAmount) {
    console.log(depositAmount);
    if (this.#balance >= 5000) {
      return console.log(`You can Eligibale for ${depositAmount} Rupees Loan `);
    }
    if (this.#balance >= 100000) {
      return console.log(`You are Elegibale for ${depositAmount} Rupess Loan`);
    }
    if (this.#balance >= 200000) {
      return console.log(`You are elegibale for ${depositAmount} Rupess loan`);
    }
  }

  getLoan(depositAmount) {
    return console.log(thisdepositAmount);
  }
}

const user01 = {
  name: "Fagan Parte",
  nominee: "his father",
  phone: 1234678993,
  pan: "HNAPHI12348",
  initialAmount: 50000,
};

const acc01 = new BankAccount(user01);

// console.log(acc01.withdraw(5000));
console.log(acc01.deposit(3000));

// console.log(acc01.accountDetails);

console.log(acc01.deposit(300));
console.log(acc01.displayStatement());

// acc01.displayStatement();

console.log(countDeposite());
