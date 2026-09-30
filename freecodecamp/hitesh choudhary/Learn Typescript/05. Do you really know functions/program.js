//* Do you really know functions 
/**
 * Let understand how we define types for our function and it's return value
 */
// function addTwo(num) {
//     return num + 2; 
// } 
// Here we infer the num parameter by ts compiler to handle and it's implicitly any type.
// So, it's create logic error in our code because function accept every type value as a parameters so we have to safe the type check 
function addTwo(num) {
    return num + 2; // Now here also one issue it that here also return type also infer by compiler only implicitly 
}
const resultOne = addTwo(2);
console.log(resultOne);
/**
 * ! Here we understand that functions parameter are default assign the any type
 */
function convertInUpperCase(str) {
    if (typeof str !== "string")
        console.log("Please enter the string");
    return str.toUpperCase();
}
const uppercaseStr = convertInUpperCase('Aayush');
console.log(uppercaseStr);
function signupUser(nam, email, password, premiumUser) {
}
// let's try with arrow func also 
const loginUser = (name, email, premiumUser = false) => {
};
signupUser("Aayush Vyas", "user@email.com", "user@1234", false);
// Now user for login mainly we need two credentials often name and password 
loginUser("user@email.com", "user@1234");
export {};
