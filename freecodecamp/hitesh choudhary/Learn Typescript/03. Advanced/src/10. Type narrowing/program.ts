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
 * ?  2nd.  The in operator Guard
 *  - Used to check if an object contains a specific property, allowing you to narrow down the custom object shapes or interfaces.
 */

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
  // in operator helps to check the specific property exist or not
  if ("isAdmin" in account) {
    return `Admin account `;
  }

  return `User account`;
}

const user = isAdminAccount({
  name: "Aayush Vyas",
  email: "admin@email.com",
  isAdmin: true,
});

console.log(user);

interface Bird {
  fly: () => void;
}

interface Fish {
  swim: () => void;
}

interface Animal {
  run: () => void;
}

function move(animal: Bird | Fish | Animal) {
  if ("fly" in animal) {
    return animal.fly();
  }

  if ("run" in animal) {
    return animal.run();
  }

  return animal.swim();
}

/**
 * ? 3rd. instanceof guard
 *  - instanceof guard used for narrowing down objects that were constructed with a specific class or constructor function
 */

function formatLog(date: Date | string) {
  // Here it checks that date params is instance of Date class or not
  if (date instanceof Date) {
    console.log(date.toUTCString());
  } else {
    console.log(date.trim());
  }
}

class VegFood {
  constructor(
    public title: string,
    public price: number,
    public type: string,
    public isVeg: boolean
  ) {}
}

class NonVegFood {
  constructor(
    public title: string,
    public price: number,
    public type: string,
    public isNonVeg: boolean
  ) {}
}

class FoodOrder<T> {
  private order: T[] = [];

  userOrder(item: T) {
    if (item instanceof NonVegFood || item instanceof VegFood) {
      this.order.push(item);
    }
  }
}

const order = new FoodOrder<VegFood | NonVegFood>();

const paneer = new VegFood("Paneer Tikka", 200, "Starter", true);
const chicken = new NonVegFood("Chicken Biryani", 300, "Main Course", true);

order.userOrder(paneer);
order.userOrder(chicken);

/**
 * ?  4th. Type predicate - User defined type Guards   
 *  - Type predicate is a special return type annotation in typescript used to create user-defined type guards 
 *  - It instructs the compiler that if a function return true, the checked variable can be safely treated as a specific, narrower type within that conditional scope.   
 * 
 *  ? Syntax 
 *  Instead of annotating the function to return a plain boolean, you use the `parameterName` is `Type` 
 */

/**
 * Example of type predicate 
 */

function isNumber(value:unknown): value is number {
    return typeof value === 'number'; 
}

/**
 * Here, we asserted that value should be number and return boolean value 
 */

const numberCheck = isNumber(255); 
console.log(numberCheck) // Output: true  


function isString(str: unknown): str is string {
    return typeof str === 'string'
}

function greetToEveryone(person: unknown) { 
    // This condition only valid when argument is string 
    if(isString(person)) {
        console.log(`Hello, How's the day is going ${person}`); 
    }
}


/**
 * ? Why Use it ? 
 * While native checks like typeof or instanceOf work great for primitives and classes they fall short for custom objects shapes or interfaces. Type predicates the bridge this gap, allowing you to build complex narrowing logic. 
 */


// Example two with interface 

interface Cat {
    meow: () => void 
}

interface Dog {
    bark: () => void 
}


function isCat(animal: Cat | Dog): animal is Cat {
    return "meow" in animal; 
}

function handleAnimal(pet: Cat | Dog) { 
    if(isCat(pet)) {
        pet.meow(); 
    } else{
         pet.bark()
    }

} 


/**
 * ? 5th. Discriminated Unions (Tagged Unions)  
 *  - When working with complex object shapes, you can give each type a shared literal property - often called `type`, `kind` or `status` tag. Typescript instantly narrows the whole object when you evaluate that specific property. 
 */

// Example One 
interface Circle {
    kind: 'circle';    // discriminated tag 
    radius: number; 
} 

interface Square {
    kind: 'square';  // discriminated tag 
    side: number; 
}

interface Rectangle {
    kind: 'rectangle'; // discriminated tag 
    length: number; 
    width: number
}

type Shape = Circle | Rectangle | Square 

function getTrueShape(shape: Shape) { 
    if(shape.kind === 'circle') {
      return Math.PI * shape.radius * 2; 
    } else if(shape.kind === 'square') {
        return shape.side ** 2; 
    } else {
        shape.length * shape.width; 
    }
}

// Example Second 

interface SuccessResponse {
    status: 'success'; 
    data: string; 
}

interface ErrorResponse {
    status: 'error'; 
    data: string 
}


type ApiResponse = SuccessResponse | ErrorResponse 

function handleApiResponse(response: ApiResponse) {
    if(response.status === 'error') {
        console.log(response.data)
    }

    console.log(response.data)
}


/**
 * ? 6th. Exhaustiveness Checking (never)  
 *  - Typescript exhaustiveness checking ensures that every possible cases of a discriminated  
 */