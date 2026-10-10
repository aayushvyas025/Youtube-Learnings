//* Generic Type in Typescript

/**
 * ? What is generic type in typescript
 *  - In typescript, generics are feature that allows you to create reusable code components (functions, classes, interface or type alias) that work with variety of data types instead of single one, all while maintaining strict type safety
 *
 * - Think of generic as passing arguments to your types the same way you pass the argument to a function. Instead of locking a component into one data or restoring to any (which off the type checking more javascript type behavior), a generic uses placeholder - called a type variable - that captures the specific type when the code is executed.
 *
 *  ? Why Use Generics ?
 *  1. Code reusability: You write the  logic one, and it can be handle by strings, boolean, numbers, arrays  or custom objects.
 *
 *  2. Type Safety: Typescript remembers the exact type you passed in. If you input a string, it guarantees a string comes out, providing full autocompletion and compile time checks.
 *
 *  3. No code duplication: We don't write to write separate versions of the same function just to handle different data type.
 */

/**
 * ? How generic work (With Example)
 * By convention, Typescript  uses the letters, letter <Type> or <T> inside the angle brackets as the placeholder for the type parameter, through you can use any valid name.
 *
 *   Example of Generic Function
 */

// Case One:

function identityOne(args: number): number {
  return args;
}

// So in above identityOne will return number take only and takes argument only number

const valueOne = identityOne(25);
console.log(valueOne);

// Case Two:
/**
 * Now we have to return string and take argument number this also more predictable if we have to return other type than we have to use `any` which was avoid because it stop checking type-safety
 */

function identityTwo(args: number): string {
  return String(args);
}

const valueTwo = identityTwo(25);
console.log(valueTwo);

// So we have to capture Type Dynamically

function identity<T>(args: T): T {
  return args;
}

const value = identity<string>("Aayush Vyas");
console.log(value);

const value1 = identity<number>(2555);
console.log(value1);
