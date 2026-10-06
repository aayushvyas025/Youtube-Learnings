//* Getter and Setters Methods of Classes

/**
 * Let's understand amd explore how we can create getter and setter method with type safety
 */

interface User {
  readonly userId: number | string;
  fullname: string;
  accountType: string;
  email: string;
  phoneNumber: string;
}

class BankAccount {
  // Default class member takes as public member only
  userId;
  fullname;
  accountType;
  email;
  phoneNumber;
  private balance: number = 0;

  constructor(user: User) {
    if (!user.email.includes("@")) throw new Error("Enter valid email");
    if (user.phoneNumber.length > 10)
      throw new Error("Enter valid phone number");
    this.userId = user.userId;
    this.fullname = user.fullname;
    this.accountType = user.accountType;
    this.email = user.email;
    this.phoneNumber = user.phoneNumber;
  }

  // Here we create setter & getter methods on balance
  set setDepositAmount(amount: number) {
    if (amount < 1) throw new Error("Enter valid amount");
    this.balance += amount;
  }

  private get getBalance(): string {
    return `Your account balance: ${this.balance}`;
  }

  set setWithdrawAmount(amount: number) {
    const currentBalance = this.balance;
    if (amount > currentBalance)
      throw new Error("Insufficient Funds to withdraw");
    this.balance -= amount;
  }

  // We can create method private also which is accessible by class only.
  fetchBalance(): string {
    return this.getBalance;
  }
}

const user = new BankAccount({
  userId: "indBnk50001",
  fullname: "Aayush Vyas",
  accountType: "Saving",
  email: "aayush@vyasemail.com",
  phoneNumber: "9644066282",
});

console.log(user);

user.setDepositAmount = 50000;

const userBalance = user.fetchBalance();

user.setWithdrawAmount = 3000;

console.log(userBalance)