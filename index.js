const express = require("express");

const app = express();

const port = 3000;
//parse JSON using express
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
let movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    genre: "Drama",
  },
  {
    id: 2,
    title: "The Godfather",
    year: 1972,
    genre: "Crime",
  },
];

app.get("/movie", (req, res) => {
  res.json(movies);
});
app.post("/movie", (req, res) => {
  const movie = req.body;
  console.log(movie);
  movies.push(movie);
  res.send("Movie is added to the List of Movie");
});

app.get("/movie/:id", (req, res) => {
  const id = req.params.id;
  for (let movie of movies) {
    if (movie.id == id) {
      res.json(movie);
      return;
    }
  }
  res.status(404).json({ message: "Movie not found" });
});
app.delete("/movie/:id", (req, res) => {
    const id = req.params.id;
    movies = movies.filter((movie) => {
      if (movie.id != id) {  // Use != for type coercion comparison
        return true;
      }
      return false;
    });
    res.send("Movie is deleted");
  });
  

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
