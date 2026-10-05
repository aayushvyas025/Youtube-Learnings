"use strict";
//* Type Aliases
function userDetail(user) {
    return user;
}
const userOne = userDetail({
    fullname: "Aayush Vyas",
    email: "user@email.com",
    userType: "premium",
    isPremium: true,
});
console.log(userOne);
function updateUser(user) {
    return user;
}
const updUserOne = userDetail({
    fullname: "Kratik Vyas",
    email: "user@email.com",
    userType: "premium",
    isPremium: false,
});
console.log(updUserOne);
/**
 * Here we are using same type alias of object in two different responsibility function  updateUser and userDetail
 */ 
