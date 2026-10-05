//* Any Datatype
/**
 * Any datatype is special type, any that you can use whenever you don't want a particular value to cause type-checking error.
 *
 * When a value is of type any, you can access any properties of it (which will in turn be of type any) call it like a function, assign it to (or from)
 *
 ** The any type is useful when you don’t want to write out a long type just to convince TypeScript that a particular line of code is okay.
 */

// Example of any type
let hero; // here we define any with type inference so it's  not checking type-error 

/**
 * case :  
 * let hero: string;  is annotate string type than it's give error to us   
 * 
 */

function getHero() {
    // return true if it returns boolean and hero annotate string than any type giving error to us 
      return "Spiderman";  
}

hero = getHero();

console.log(hero);

export {};
