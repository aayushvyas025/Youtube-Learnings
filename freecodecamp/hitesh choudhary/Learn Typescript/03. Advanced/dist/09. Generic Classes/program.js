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
// Here above we have two interfaces first is for Quiz and Course 
class Sellable {
    cart = []; // This cart array have type Generic Array 
    addToCart(product) {
        this.cart.push(product);
    }
}
// This above class Sellable is generics which create object with both interface 
// Quiz  
const quizCart = new Sellable();
quizCart.addToCart({
    name: "TypeScript Quiz",
    type: "Programming",
});
console.log(quizCart);
// Course  
const courseCart = new Sellable();
courseCart.addToCart({
    name: "MERN Stack",
    author: "Aayush",
    subject: "Web Development",
});
console.log(courseCart);
//# sourceMappingURL=program.js.map