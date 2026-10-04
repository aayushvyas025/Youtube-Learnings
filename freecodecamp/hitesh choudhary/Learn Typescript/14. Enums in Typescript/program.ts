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

enum Direction {
    Up,   // 0 
    Down, // 1 
    Left, // 2 
    Right // 3 
    // Default values are 0, 1, 2, 3
}

const upDir: Direction.Up = 0
const downDir:Direction.Down = 1 
console.log("Up", upDir); 
console.log("Down", downDir);  

//* api status code enums 
/**
 * Creating ap status code enums 
 */

enum ApiStatus {
  OK = 200,
  CREATE= 201,
  NOT_FOUND=404,
  SERVER_ERROR= 500,
  BAD_REQUEST=400,
  UN_AUTHORIZED= 401
} 


// Now this enum compile back into IIFE and Objects in Javascript 

export {}