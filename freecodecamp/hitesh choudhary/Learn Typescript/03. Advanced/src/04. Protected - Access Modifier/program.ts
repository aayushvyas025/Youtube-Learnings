//* Protected - Access Modifier

/**
 * ? What is Access Modifier ?
 * - Access modifier are keywords in object-oriented programming languages used to set the visibility and accessibility of classes, methods and variables.
 *
 * - Javascript and Typescript does not have traditional keywords for access modifiers like `public`, `private`, or `protected`. Instead it relies on naming conventions, native system symbol introduced in ES2022, and closures to manage scope and data manipulation.
 *
 *
 */

interface User {
  readonly userId: string | number;
  fullname: string;
  email: string;
  accountType: string;
  accountNumber: string;
}

class Bank {
  /**
   * * public fields
   * - By default, all properties and methods inside a javascript or typescript class are public. They can be accessed or modified from anywhere from outside the class.
   *  - We can use public keyword also for public access modifier
   */

  public userId;
  fullname;
  email;
  accountType;
  accountNumber;
  /**
   * * private fields
   *  - To make a property or method strictly private, you must prefix its name with hashtag '#' or private keyword.
   *
   *  - TypeScript's private modifier—which only provides compile-time checks and disappears once compiled to JavaScript. JavaScript private fields are enforced directly by the V8/JavaScript runtime engine.
   *
   *  - Trying to access from outside the class is results in a syntax error.
   */
  //   private balance: number = 0;

  /**
   * * protected fields
   *  - Javascript doesn't have a native protected keyword or symbol. If you want a property to be accessible only within the class and its subclasses (inheritance), developers use the underscore (_) convention.
   *
   * - This is purely a gentleman's agreement. The Javascript engine treats underscore properties as public, but it tells other developers: "Please don't touch this directly"
   *
   *  - In typescript we have `protected` keyword native support.
   */
  protected balance: number = 0;

  constructor(user: User) {
    this.userId = user.userId;
    this.fullname = user.fullname;
    this.email = user.email;
    this.accountType = user.accountType;
    this.accountNumber = user.accountNumber;
  }

  fetchBalance() {
    console.log(`Your ${this.accountType} Bank Account: ${this.balance}`);
  }

  depositAmount(amount: number) {
    return (this.balance += amount);
  }

  withdrawAmount(amount: number) {
    return (this.balance -= amount);
  }
}

class SavingBanks extends Bank {
  addInterest(rate: number) {
    this.balance += (this.balance * rate) / 100;
  }

  showBalance() {
    console.log(`Saving balance: ${this.balance}`);
  }
}
