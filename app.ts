import type { Movie, Logger, CastMember as Actor } from "./interfaces.js";
import { Performer, Video, Documentary } from "./classes.js";
import { Utility } from "./functions.js";

let allMovies: Movie[] = Utility.GetAllMovies();

// Log all movies
allMovies.forEach((movie) => Utility.PrintMovieInfo(movie));
