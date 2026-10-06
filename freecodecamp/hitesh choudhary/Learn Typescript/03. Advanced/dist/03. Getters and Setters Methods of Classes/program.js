"use strict";
//* Getter and Setters Methods of Classes
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    // Default class member takes as public member only
    userId;
    fullname;
    accountType;
    email;
    phoneNumber;
    balance = 0;
    constructor(user) {
        if (!user.email.includes("@"))
            throw new Error("Enter valid email");
        if (user.phoneNumber.length > 10)
            throw new Error("Enter valid phone number");
        this.userId = user.userId;
        this.fullname = user.fullname;
        this.accountType = user.accountType;
        this.email = user.email;
        this.phoneNumber = user.phoneNumber;
    }
    // Here we create setter & getter methods on balance
    set setDepositAmount(amount) {
        if (amount < 1)
            throw new Error("Enter valid amount");
        this.balance += amount;
    }
    get getBalance() {
        return `Your account balance: ${this.balance}`;
    }
    set setWithdrawAmount(amount) {
        const currentBalance = this.balance;
        if (amount > currentBalance)
            throw new Error("Insufficient Funds to withdraw");
        this.balance -= amount;
    }
    // We can create method private also which is accessible by class only.
    fetchBalance() {
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
console.log(userBalance);
//# sourceMappingURL=program.js.map