//* Starting with Typescript 
/**
 * First we write normal javascript than understand the features of typescript on javascript
 */
console.log("Aayush Vyas");
// const user = {name:"Aayush Vyas", age:27};  
// it is giving error to our user object  
/**
 * When we execute and run it returns the program.js file generated.
 * And Typescript giving errors and suggestion to our code.
 */
/**
 * ? Types in Typescript
 * - As we understand that typescript mainly for types let explore different types in it.
 * - Typescript types are also classified same as javascript but we can't divide types in any categories like primitive or non-primitives let it be type only
 *  The types are Number, Boolean, String, Undefined, Null, Void "This is new type introduce", Array, Object, Tuples, Any 'Not recommended Type because it's provide more javascript type functionality to our expression', Never, Unknown
 *
 */
/**
 * ? Syntax of assign type to our variables in typescript
 *  variable-keyword <variable-identifier>:type = value or data
 *  In typescript every type in lowercase mainly
 */
let myName = "Aayush Vyas";
// Now we can't re-assign the different type of value to this myName variable otherwise it give error to us !!! 
// myName = 25;  //* It give suggestion that number type is not assignable to it.  
console.log(myName);
const myNumber = 1;
console.log(myNumber);
export {};
