//* Type narrowing

/**
 * ? Typescript narrowing
 *  - In Typescript, narrowing refers to the process of reducing the typeof a variable from a broader type to a more specific type within a certain code block or context.
 * - This is often done through conditional statements or type guard 'basically typeof method' which help the typescript compiler to more precisely what the type is at a given point in the code.
 */

/**
 * ? Some common ways to narrowing can occur in typescript
 */

/**
 * ? 1st. The Type Guard `typeof method`
 *  - Type guard used to narrow down the primitive types like `string`, `number`, `boolean`, `symbol` etc.
 */

function processValue(value: number | string | null) {
  if (!value) throw new Error("value should not be null or undefined");
  // Using type guard method
  if (typeof value === "string") {
    return value.toLowerCase().trim();
  }

  return value.toFixed(2);
}

function userId(id: number | string | null) {
  if (!id) throw new Error("id required");

  if (typeof id === "string") {
    return id.toLowerCase().trim();
  }

  return id.toFixed(2);
}

/**
 * ? The in operator Guard 
 *  - Used to check if an object contains a specific property, allowing you to narrow down the custom object shapes or interfaces. 
 */

interface User {
    name: string; 
    email: string; 
}

interface Admin {
    name: string; 
    email: string; 
    isAdmin: boolean
}


function isAdminAccount(account: User | Admin) {
    // in operator helps to check the specific property exist or not 
    if('isAdmin' in account) {
        return `Admin account `
    }

    return `User account`
} 


const user = isAdminAccount({name:'Aayush Vyas', email:'admin@email.com', isAdmin: true})

console.log(user); 