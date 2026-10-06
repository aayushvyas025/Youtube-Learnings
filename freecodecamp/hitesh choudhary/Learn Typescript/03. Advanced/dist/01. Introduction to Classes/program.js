"use strict";
//* Classes with typescript
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    fullname;
    email;
    password;
    city;
    constructor(userCred) {
        this.fullname = userCred.fullname;
        if (!userCred.email.includes("@")) {
            throw new Error("Invalid email");
        }
        this.email = userCred.email;
        if (userCred.password.length <= 5) {
            throw new Error("Password must be longer than 5 characters");
        }
        this.password = userCred.password;
        this.city = userCred.city;
    }
}
const aayush = new User({ fullname: "Aayush Vyas", email: "aayush@vyasemail.com", password: "user@1234", city: "Indore" });
console.log(aayush);
//# sourceMappingURL=program.js.map