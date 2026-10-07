"use strict";
//* Abstract Classes
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ? Abstract Classes in Typescript
 *  In Typescript, abstract classes are base classes from which other classes can be derived. They serve as blueprints for related classes and cannot be instantiated  directly using new keyword
 *
 * Unlike interfaces, abstract classes are unique because they can contain a mix of both abstract members and concrete member
 *   - abstract member (Which have no implementation and must be filled in by sub-classes)
 *   - concrete member (Which include actual implementation details and logic)
 */
//* Example of abstract class
// define the abstract base class
class Vehicle {
    brand;
    // constructor and concrete property
    constructor(brand) {
        this.brand = brand;
    }
    // Concrete method: Has an implementation. Subclass inherit this automatically
    displayBrand() {
        console.log(`This vehicle is a ${this.brand}.`);
    }
}
// Extend the abstract class
class Car extends Vehicle {
    model;
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }
    startEngine() {
        console.log(`${this.brand} ${this.model} engine goes vroom!`);
    }
}
// const myVehicle = new Vehicle("maruti")  Cannot create an instance of an abstract class.
const myCar = new Car("maruti-suzuki", "swift-dezire");
myCar.startEngine();
myCar.displayBrand();
//# sourceMappingURL=program.js.map