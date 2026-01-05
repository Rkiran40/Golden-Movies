const movie = JSON.parse(localStorage.getItem("selectedMovie"));

document.getElementById("movieImg").src = movie.image;
document.getElementById("movieTitle").innerText = movie.title;
document.getElementById("movieDirector").innerText = "Director: " + movie.director;
document.getElementById("movieYear").innerText = "Released: " + movie.year;
document.getElementById("movieDescription").innerText = movie.description;
document.getElementById("movieTrailer").href = movie.trailer;