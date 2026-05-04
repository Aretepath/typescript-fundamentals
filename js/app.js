// Named imports from classes module
import { Performer, Video, Documentary } from "./classes.js";
// Import utility object from functions
import { Utility } from "./functions.js";
// Variable with explicit type annotation
let allMovies = Utility.GetAllMovies();
// Array method with arrow function callback
allMovies.forEach((movie) => Utility.PrintMovieInfo(movie));
//# sourceMappingURL=app.js.map