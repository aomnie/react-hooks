import { useState, useEffect } from "react";
import NavBar from "./components/NavBar.js";
import "./App.css";
import MovieItem from "./components/MovieItem.js";

function App() {
  const [movies, setMovies] = useState([
    {
      id: "124461456",
      img: "https://m.media-amazon.com/images/M/MV5BNDIwYjg5YzItZTJmMC00YjJhLWFiNjYtMDU5MmQxOTQxODM2XkEyXkFqcGdeQXVyMjc2Nzg5OTQ@._V1_UY1200_CR109,0,630,1200_AL_.jpg",
      Title: "Boruto: Naruto The Movie (2015)",
      rating: 4,
    },
    {
      id: "254643218",
      img: "https://i.pinimg.com/originals/15/47/9c/15479c5e9d7e47c4a8075d7f88f5bb02.jpg",
      Title: "Dragon Ball Z: Battle of Gods",
      rating: 5,
    },
    {
      id: "35489742318",
      img: "https://www.themoviedb.org/t/p/w500/bAQ8O5Uw6FedtlCbJTutenzPVKd.jpg",
      Title: "The Last: Naruto the Movie",
      rating: 3,
    },
    {
      id: "438794218",
      img: "https://musicart.xboxlive.com/7/29151100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
      Title: "Bleach: Hell Verse",
      rating: 4,
    },
    {
      id: "5698787548",
      img: "https://img2.hulu.com/user/v3/artwork/2c3e4b00-30d9-434d-bccc-cf346e40e868?base_image_bucket_name=image_manager&base_image=77b62b91-e6d3-4d17-907a-5d5063e0a3dd&size=458x687&format=jpeg",
      Title: "Demon Slayer: Kimetsu no Yaiba",
      rating: 5,
    },
    {
      id: "68465187",
      img: "https://m.media-amazon.com/images/M/MV5BM2U3NmI4YzItYmRiNi00M2UxLWExNTYtNDZkZmJlNzlmM2M3XkEyXkFqcGdeQXVyNDkzMjE0NDE@._V1_.jpg",
      Title: "Pokémon the Movie: I Choose You!",
      rating: 2,
    },
    {
      id: "748656878",
      img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/a5b33b85d31717008cd45eaf01cc6b7d75cb6b7125c83291e36dde5d15e14df4._RI_V_TTW_.jpg",
      Title: "Resident Evil: Vendetta",
      rating: 1,
    },
  ]);

  const [filtredMovies, setFiltredMovies] = useState(movies);

  const [input, setInput] = useState("");

  const [rating, setRating] = useState(0);

  const [newMovie, setNewMovie] = useState({
    id: Math.random(),
    img: "",
    Title: "",
    rating: 1,
  });

  useEffect(() => {
    setFiltredMovies(
      movies.filter((movie) => {
        return (
          movie.Title.trim().toLowerCase().includes(input) &&
          movie.rating >= rating
        );
      })
    );
  }, [rating, input, movies]);

  return (
    <div className="App">
      <NavBar
        newMovie={newMovie}
        setNewMovie={setNewMovie}
        setMovies={setMovies}
        movies={filtredMovies}
        setRating={setRating}
        rating={rating}
        input={input}
        setInput={setInput}
        filtredMovies={filtredMovies}
      />
      <br />
      <MovieItem movies={filtredMovies} rating={rating}  />
    </div>
  );
}

export default App;
