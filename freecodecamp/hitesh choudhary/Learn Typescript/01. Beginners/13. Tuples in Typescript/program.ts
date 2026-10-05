//* Tuples in Typescript 

/**
 * ? Tuples in Typescript 
 *  -  In typescript, a tuple is a specialized array with a fixed length and strongly typed positions. While a standard array like (string | number)[]  can hold any numbers of strings or numbers in any order, a tuple enforces exactly which type goes into which index. 
 * 
 * - At runtime, tuples compile down into ordinary JavaScript arrays; their strict constraints are enforced entirely at compile-time. 
 * 
 * - Mainly it fixed the length of an array and enforce strongly typed position. 
 * 
 * ? Syntax of tuple:  [type-one, type-two, type-three]   assigning the type inside the array  
 *    
 */ 

let user:[string, number, boolean]; 
/**
 * Here, we are using tuple to define user array 
 */

user = ["Aayush Vyas", 28, true];  

console.log(user); 

// user = ["Kratik Vyas", 29] It give error warning because doesn't consist of third type of our array 


// Case One : When we have to create specific array mainly for RGB than we use Tuples 
type RGB = [number, number, number]; 

const redRgbValue: RGB = [255, 0, 0]; 

console.log(redRgbValue); 

// Case Two: When we want specific coordinates for any location 

type Coordinates = readonly [number, number]; 

const indiaCoordinate:Coordinates = [ 20.5937, 78.9629]; 

console.log(indiaCoordinate); 

/**
 * Summary: Tuples which give more type hold on our arrays and also give specific array hold  
 *  - It provide the fixed length to our array  
 *  - It help to constraint for strongly type position.   
 *
 */



export {}
