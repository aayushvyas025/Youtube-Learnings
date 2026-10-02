# Understanding Layered Architecture, What is it and Why we need it ?  

## Understanding the Layered Architecture 
Layered Architecture also know as **4 Layer Architecture** due to 4 layers of responsibilities, Those are: 
``` 
First Layer: Presentation Layer (Controllers/Routes) 
                      |
  Second Layer: Service Layer (Business Logic/Rules) 
                      |
  Third Layer: Repository Layer (Data Access/ORM) 
                      | 
  Fourth Layer: Database Layer (SQL/ MongoDB)
```

Let understand this layers responsibilities with Real World Example Assume that you are building product like Zomato and the have to implement the backend architecture according to layered.  

### Presentation Layer 
Here, Presentation layer contains the **routes** and **controllers** of our online food order application as a responsibility. 

### Service Layer 
Service layer contains only pure **business logic** of our product, Here business logic means take a example of our product work-flow **`A user order any food-item from any restaurant through our product than rider assign to particular order by our-self`** so. this type of all business logic handle in this service layer as responsibility. 

### Repository Layer  
Now from above business logic example of our product operation we access the data for saving the order and assign the rider also saved in the database also, All the operation related to database access will handle as responsibility in this repository layer. 

### Database Layer 
All the Schemas, Model and Configuration and other Operation related to Database handle as responsibility in this database layer. 

## Comparing Normal Architecture and Layered Architecture 
Let's comparing why layered architecture is more superior on normal architecture  

### Normal Architecture "Mainly MVC Architecture" 
This Normal Architecture contains 3 layers which are **Router** -> **Controller** -> **Model** 
```
Data Flow of Normal Architecture: 
            Router (Handles routes)
                        | 
            Controller (Orchestrate request and response) 
                        | 
            Model (Contains business logic)  

In this architecture our app flow is: 
 - First we have server/app file where our server and database setup 
 - Second we have routes to navigate different routes of our application like api/v1/users, api/v1/auth etc. 
 - Third after routing application request and response cycle is handle by controllers which have business logic and data access in one only no separation  
 - Fourth we have database layer in which we create schema and model of our applications 
```

### Layered Architecture 
As we understand layered architecture is more better to organize and maintain our application. We can understand work flow of application easily when our software grows. 

```
Data Flow of Layered Architecture 
              Router (handles routes of application) 
                              | 
              Controller (Orchestrate request and response) 
                              | 
              Service (Contains the business logic) 
                              | 
              Repository (Handles operation related to DB Access) 
                              | 
              Database (Configure and store Data)
```



