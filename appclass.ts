abstract class Video {
  title: string;
  year: number;

  private _producer: string = "";
  static medium: string = "DVD";

  get producer(): string {
    return this._producer.toUpperCase();
  }

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

  abstract printCredits(): void;
}

class Documentary extends Video {
  subject: string;

  constructor(newTitle: string, newYear: number, subject: string) {
    super(newTitle, newYear);
    this.subject = subject;
  }

  printItem(): void {
    super.printItem();
    console.log(`Subject: ${this.subject}`);
  }

  printCredits(): void {
    console.log(`Credits: Directed by ${this.producer}`);
  }
}

//abstract classes cannot be extantiated directly, but they can be used as types.

let vid: Video = new Documentary("The Last Dance", 2020, "film history");
vid.producer = "Orion Pictures";
vid.printCredits();

//classes created so far have all been used as class statments, but they can also be used as types. This is a powerful feature of TypeScript that allows us to define the shape of an object without having to create a class for it.


//Example of using a class as a type without creating an instance of it. This is useful when we want to define the shape of an object that we will create later, or when we want to define the shape of an object that we will receive from an external source, such as an API response.
let Musical = class extends Video {
  printCredits(): void {
    console.log(`Credits: Directed by ${this.producer}`);
  }
};

let myMusical: Video = new Musical("The Sound of Music", 1965);
myMusical.producer = "20th Century Fox";
myMusical.printCredits();

class Course extends class { title: string = ''; } {
    subject: string = "";
}

//classes are a very important part of TypeScript, and they can be used in a variety of ways to create complex and powerful applications. They can be used as blueprints for creating objects, as types for defining the shape of an object, and as a way to organize code and create reusable components.