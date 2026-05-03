export class Performer {
    name = "";
    email = "";
    role = "";
    rehearse = (sceneNumber) => {
        console.log(`${this.name} is rehearsing scene ${sceneNumber}.`);
    };
}
export class Video {
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
export class Documentary extends Video {
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
//# sourceMappingURL=classes.js.map