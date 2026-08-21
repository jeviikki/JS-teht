function submitMovie(title, rating) {
    const movie = {
        title : title,
        rating : rating,
    }
    movies.push(movie);
    console.log(movie.title + " has been added to the array successfully!");
}

function sortMovies(array) {
    const sorted = array.toSorted((b, a) => (
        a.rating > b.rating ? 1 : b.rating > a.rating ? -1 : 0));
    return sorted
    
}

let movies = []

/* get data for movies */

const times = prompt("How many movies would you like to rate?");

for (n = 1; n<= times; n++) {
    const title = prompt("Enter title for movie number "+ n +":");
    const rating = prompt("How would you rate "+ title +" from 1 to 5?");
    submitMovie(title, rating)
}

/* sort movies */

const sortedMovies = sortMovies(movies);

/* display on HTML */

document.getElementById("favorite-movie-title").innerHTML = sortedMovies[0].title;
document.getElementById("favorite-movie-rating").innerHTML = sortedMovies[0].rating;

list = document.getElementById("movies-list");

for (let item of sortedMovies) {
    const li = document.createElement("li");
    li.innerHTML = "<b>" + item.title + "</b> " + item.rating + "</b> stars"
    list.appendChild(li);
}