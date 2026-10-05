//* readonly and optional (?) in typescript 

/**
 * What are the usage of readonly and optional (?) in typescript  
 * 
 * ? Readonly  
 *  The `readonly` keyword in the Typescript is a compile-time modifier used to make object properties immutable. Once ap property is marked as `readonly`, it can't be re-assigned after its initial-setup either during direct initialization or within a class.  
 * 
 * ? Optional (?) 
 *  In Typescript, you make a property or parameter optional by adding a question mark (?) right after this name. This signals to the compiler that the value can be omitted entirely.  
 * When a property is optional, TypeScript automatically adds undefined to its allowed types.
 */ 

// Example of Readonly and type  

type User = {
readonly id: string ,  // This property id is coming from database so with the help of readonly we create property im-mutable
 name:string, 
 email:string, 
 isActive:boolean
 subscription?: boolean // For this subscription property we use optional so it's not necessary that the subscription data is coming or not.  
}


function userDetail(user:User):User {
    return user 
}

const userOne = userDetail({id:"1028888",name:"Aayush Vyas", email:"user@email.com", isActive:true }); 

console.log(userOne); 
// userOne.id = "1223344"; //! It giving error because id is not mutable because of readonly keyword
userOne.subscription = true; 

console.log(userOne); 

/**
 * ? Ampersand (&) Operator 
 *  In Typescript, the ampersand operator (&) defines the intersection type, which combines multiple types into a single type  
 *  How Intersection Types Work : 
 *  - Combine type: It merge properties and methods from two or more sources (such as types or interfaces) into one unified contract. 
 *  - Strict requirements: An object of an intersection type must satisfy all included types at the same time and possess all of their required members. 
 *  
 */ 

// Example of Ampersand Operator 

type Person = {
  readonly name: string
}

type Employee = {
   readonly _id: string 
    department: string, 
    position?: string,
    role?:string
}

type StaffMember = Person & Employee   // Here with the help of & operator we combine two types  

function employeeDetail(emp:StaffMember):void { 
    console.log(emp)
} 

employeeDetail({_id: "EMPIT1234455",name:"Aayush Vyas", department:"Software Development", position:"Junior Software Engineer", role:"Developer"});  



export {}
