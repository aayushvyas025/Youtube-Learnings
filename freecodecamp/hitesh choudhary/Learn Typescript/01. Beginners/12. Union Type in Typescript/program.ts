//* Union Type in Typescript

/**
 * ? Union Types in Typescript
 *  - When we know the data is multiple type like number, string, undefined etc. and we have to assign that typescript expression because of uncertain data retrieve mainly use fro API calling or asynchronous task.
 *
 * - A union type allows a variable, function parameter or return value to be a several type.
 *
 * - We use the pipe symbol '|' for creating union in typescript.
 *
 */

//* Example of Promise

//  Error state
type APIErrorResponse = {
  success: boolean;
  message: string;
  data: null;
};

// Success state
type APIResponse = {
  success: boolean;
  message: string;
  data: string;
};

function downloadFile(url: string): Promise<APIResponse | APIErrorResponse> {
  return new Promise((resolve, reject) => {
    if (url) {
      const obj = {
        success: true,
        message: "Download file from platform",
        data: "download data",
      };
      resolve(obj);
      return obj;
    } else {
      const obj = {
        success: false,
        message: "Error, download file from platform",
        data: null,
      };
      reject(obj);
      return obj;
    }
  });
}

async function consumeFile(): Promise<APIErrorResponse | APIResponse> {
  return downloadFile("something");
}

consumeFile().then((data) => console.log(data));

// Synchronous Task Union Type
let number: number | string = 55;
console.log(number);
number = 55 + "55";
console.log(number);

// Case when we are working with multiple type and accessing it's inbuilt method than error warning should be happen

type User = {
  id: number | string;
  firstName: string;
  lastName: string;
  age: number;
  city: string;
  state: string;
  country: string;
};

function fetchUserId(id: number | string): User | undefined {
  if (!id) return;

  if (typeof id === "string") {
    id.toLowerCase();
  }

  return {
    id: id,
    firstName: "Aayush",
    lastName: "Vyas",
    age: 27,
    city: "Indore",
    state: "Madhya Pradesh",
    country: "India",
  };
}

const user = fetchUserId("emp12345");
console.log(user);

// Union type with arrays

let givenArr: string[] | number[] = [1, 2, 3, 4, 5];  
// This union type state that the array of number type or string type 

console.log(givenArr); 

givenArr = ['1', '2', '3', '4', '5']; 
console.log(givenArr); 
 
// Case: What when we have to define multiple type of an array elements 
const multiTypeArr: (number | string | boolean)[] = [true, "false", 1]; 

console.log(multiTypeArr); 

// Case : When we have to create specific type for user online status  than we union literals also 

let onlineUser: "idle" | "online" | "offline" = "idle";  
/**
 * Here, we are using string literals union = "idle" | "online" | "offline" 
 * 
 */
console.log(onlineUser); 

export {};
