"use strict";
//* Why Interface is Important
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ? implements keyword in Typescript
 *  - In typescript, the `implements` keyword is used to force a class to conform to the structure (or "contract") of an interface or another class.
 *
 * - when a class uses `implements`, the typescript compiler ensures that the class define all public properties and methods are declared in that interface. If any are missing or have mismatch types, Typescript throws a compile-time error.
 */
class Instagram {
    cameraMode;
    filter;
    burst;
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    storyCreated() {
    }
    uploadStory() {
    }
    deleteStory() {
    }
}
class Youtube {
    cameraMode;
    filter;
    burst;
    shorts;
    constructor(cameraMode, filter, burst, shorts) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.shorts = shorts;
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.shorts = shorts;
    }
    storyCreated() {
    }
    uploadStory() {
    }
    deleteStory() {
    }
}
// Here in this youtube class with add shorts property also it doesn't give error to our class so minimum all interface properties should have our class must. 
//# sourceMappingURL=program.js.map