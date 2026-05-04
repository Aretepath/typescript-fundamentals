// Class implementing an interface - must provide all interface properties and methods
export class Performer {
    constructor() {
        this.name = "";
        this.email = "";
        this.role = "";
        this.rehearse = (sceneNumber) => {
            console.log(`${this.name} is rehearsing scene ${sceneNumber}.`);
        };
    }
}
// Abstract class - cannot be instantiated directly, serves as base for other classes
export class Video {
    // Getter - computed property with encapsulation
    get producer() {
        return this._producer.toUpperCase();
    }
    // Setter - controls how property is set
    set producer(newProducer) {
        this._producer = newProducer;
    }
    constructor(title, year) {
        this._producer = "";
        this.title = title;
        this.year = year;
        console.log("Video created...");
    }
    printItem() {
        console.log(`Title: ${this.title}, was realesed in ${this.year}`);
        console.log(`Medium: ${Video.medium}`);
    }
}
Video.medium = "DVD"; // Static property - shared across all instances
// Class inheritance - extends abstract class and implements abstract methods
export class Documentary extends Video {
    constructor(newTitle, newYear, subject) {
        super(newTitle, newYear); // Call parent constructor
        this.subject = subject;
    }
    // Override parent method
    printItem() {
        super.printItem(); // Call parent method
        console.log(`Subject: ${this.subject}`);
    }
    // Implement abstract method
    printCredits() {
        console.log(`Credits: Directed by ${this.producer}`);
    }
}
//# sourceMappingURL=classes.js.map