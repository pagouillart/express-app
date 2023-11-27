const express = require("express");

const app = express();

const port = 8000;

const movies = [
    {
        id: 1,
        title: "Citizen Kane",
        director: "Orson Wells",
        year: "1941",
        color: false,
        duration: 120,
    },
    {
        id: 2,
        title: "The Godfather",
        director: "Francis Ford Coppola",
        year: "1972",
        color: true,
        duration: 180,
    },
    {
        id: 3,
        title: "Pulp Fiction",
        director: "Quentin Tarantino",
        year: "1994",
        color: true,
        duration: 180,
    },
];

app.listen(port, (err) => {
    if (err) {
        console.error("Something bad happened");
    } else {
        console.log(`Server is listening on ${port}`);
    }
});


app.get("/", (req, res) => {
    res.send("Welcome to my favourite movie list");
});

const getMovies = (req, res) => {
    res.status(200).json(movies);
};

app.get("/api/movies", getMovies);

const getWantedMovie = (req, res) => {

    const found = movies.find((element) => element.id === parseInt(req.params.id));
        if (found){
            res.status(200).json(found);
        }
        else {
            res.status(404).send("Not Found");
        }
    }
app.get("/api/movies/:id", getWantedMovie);


