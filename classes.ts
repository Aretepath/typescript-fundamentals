import type { CastMember } from "./interfaces.js";

export class Performer implements CastMember {
  name: string = "";
  email: string = "";
  role: string = "";

  rehearse: (sceneNumber: number) => void = (sceneNumber: number) => {
    console.log(`${this.name} is rehearsing scene ${sceneNumber}.`);
  };
}

export abstract class Video {
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

export class Documentary extends Video {
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
