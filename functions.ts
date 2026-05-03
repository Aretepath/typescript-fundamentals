import type { Movie } from "./interfaces.js";

export function GetAllMovies(): Movie[] {
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

export function GetReview(title: string): string | number {
  if (title === "A New Hope") {
    return "An instant classic!";
  } else {
    return Math.floor(Math.random() * 10);
  }
}

export function PrintMovieInfo(movie: Movie) {
  console.log(`Title: ${movie.title}`);
  console.log(`Year Released: ${movie.yearReleased}`);
  console.log(`Director: ${movie.director}`);
}

export function GetBookTitles(author: string): string[];
export function GetBookTitles(available: boolean): string[];
export function GetBookTitles(bookProperty: any): string[] {
  if (typeof bookProperty === "string") {
    return ["Book 1", "Book 2", "Book 3"];
  } else if (typeof bookProperty === "boolean") {
    return ["Book A", "Book B", "Book C"];
  } else {
    return [];
  }
}

export function GetMovieTitles(director: string): string[];
export function GetMovieTitles(director: string, streaming: boolean): string[];
export function GetMovieTitles(
  director: string,
  streaming?: boolean,
): string[] {
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

export function ReleaseMessage(year: number): string {
  return `Year Released: ` + year;
}

export const squareit = (x: number) => x * x;
export const adder = (a: number, b: number) => a + b;
export const greeting = () => console.log("Hello, world!");
export const LogMessage = (message: string) => console.log(message);

export const Utility = {
  GetAllMovies,
  GetReview,
  PrintMovieInfo,
  GetBookTitles,
  GetMovieTitles,
  ReleaseMessage,
  squareit,
  adder,
  greeting,
  LogMessage,
};
