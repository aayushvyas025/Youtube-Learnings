//* readonly and optional (?) in typescript 
function userDetail(user) {
    return user;
}
const userOne = userDetail({ id: "1028888", name: "Aayush Vyas", email: "user@email.com", isActive: true });
console.log(userOne);
// userOne.id = "1223344"; //! It giving error because id is not mutable because of readonly keyword
userOne.subscription = true;
console.log(userOne);
function employeeDetail(emp) {
    console.log(emp);
}
employeeDetail({ _id: "EMPIT1234455", name: "Aayush Vyas", department: "Software Development", position: "Junior Software Engineer", role: "Developer" });
export {};
