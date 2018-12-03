var movies = [
    {
        title: "In Bruges",
        rating: 5,
        hasWatched: false
    },
    {
        title: "Frozen",
        rating: 4.5,
        hasWatched: true
    },
    {
        title: "Les Miserable",
        rating: 4.9,
        hasWatched: false
    }
];
movies.forEach((movie) => {
    var result = `You have ${(movie.hasWatched) ? "watched" : "not seen"} "${movie.title}" - ${movie.rating} starts`;
    console.log(result);
})

