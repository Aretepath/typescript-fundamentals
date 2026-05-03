import type { Movie } from "./interfaces.js";
export declare function GetAllMovies(): Movie[];
export declare function GetReview(title: string): string | number;
export declare function PrintMovieInfo(movie: Movie): void;
export declare function GetBookTitles(author: string): string[];
export declare function GetBookTitles(available: boolean): string[];
export declare function GetMovieTitles(director: string): string[];
export declare function GetMovieTitles(director: string, streaming: boolean): string[];
export declare function ReleaseMessage(year: number): string;
export declare const squareit: (x: number) => number;
export declare const adder: (a: number, b: number) => number;
export declare const greeting: () => void;
export declare const LogMessage: (message: string) => void;
export declare const Utility: {
    GetAllMovies: typeof GetAllMovies;
    GetReview: typeof GetReview;
    PrintMovieInfo: typeof PrintMovieInfo;
    GetBookTitles: typeof GetBookTitles;
    GetMovieTitles: typeof GetMovieTitles;
    ReleaseMessage: typeof ReleaseMessage;
    squareit: (x: number) => number;
    adder: (a: number, b: number) => number;
    greeting: () => void;
    LogMessage: (message: string) => void;
};
//# sourceMappingURL=functions.d.ts.map