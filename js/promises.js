const movieCatalog = [
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
];
function delay(value, ms) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(value), ms);
    });
}
export async function fetchMovie(title) {
    const movie = movieCatalog.find((item) => item.title === title);
    const result = await delay(movie, 500);
    if (result) {
        return result;
    }
    throw new Error(`Movie not found: ${title}`);
}
export function fetchTitlesByDirector(director) {
    return delay(movieCatalog
        .filter((movie) => movie.director === director)
        .map((movie) => movie.title), 300);
}
export async function demoPromises() {
    console.log("-- Promise demo starting --");
    fetchMovie("A New Hope")
        .then((movie) => {
        console.log("Found movie with then():", movie.title);
    })
        .catch((error) => {
        console.error("Then/catch error:", error.message);
    });
    try {
        const movie = await fetchMovie("The Empire Strikes Back");
        console.log("Found movie with async/await:", movie.title);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Async/await error:", error.message);
        }
    }
    try {
        const [firstMovie, secondMovie] = await Promise.all([
            fetchMovie("A New Hope"),
            fetchMovie("Return of the Jedi"),
        ]);
        console.log("Promise.all results:", firstMovie.title, ",", secondMovie.title);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Promise.all error:", error.message);
        }
    }
    const titles = await fetchTitlesByDirector("George Lucas");
    console.log("Titles by George Lucas:", titles.join(", "));
    console.log("-- Promise demo complete --");
}
void demoPromises();
//# sourceMappingURL=promises.js.map