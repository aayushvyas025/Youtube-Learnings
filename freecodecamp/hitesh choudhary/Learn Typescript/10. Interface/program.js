//* Interface  in Typescript
/**
 * - Interface in typescript is a powerful way to define a syntactical contract or blueprint that defines the exact structure, properties, and methods an object or class must adhere to.
 *
 * - Interfaces exist purely for compile-time type-checking  and don't generate the any Javascript code after compilation.
 *
 * - Interface is more like loss form of class
 */
function createUser(user) {
    return user;
}
const userOne = createUser({
    id: 1,
    fullname: "Aayush Vyas",
    age: 27,
    city: "Indore",
    state: "Madhya Pradesh",
    country: "India",
    isEmployed: true,
    getInfo() {
        console.log(`fullname: ${this.fullname}, age: ${this.age}, city: ${this.city} state:${this.state} country: ${this.country} `);
    },
    employmentStatus() {
        if (!this.isEmployed)
            return;
        console.log(`User is Employed`);
    },
});
console.log(userOne);
userOne.getInfo();
userOne.employmentStatus?.();
export {};
