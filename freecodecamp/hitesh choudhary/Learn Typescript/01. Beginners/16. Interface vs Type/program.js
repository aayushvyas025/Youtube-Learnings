//* Interface vs Type
/**
 * ? Interface vs Type
 * In Typescript, interface and type are highly similar and often interchangeable because both define the shape of an object. However, the core difference is that interface is open for extension via declaration merging mainly know as re-opening of interface, while type is closed and offers superior versatility for advanced type manipulation.
 */
const employeeOne = {
    empId: 14589,
    fullname: "Aayush Vyas",
    age: 27,
    city: "Indore",
    state: "Madhya Pradesh",
    country: "India",
    department: "Software Development",
    position: "Associate Software Developer",
    role: "Full stack Developer",
};
console.log(employeeOne);
export {};
