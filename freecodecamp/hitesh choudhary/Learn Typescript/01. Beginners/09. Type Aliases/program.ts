//* Type Aliases

/**
 * Aliases simply means giving a new name to a type or a file path so it is easier to read, reuse and maintain it acts as a shortcut or nickname.
 */

/**
 *  Assume that you have different responsibility in our software which accept the same parameters for example in 8 different places like creating user, user detail, update user etc where we use Type Alias
 *
 * ? What is Type Alias (Nicknames for Data types)
 *  A type alias allows you to create a custom name for existing types. Think of it as creating a variable, but not for a value for type we create type alias with type keyword
 */

// Example of type Alias

type User = {
  fullname: string;
  email: string;
  userType: string;
  isPremium: boolean;
};

function userDetail(user: User): User {
  return user;
}

const userOne = userDetail({
  fullname: "Aayush Vyas",
  email: "user@email.com",
  userType: "premium",
  isPremium: true,
});


console.log(userOne)


function updateUser(user:User):User {
    return user
} 


const updUserOne = userDetail({
  fullname: "Kratik Vyas",
  email: "user@email.com",
  userType: "premium",
  isPremium:false,
});

console.log(updUserOne); 

/**
 * Here we are using same type alias of object in two different responsibility function  updateUser and userDetail 
 */