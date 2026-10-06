//* Classes with typescript

/**
 * Let understand and explore how we typed our classes in typescript
 */

interface UserCredentials {
  fullname: string;
  email: string;
  password: string;
  city?: string
}

class User {
  fullname: string;
  email: string;
  password: string;
  readonly city: string | undefined; 

  constructor(userCred: UserCredentials) {
    this.fullname = userCred.fullname;

    if (!userCred.email.includes("@")) {
      throw new Error("Invalid email");
    }
    this.email = userCred.email;

    if (userCred.password.length <= 5) {
      throw new Error("Password must be longer than 5 characters");
    }

    this.password = userCred.password; 
    this.city = userCred.city
  }
} 


const aayush = new User({fullname: "Aayush Vyas", email:"aayush@vyasemail.com", password:"user@1234", city:"Indore"}); 

console.log(aayush);  