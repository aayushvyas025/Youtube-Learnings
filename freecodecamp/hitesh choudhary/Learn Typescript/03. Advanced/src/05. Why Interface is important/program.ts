//* Why Interface is Important

/**
 * Understand importance of interface with example
 */

interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
} 

interface Story {
    storyCreated(): void; 
    uploadStory(): void; 
    deleteStory(): void
}

/**
 * ? implements keyword in Typescript
 *  - In typescript, the `implements` keyword is used to force a class to conform to the structure (or "contract") of an interface or another class.
 *
 * - when a class uses `implements`, the typescript compiler ensures that the class define all public properties and methods are declared in that interface. If any are missing or have mismatch types, Typescript throws a compile-time error.
 */

class Instagram implements TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
  ) {
    this.cameraMode = cameraMode;
    this.filter = filter;
    this.burst = burst;
  }

  storyCreated(): void {
      
  }

  uploadStory(): void {
      
  }

  deleteStory(): void {
      
  }
}

class Youtube implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public shorts: string,
  ) {
    this.cameraMode = cameraMode;
    this.filter = filter;
    this.burst = burst; 
    this.shorts = shorts 
  }

   storyCreated(): void {
      
  }

  uploadStory(): void {
      
  }

  deleteStory(): void {
      
  }
} 

// Here in this youtube class with add shorts property also it doesn't give error to our class so minimum all interface properties should have our class must. 


