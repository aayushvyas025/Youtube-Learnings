//* Generic Arrays and Arrow Function

/**
 * Let understand who we declare generic types of Arrays and Arrow function with example
 */

/**
 * ? Generic Array Type
 *  - We can create generic array type when we are creating APIs service function so we can't know which type of data we received so we typed as generic
 */

function getSearchProducts<T>(products: T[]): T | undefined {
  return products[3];
}

// Let understand how we create generic type in typescript
const getMoreSearchProducts = <T>(products: T[]): T | undefined => {
  const myIndex = 3;
  return products[myIndex];
};


const searchedEle = getMoreSearchProducts(["aayush", "ayush", "aayush"]);
console.log(searchedEle); 