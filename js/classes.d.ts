import type { CastMember } from "./interfaces.js";
export declare class Performer implements CastMember {
    name: string;
    email: string;
    role: string;
    rehearse: (sceneNumber: number) => void;
}
export declare abstract class Video {
    title: string;
    year: number;
    private _producer;
    static medium: string;
    get producer(): string;
    set producer(newProducer: string);
    constructor(title: string, year: number);
    printItem(): void;
    abstract printCredits(): void;
}
export declare class Documentary extends Video {
    subject: string;
    constructor(newTitle: string, newYear: number, subject: string);
    printItem(): void;
    printCredits(): void;
}
//# sourceMappingURL=classes.d.ts.map