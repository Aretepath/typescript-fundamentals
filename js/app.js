"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function GetAllMovies() {
    return [
        {
            title: "A New Hope",
            director: "George Lucas",
            yearReleased: 1977,
            streaming: true,
        },
        {
            title: "The Empire Strikes Back",
            director: "Irvin Kershner",
            yearReleased: 1980,
            streaming: true,
        },
        {
            title: "Return of the Jedi",
            director: "Richard Marquand",
            yearReleased: 1983,
            streaming: false,
        },
        {
            title: "The Phantom Menace",
            director: "George Lucas",
            yearReleased: 1999,
            streaming: true,
        },
        {
            title: "Attack of the Clones",
            director: "George Lucas",
            yearReleased: 2002,
            streaming: false,
        },
        {
            title: "Revenge of the Sith",
            director: "George Lucas",
            yearReleased: 2005,
            streaming: true,
        },
    ];
}
// Review function
function GetReview(title) {
    if (title === "A New Hope") {
        return "An instant classic!";
    }
    else {
        return Math.floor(Math.random() * 10);
    }
}
// Print movie info
function PrintMovieInfo(title, yearReleased, ...cast) {
    console.log(`Title: ${title}`);
    console.log(`Year Released: ${yearReleased}`);
    console.log(`Cast:`);
    for (const name of cast) {
        console.log(`   ${name}`);
    }
}
PrintMovieInfo("A New Hope", 1977, "Carrie", "Mark", "Harrison");
// Arrow functions
let squareit = (x) => x * x;
console.log(squareit(5));
let adder = (a, b) => a + b;
console.log(adder(5, 10));
let sum = adder(2, 3);
console.log(sum);
let greeting = () => console.log("Hello, world!");
greeting();
// Filter scores
let scores = [85, 125, 78, 90, 88];
let highScore;
highScore = scores.filter((element) => element > 90);
console.log(highScore);
const LogMessage = (message) => console.log(message);
LogMessage("Enjoy the movie!");
function GetBookTitles(bookProperty) {
    if (typeof bookProperty === "string") {
        return ["Book 1", "Book 2", "Book 3"];
    }
    else if (typeof bookProperty === "boolean") {
        return ["Book A", "Book B", "Book C"];
    }
    else {
        return [];
    }
}
let titlesByAuthor = GetBookTitles("J.K. Rowling");
console.log(titlesByAuthor);
let titlesAvailable = GetBookTitles(true);
console.log(titlesAvailable);
function GetMovieTitles(director, streaming) {
    const allMovies = GetAllMovies();
    const searchResults = [];
    for (const movie of allMovies) {
        if (movie.director === director &&
            (streaming === undefined || movie.streaming === streaming)) {
            searchResults.push(movie.title);
        }
    }
    return searchResults;
}
let moviesByDirector = GetMovieTitles("George Lucas");
console.log(moviesByDirector);
moviesByDirector.forEach((title) => console.log(title));
function ReleaseMessage(year) {
    return `Year Released: ` + year;
}
let releaseFunc;
releaseFunc = ReleaseMessage;
let message = releaseFunc(2024);
//# sourceMappingURL=app.js.map