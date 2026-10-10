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
