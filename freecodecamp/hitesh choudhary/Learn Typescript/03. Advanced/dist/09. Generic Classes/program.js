"use strict";
//* Generic Classes
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ? Using Type Parameters in Generic Constraints
 * First we understand using type parameters in  generics constraints
 */
//* Example if you are creating addTwoNumber func
function addTwoNumber(valueOne, valueTwo) {
    const sum = valueOne + valueTwo;
    return sum;
}
function connectToDb(obj) {
    console.log(`Connection setup with database`);
    console.log(obj);
}
connectToDb({ connection: "mongodb://localhost:27017", username: "admin" });
//# sourceMappingURL=program.js.map