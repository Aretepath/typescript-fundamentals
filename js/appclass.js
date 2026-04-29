"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Video {
    title;
    year;
    _producer = "";
    static medium = "DVD";
    get producer() {
        return this._producer.toUpperCase();
    }
    set producer(newProducer) {
        this._producer = newProducer;
    }
    constructor(title, year) {
        this.title = title;
        this.year = year;
        console.log("Video created...");
    }
    printItem() {
        console.log(`Title: ${this.title}, was realesed in ${this.year}`);
        console.log(`Medium: ${Video.medium}`);
    }
}
class Documentary extends Video {
    subject;
    constructor(newTitle, newYear, subject) {
        super(newTitle, newYear);
        this.subject = subject;
    }
    printItem() {
        super.printItem();
        console.log(`Subject: ${this.subject}`);
    }
    printCredits() {
        console.log(`Credits: Directed by ${this.producer}`);
    }
}
//abstract classes cannot be extantiated directly, but they can be used as types.
let vid = new Documentary("The Last Dance", 2020, "film history");
vid.producer = "Orion Pictures";
vid.printCredits();
//classes created so far have all been used as class statments, but they can also be used as types. This is a powerful feature of TypeScript that allows us to define the shape of an object without having to create a class for it.
let Musical = class extends Video {
    printCredits() {
        console.log(`Credits: Directed by ${this.producer}`);
    }
};
let myMusical = new Musical("The Sound of Music", 1965);
myMusical.producer = "20th Century Fox";
myMusical.printCredits();
//# sourceMappingURL=appclass.js.map