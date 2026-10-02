
# Overview of Layered Architecture in Software Development

## Introduction to Layered Architecture

- Layered Architecture is a software architectural pattern that organizes an application into distinct horizontal layers, each responsible for a specific concern.
- Every layer has a clearly defined responsibility, which helps us build modular, maintainable, testable, and extensible software.
- By separating different responsibilities, we can manage application complexity more effectively as our software grows.
- Layered Architecture provides a structural foundation for applying clean code principles and SOLID design principles.

> **Key Concept:** Each layer should focus on its own responsibility and communicate with other layers through clearly defined interfaces or contracts.

## Which SOLID Principles Can We Apply?

Layered Architecture works particularly well with the following SOLID principles:

### 1. Single Responsibility Principle (SRP)

Each class, module, or function should have only one reason to change.

In Layered Architecture, we apply SRP by separating responsibilities into dedicated layers, such as:

- **Presentation Layer:** Handles HTTP requests and responses.
- **Service Layer:** Implements business logic and application rules.
- **Repository Layer:** Handles database access and data persistence.
- **Database Layer:** Manages data storage and database-specific structures.

This separation makes individual components easier to understand, modify, and test.

### 2. Dependency Inversion Principle (DIP)

High-level modules should not depend directly on low-level modules. Both should depend on abstractions.

In Layered Architecture, we can apply DIP by making our business logic depend on interfaces or contracts rather than concrete database implementations.

For example, a service should depend on a repository abstraction instead of being tightly coupled to a specific MongoDB implementation.

This makes it easier to replace underlying implementations without rewriting the business logic.

> **Note:** Layered Architecture does not automatically enforce DIP. We must deliberately design our dependencies around abstractions to achieve loose coupling.

## Why Do We Use Layered Architecture?

The primary purpose of Layered Architecture is to organize application responsibilities in a way that improves maintainability, modularity, flexibility, and testability.

Let's understand its importance through a practical example.

Suppose we are building a backend application using Express.js, and we implement a user signup operation.

Initially, we might write the entire signup functionality inside a single controller, including:

- Extracting request parameters.
- Validating user input.
- Applying business rules.
- Interacting with the database.
- Handling errors.
- Sending HTTP responses.

Although this approach may work for a small application, it can introduce significant challenges as the software grows.

## Example: A Controller Handling Multiple Responsibilities

Consider the following Express.js controller:

```js
const signupUser = async (request, response) => {
  const { fullname, email, age } = request.body;

  // Input validation
  if (!fullname?.trim() || !email?.trim()) {
    return response.status(400).json({
      success: false,
      message: !fullname?.trim()
        ? "Fullname is required"
        : "Email is required",
    });
  }

  if (typeof age !== "number" || age < 0) {
    return response.status(400).json({
      success: false,
      message: "Age must be a valid non-negative number",
    });
  }

  try {
    // Direct database interaction
    const newUser = await User.create({
      fullname,
      email,
      age,
    });

    return response.status(201).json({
      success: true,
      message: "User created successfully",
      newUser,
    });
  } catch (error) {
    console.error(
      `Error while creating user: ${error.message}`
    );

    return response.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
```

### What Is the Problem With This Approach?

Looking at the controller, we can observe that it performs several responsibilities:

1. Extracting request data.
2. Validating user input.
3. Executing application operations.
4. Interacting directly with the database.
5. Handling errors.
6. Sending HTTP responses.

For a small application, this might seem convenient. However, when the application grows, placing all these responsibilities inside controllers can make the codebase difficult to maintain, test, and extend.

Let's understand the challenges through some practical scenarios.

## Challenges of a Monolithic Controller

### Case 1: Multiple Controllers and Code Duplication

Consider a production application with 50–100 controllers handling different operations, such as authentication, users, products, orders, and payments.

Many controllers may require similar functionality, including:

- Input validation.
- Email notifications.
- Cloudinary image uploads.
- Payment gateway integration.
- Redis operations.
- External API communication.
- Database transactions.

If we implement these operations independently in every controller, we introduce code duplication and make maintenance unnecessarily difficult.

**Solution:**

We should extract reusable functionality into dedicated modules and services.

For example:

- `EmailService` handles email communication.
- `CloudinaryService` handles image uploads.
- `PaymentService` manages payment operations.
- `UserService` handles user-related business logic.

This approach promotes reusability and ensures that changes to a shared operation can be managed in a centralized location.

> **Important:** Not every operation belongs in a business service. Cross-cutting concerns, such as request validation, authentication, and logging, may be better handled through middleware or dedicated infrastructure components.

### Case 2: Migrating to a Different Database

Suppose our application initially uses MongoDB, but we later decide to migrate to PostgreSQL because of changing data requirements.

If every controller directly interacts with MongoDB models, we may need to modify database-related code across numerous controllers.

This creates unnecessary coupling between business logic and the database implementation.

**Solution:**

We introduce a Repository Layer that encapsulates database operations.

The Service Layer communicates with repositories rather than directly accessing database models.

For example:

```text
             Service Layer
                   |
                   v
          Repository Interface
                   |
          ---------------------
          |                   |
     MongoDB Repo        PostgreSQL Repo
```

By depending on a common abstraction, we can introduce a different repository implementation without rewriting the business logic, provided the new implementation satisfies the same contract.

**Benefits:**

- Reduces coupling between business logic and database technology.
- Makes database implementations easier to replace.
- Improves testability by allowing mock repositories.
- Centralizes database-related changes.

> **Important:** Database migration is not automatically effortless. Differences in schemas, queries, transactions, and data types may still require changes to repository implementations and data migration procedures. The Repository Layer helps isolate these changes rather than eliminate them.

### Case 3: Separation of Concerns

In our original controller, we observed that request handling, validation, business logic, and database operations were all implemented together.

As a result, the controller becomes responsible for too many things, making it difficult to understand and maintain.

**Solution:**

We separate these responsibilities into dedicated layers.

| Layer | Responsibility |
|---|---|
| Routes | Defines API endpoints and maps requests to controllers. |
| Controllers | Handles HTTP requests, invokes services, and sends responses. |
| Services | Contains business logic and coordinates application operations. |
| Repositories | Encapsulates database access and persistence operations. |
| Database | Stores and manages application data. |

This separation allows us to modify business rules without unnecessarily changing HTTP handling or database implementation details.

It also makes individual components easier to test and reuse.

## Final Takeaway

Layered Architecture helps us organize application responsibilities into clearly defined boundaries.

Instead of placing all functionality inside controllers, we distribute responsibilities across dedicated layers, making our software more modular, maintainable, testable, and extensible.

**Layered Architecture is not primarily about folders. It is about responsibilities and dependency direction.**
