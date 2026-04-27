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
function GetReview(title: string): string | number {
  if (title === "A New Hope") {
    return "An instant classic!";
  } else {
    return Math.floor(Math.random() * 10);
  }
}

// Print movie info
function PrintMovieInfo(
  title: string,
  yearReleased: number,
  ...cast: string[]
) {
  console.log(`Title: ${title}`);
  console.log(`Year Released: ${yearReleased}`);
  console.log(`Cast:`);

  for (const name of cast) {
    console.log(`   ${name}`);
  }
}

PrintMovieInfo("A New Hope", 1977, "Carrie", "Mark", "Harrison");

// Arrow functions
let squareit = (x: number) => x * x;
console.log(squareit(5));

let adder = (a: number, b: number) => a + b;
console.log(adder(5, 10));

let sum = adder(2, 3);
console.log(sum);

let greeting = () => console.log("Hello, world!");
greeting();

// Filter scores
let scores: number[] = [85, 125, 78, 90, 88];
let highScore: number[];

highScore = scores.filter((element: number) => element > 90);

console.log(highScore);

const LogMessage = (message: string) => console.log(message);
LogMessage("Enjoy the movie!");

// BOOK overload example
function GetBookTitles(author: string): string[];
function GetBookTitles(available: boolean): string[];
function GetBookTitles(bookProperty: any): string[] {
  if (typeof bookProperty === "string") {
    return ["Book 1", "Book 2", "Book 3"];
  } else if (typeof bookProperty === "boolean") {
    return ["Book A", "Book B", "Book C"];
  } else {
    return [];
  }
}

let titlesByAuthor = GetBookTitles("J.K. Rowling");
console.log(titlesByAuthor);

let titlesAvailable = GetBookTitles(true);
console.log(titlesAvailable);

// MOVIE overload example
function GetMovieTitles(director: string): string[];
function GetMovieTitles(director: string, streaming: boolean): string[];
function GetMovieTitles(director: string, streaming?: boolean): string[] {
  const allMovies = GetAllMovies();
  const searchResults: string[] = [];

  for (const movie of allMovies) {
    if (
      movie.director === director &&
      (streaming === undefined || movie.streaming === streaming)
    ) {
      searchResults.push(movie.title);
    }
  }

  return searchResults;
}

let moviesByDirector = GetMovieTitles("George Lucas");
console.log(moviesByDirector);

moviesByDirector.forEach((title) => console.log(title));

function ReleaseMessage(year: number): string {
  return `Year Released: ` + year;
}

let releaseFunc: (someYear: number) => string;
releaseFunc = ReleaseMessage;
let message: string = releaseFunc(2024);
console.log(message);
