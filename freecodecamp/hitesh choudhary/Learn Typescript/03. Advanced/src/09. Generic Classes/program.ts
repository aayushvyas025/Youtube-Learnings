//* Generic Classes

/**
 * ? Using Type Parameters in Generic Constraints
 * First we understand using type parameters in  generics constraints
 */

//* Example if you are creating addTwoNumber func
function addTwoNumber<T extends number, U extends number>(
  valueOne: T,
  valueTwo: U,
): number {
  const sum = valueOne + valueTwo;
  return sum;
}

/**
 * Example
 * Now we have to create  database connection generic func
 */

interface Database {
  connection: string;
  username: string;
  password?: string;
}

function connectToDb<T extends Database>(obj: T) {
  console.log(`Connection setup with database`);
  console.log(obj);
}

connectToDb({ connection: "mongodb://localhost:27017", username: "admin" }); 


/**
 * ? Generic Classes 
 *  Let understand how we create generic classes with example 
 */

interface Quiz {
    name: string, 
    type: string
}

interface Course {
    name: string, 
    author: string, 
    subject: string
}

// Here above we have two interfaces first is for Quiz and Course 

class Sellable<T> {
    public cart: T[] = [];  // This cart array have type Generic Array 

    addToCart(product: T) {
        this.cart.push(product)
    }
} 


// This above class Sellable is generics which create object with both interface 

// Quiz  
const quizCart = new Sellable<Quiz>();

quizCart.addToCart({
  name: "TypeScript Quiz",
  type: "Programming",
});

console.log(quizCart); 

// Course  

const courseCart = new Sellable<Course>();

courseCart.addToCart({
  name: "MERN Stack",
  author: "Aayush",
  subject: "Web Development",
});

console.log(courseCart); 


