function submitMovie(title, rating) {
    let movie = {
        title : title,
        rating : rating,
    }
    movies.push(movie);
    console.log(movie.title + " has been added to the array successfully!");
}

function sortMovies(array) {
    let sorted = array.toSorted((b, a) => (
        a.rating > b.rating ? 1 : b.rating > a.rating ? -1 : 0));
    return sorted
    
}

let movies = []
let favStars

/* get data for movies */

const times = prompt("How many movies would you like to rate?");

for (n = 1; n<= times; n++) {
    let title = prompt("Enter title for movie number "+ n +":");
    let rating = prompt("How would you rate "+ title +" from 1 to 5?");
    submitMovie(title, rating)
}

/* sort movies */

let sortedMovies = sortMovies(movies);

/* display on HTML */

document.getElementById("favorite-movie-title").innerHTML = sortedMovies[0].title;
document.getElementById("favorite-movie-rating").innerHTML = sortedMovies[0].rating;

list = document.getElementById("movies-list");

for (n = 0; n<= sortedMovies.length-1; n++) {
    let li = document.createElement("li");
    li.innerHTML = "<b>" + sortedMovies[n].title + "</b> " + sortedMovies[n].rating + "</b> stars"
    list.appendChild(li);
}