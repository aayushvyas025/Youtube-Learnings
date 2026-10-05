//* Better way to write functions
/**
 * As we discuss in previous concept of function we can make our return type more specific so what we want to return from our function
 */

// example one : we want to add two number but return the output in string

function addNumbs(numOne: number, numTwo: number): string {
  return String(numOne + numTwo);
}

// We are returning our sum into string

const resultOne = addNumbs(5, 4);
console.log(resultOne);

// We can control our function return also explicitly or implicitly

// Case: When we have to handle multiple type return in function
function apiService(url: string) {
  if (typeof url !== "string") {
    return 0;
  }
  if (url) {
    return true;
  }

  return "Error, while fetching url";
}

const apiRes = apiService("download");
console.log(apiRes)
/**
 * This type of situation is better understand by Union type in typescript which we define multiple type for incoming value of variable or function return. 
 * ! Here also apiService function is handle by the union type only but implicit or infer way 
 */


// function returns with arrow func 
/**
 * ! When we are define the return type of function with that we have to return specific value also otherwise it give error to us.  
 */

const greetHello = (name: string): string => `Hello, How are you ${name}`; 
const greetAayush = greetHello("Aayush");  

console.log(greetAayush); 

// const arr = ["one", "two", "three", "four", "five", "six"]; 

const arr = [1,2,3,4,5,6]; 

/**
 * Typescript is so smart in context switching it's own understand which type is returning from map method of array without define type annotation
 */

arr.map(element => {
    console.log(`Elements of an arr = ${element}`); 
})

export {};
