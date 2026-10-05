//* Number, Boolean and Type Inference 
/**
 * Let explore number, boolean and type inference
 *
 * number: this type represent the numbers like 42. Javascript does not have special runtime value for integers, so there's no equivalent to int and float - everything is simply number
 */
let myNumber = 12234445;
// Now when we use number type than this depicts or annotate that this variable only reserves to number type only. 
// assign different type to myNumber 
// myNumber = "14556";  It give error string doesn't assign to number type 
myNumber = 47889;
console.log(myNumber);
/**
 * boolean: this type represent the boolean values true and false.
 *
 */
let isLoggedIn = true;
// Now when we use boolean type than this annotate that this variable only reserves to boolean type only. 
isLoggedIn = false;
console.log(isLoggedIn);
/**
 * ! Above we are doing annotation types with providing type explicitly
 *
 * ? What is Type Annotation ?
 *  Typescript type annotations are explicit labels added to code using colon (:) to specify the exact data type of variables, function parameters, and return value
 *
 * * How they work
 *  Syntax: written as let variableName: type = value;
 *  Type Safety: The Typescript compiler throws an error if a value of the wrong type assigned to an annotated identifier.
 *  Early Error Detection: They catch bugs during the development before the code runs in the development.
 *
 * ? What is Typescript Inference ?
 * In Typescript, type inference is the compiler's ability to automatically determine and assign data types to variables, expression and function return values based on their value and context
 * This eliminates the redundant, explicit type annotations while maintaining 100% type safety.
 */
// Example of typescript inference: 
let number = 25; // Here we initialize variable with the type inference 
number = 1000;
console.log(number);
let fullname = "Aayush Vyas";
//  fullname = true   this is not acceptable although 
console.log(fullname);
export {};
