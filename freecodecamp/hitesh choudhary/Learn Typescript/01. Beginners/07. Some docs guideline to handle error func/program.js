//* Some docs guideline to handle Error in Function 
/**
 *  When ever we don't want to return any value from our function we use void mainly
 *  Default return value in typescript is void only
 */
// Example One: We have to console error so for that we are creating custom error func 
function consoleError(msg) {
    console.error(msg);
}
consoleError("Error, while fetching api");
/**
 * Example Two: When we have to handle Error not for return any-thing or we have to terminate or throw error
 * ! For this we have to use never type of typescript which  represents values that will never occur mainly use to throw error, terminate func, and for looping also
 */
function handleError(mes) {
    throw new Error(mes);
}
handleError("Error occurs");
export {};
