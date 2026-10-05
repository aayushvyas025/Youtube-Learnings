//* Union Type in Typescript
function downloadFile(url) {
    return new Promise((resolve, reject) => {
        if (url) {
            const obj = {
                success: true,
                message: "Download file from platform",
                data: "download data",
            };
            resolve(obj);
            return obj;
        }
        else {
            const obj = {
                success: false,
                message: "Error, download file from platform",
                data: null,
            };
            reject(obj);
            return obj;
        }
    });
}
async function consumeFile() {
    return downloadFile("something");
}
consumeFile().then((data) => console.log(data));
// Synchronous Task Union Type
let number = 55;
console.log(number);
number = 55 + "55";
console.log(number);
function fetchUserId(id) {
    if (!id)
        return;
    if (typeof id === "string") {
        id.toLowerCase();
    }
    return {
        id: id,
        firstName: "Aayush",
        lastName: "Vyas",
        age: 27,
        city: "Indore",
        state: "Madhya Pradesh",
        country: "India",
    };
}
const user = fetchUserId("emp12345");
console.log(user);
// Union type with arrays
let givenArr = [1, 2, 3, 4, 5];
// This union type state that the array of number type or string type 
console.log(givenArr);
givenArr = ['1', '2', '3', '4', '5'];
console.log(givenArr);
// Case: What when we have to define multiple type of an array elements 
const multiTypeArr = [true, "false", 1];
console.log(multiTypeArr);
// Case : When we have to create specific type for user online status  than we union literals also 
let onlineUser = "idle";
/**
 * Here, we are using string literals union = "idle" | "online" | "offline"
 *
 */
console.log(onlineUser);
export {};
