"use strict";
//* Generic Arrays and Arrow Function
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Let understand who we declare generic types of Arrays and Arrow function with example
 */
/**
 * ? Generic Array Type
 *  - We can create generic array type when we are creating APIs service function so we can't know which type of data we received so we typed as generic
 */
function getSearchProducts(products) {
    return products[3];
}
// Let understand how we create generic type in typescript
const getMoreSearchProducts = (products) => {
    const myIndex = 3;
    return products[myIndex];
};
const searchedEle = getMoreSearchProducts(["aayush", "ayush", "aayush"]);
console.log(searchedEle);
//# sourceMappingURL=program.js.map