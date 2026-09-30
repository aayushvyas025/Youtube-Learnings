# Overview of Layered Architecture in Software Development

## Introduction to Layered Architecture

- Layered Architecture is Software design pattern that organize an application into horizontal layers which make our software maintainable and achieve clean architecture.
- In this architecture, each layer has a specific and distinct responsibility which they have to perform.

## Which SOLID principles it work on ?

Layered Architecture followed two main clean code principles of SOLID

- **Single Responsibility principle (SRP)** - Each class or modules should have only one job, meaning it should have only one reason to change.
- **Dependency Inversion principle** - Higher modules should not depend on low level modules, both should depend on abstraction.

## Why use Layered Architecture ?

We understand the main purpose of Layered Architecture it's create our code more flexible, modular, layered organize, to maintain and scale our software.

let understand with example: Suppose you are write the signup controller in Express.js and all the validation logic, business logic, and database layer logic in it basically assign all the responsibility to achieve.

```js
const signupUser = async (request, response) => {
  const { fullname, email, age } = request.body;

  if (!fullname.trim() || !email.trim()) {
    return response.status(401).json({
      success: false,
      message: !fullname.trim() ? "fullname required" : "email required",
    });
  }

  if (typeof age !== "number" || age < 0) {
    return response.status(401).json({
      success: false,
      message: age < 0 ? "age should be greater than 0" : "age required",
    });
  }

  try {
    const newUser = await User.create({ fullname, email, age });
    return response
      .status(201)
      .json({ success: true, message: "User created successfully", newUser });
  } catch (error) {
    console.log(`Error, while creating user: ${error.message}`);
    return response
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};
```
Now looking to this controller, with all aspects this controller is best to perform every responsibility extracting params, checking validation, handling business logic, database layered but for software scalability and maintainability not up-to mark. 

Let's discuss those Edge Cases 

#### Case One: Having Multiple Controller
If we have multiple controller usually production software have too! assume that your project have 50-100 controllers have controller who do different operations like one is auth, user etc. 
So some functionality of this controller like validation, third party interactions "like cloudinary, email service, payment gateway, redis, external apis", so we can't implement the same functionality to every controller which is illogical instead we create reusable service function which responsibility to handle those operation.  

#### Case Two: Migrate to Other Database  
Assume that you wan't to migrate your software to different database for better performance or enhancement so, we don't go to every controller and manually change our database layer implementation with create work very tedious so we have separate layer of database to interact with so our code become very maintainable.   

#### Case Three: Separation of Concern 
In above controller we observe that all the responsibility handle by controller only which makes our controller heavy instead of we create separation or layered to handle different - different responsibility and our business logic should be separate to other responsibility which mainly handle by the controller not validations, database layer or third-party services method.  

### **`Layered Architecture is not primarily about folders. It is about responsibilities and dependency direction.`**