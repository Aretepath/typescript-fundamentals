import type { CastMember } from "./interfaces.js";

// Class implementing an interface - must provide all interface properties and methods
export class Performer implements CastMember {
  name: string = "";
  email: string = "";
  role: string = "";

  rehearse: (sceneNumber: number) => void = (sceneNumber: number) => {
    console.log(`${this.name} is rehearsing scene ${sceneNumber}.`);
  };
}

// Abstract class - cannot be instantiated directly, serves as base for other classes
export abstract class Video {
  title: string;
  year: number;

  private _producer: string = "";
  static medium: string = "DVD"; // Static property - shared across all instances

  // Getter - computed property with encapsulation
  get producer(): string {
    return this._producer.toUpperCase();
  }

  // Setter - controls how property is set
  set producer(newProducer: string) {
    this._producer = newProducer;
  }

  constructor(title: string, year: number) {
    this.title = title;
    this.year = year;
    console.log("Video created...");
  }

  printItem(): void {
    console.log(`Title: ${this.title}, was realesed in ${this.year}`);
    console.log(`Medium: ${Video.medium}`);
  }

  // Abstract method - must be implemented by subclasses
  abstract printCredits(): void;
}

// Class inheritance - extends abstract class and implements abstract methods
export class Documentary extends Video {
  subject: string;

  constructor(newTitle: string, newYear: number, subject: string) {
    super(newTitle, newYear); // Call parent constructor
    this.subject = subject;
  }

  // Override parent method
  printItem(): void {
    super.printItem(); // Call parent method
    console.log(`Subject: ${this.subject}`);
  }

  // Implement abstract method
  printCredits(): void {
    console.log(`Credits: Directed by ${this.producer}`);
  }
}
