//* Enums in Typescript  
/**
 * ? Enums in Typescript
 *  - Enums (short of enumeration) are a feature in typescript that allow you to defined a set of specific named constant.
 *  - Unlike most typescript features, which only exist at compile-time for type checking, enums compile into real-objects that exist at run-time.
 *  - They are primarily used to replace "magic numbers" or hardcoded strings to make code more readable, type-safe, and self-documenting.
 *
 * * Syntax of Enum
 *   enum <name-enum-type>  {
 *      CONSTANT-ONE,
 *      CONSTANT-TWO,
 *      CONSTANT-THREE= value we can provide the value also
 *   }
 */
// Example of Enums 
//* Numeric Enums 
/**
 * Creating enums for direction
 */
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right"; // 3 
    // Default values are 0, 1, 2, 3
})(Direction || (Direction = {}));
const upDir = 0;
const downDir = 1;
console.log("Up", upDir);
console.log("Down", downDir);
//* api status code enums 
/**
 * Creating ap status code enums
 */
var ApiStatus;
(function (ApiStatus) {
    ApiStatus[ApiStatus["OK"] = 200] = "OK";
    ApiStatus[ApiStatus["CREATE"] = 201] = "CREATE";
    ApiStatus[ApiStatus["NOT_FOUND"] = 404] = "NOT_FOUND";
    ApiStatus[ApiStatus["SERVER_ERROR"] = 500] = "SERVER_ERROR";
    ApiStatus[ApiStatus["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    ApiStatus[ApiStatus["UN_AUTHORIZED"] = 401] = "UN_AUTHORIZED";
})(ApiStatus || (ApiStatus = {})); 


export {};
