//* Arrays Type in Typescript
/**
 * Let explore array's type with practical example
 */
// const superHeros:[] = []; // When we are assign empty array type "[]" than it's type become never and when we push any value it give error that we can't assign elements to never type
//! Default type of array is any
const superHeros = [];
superHeros.push("Spiderman");
// superHeros.push(2) // Here it give error because type of an array is string
superHeros.push("Batman");
superHeros.push("Hulk");
console.log(superHeros);
const numberArr = [1, 2, 3, 4];
console.log(numberArr);
// Another syntax to create array is Array<Type>
const boolArr = [true, false, false, true]; // Here we using this syntax Array<type>
console.log(boolArr);
const users = [];
users.push({
    name: "Aayush Vyas",
    age: 27,
    city: "Indore",
    country: "India",
    isEmployed: false,
});
console.log(users);
const clients = [];
clients.push({
    name: "John Doe",
    age: 45,
    city: "Las Vegas",
    country: "United States",
    isEmployed: true,
});
console.log(clients);
// Case Two: 2D Arrays
const matrix = [
    [1, 2, 5],
    [1, 4, 5],
];
console.log(matrix);
export {};
