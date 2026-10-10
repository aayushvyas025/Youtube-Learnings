"use strict";
//* Type narrowing
Object.defineProperty(exports, "__esModule", { value: true });
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
function processValue(value) {
    if (!value)
        throw new Error("value should not be null or undefined");
    // Using type guard method
    if (typeof value === "string") {
        return value.toLowerCase().trim();
    }
    return value.toFixed(2);
}
function userId(id) {
    if (!id)
        throw new Error("id required");
    if (typeof id === "string") {
        return id.toLowerCase().trim();
    }
    return id.toFixed(2);
}
function isAdminAccount(account) {
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
function move(animal) {
    if ("fly" in animal) {
        return animal.fly();
    }
    if ("run" in animal) {
        return animal.run();
    }
    return animal.swim();
}
/**
 * ? instanceof guard
 *  - instanceof guard used for narrowing down objects that were constructed with a specific class or constructor function
 */
function formatLog(date) {
    // Here it checks that date params is instance of Date class or not
    if (date instanceof Date) {
        console.log(date.toUTCString());
    }
    else {
        console.log(date.trim());
    }
}
class VegFood {
    title;
    price;
    type;
    isVeg;
    constructor(title, price, type, isVeg) {
        this.title = title;
        this.price = price;
        this.type = type;
        this.isVeg = isVeg;
    }
}
class NonVegFood {
    title;
    price;
    type;
    isNonVeg;
    constructor(title, price, type, isNonVeg) {
        this.title = title;
        this.price = price;
        this.type = type;
        this.isNonVeg = isNonVeg;
    }
}
class FoodOrder {
    order = [];
    userOrder(item) {
        if (item instanceof NonVegFood || item instanceof VegFood) {
            this.order.push(item);
        }
    }
}
const order = new FoodOrder();
const paneer = new VegFood("Paneer Tikka", 200, "Starter", true);
const chicken = new NonVegFood("Chicken Biryani", 300, "Main Course", true);
order.userOrder(paneer);
order.userOrder(chicken);
//# sourceMappingURL=program.js.map