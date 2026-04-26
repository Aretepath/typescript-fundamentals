"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function GetReview(title) {
    if (title == "A New Hope") {
        return "An instant classic!";
    }
    else {
        return Math.floor(Math.random() * 10);
    }
}
const movieTitle = "Empire Strikes back";
let movieReview = GetReview(movieTitle);
console.log(`Movie title: ${movieTitle}`);
if (typeof movieReview == "string") {
    console.log(`Review: ${movieReview}`);
}
else {
    console.log(`Rating: ${movieReview}/10`);
}
//# sourceMappingURL=app.js.map