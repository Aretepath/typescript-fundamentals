import { Performer, Video, Documentary } from "./classes.js";
import { Utility } from "./functions.js";
let allMovies = Utility.GetAllMovies();
// Log all movies
allMovies.forEach((movie) => Utility.PrintMovieInfo(movie));
//# sourceMappingURL=app.js.map