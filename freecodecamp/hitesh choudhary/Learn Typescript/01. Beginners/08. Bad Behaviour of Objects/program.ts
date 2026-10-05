//* Bad behavior of Objects

/**
 * Let understand and explore how we create our objects more type safety.
 */

const user = {
  name: "Aayush Vyas",
  gmail: "aayush25vyas@gmail.com",
  isActive: false,
};

/**
 *  Object pass as arguments or parameters to a function. In real scenario we pass as params object as request to our server for processing of business logic or interacting with other function we can pass object too let understand how we can create that more type safe.
 */

function createUser(user: { name: string; isPaid: boolean }) {
  // Here we define the object type annotation what object type argument receive
  return user;
}

const userOne = createUser({ name: "Aayush Vyas", isPaid: true });
// const userTwo = createUser({name:"Kratik Vyas"});  this give error because we are not providing the second object property
console.log(userOne);

// We can design the object return structure which give more control what object type we have to return upto we are using infer object return type.

function ownerCourse(user: { name: string; course: string; price: number }): {
  name: string;
  course: string;
  price: number;
} {
  return user;
}

const purchaseCourse = ownerCourse({
  name: "Aayush Vyas",
  course: "Typescript Beginner to Advanced",
  price: 2000,
}); 

console.log(purchaseCourse); 

export {};
