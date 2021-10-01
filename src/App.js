import { useState, useEffect } from "react";
import NavBar from "./components/NavBar.js";
import "./App.css";
import MovieItem from "./components/MovieItem.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

function App() {
  const [movies, setMovies] = useState([
    {
      id: "124461456",
      trailer: "https://www.youtube.com/embed/Qyonn5Vbg7s",
      img: "https://m.media-amazon.com/images/M/MV5BNDIwYjg5YzItZTJmMC00YjJhLWFiNjYtMDU5MmQxOTQxODM2XkEyXkFqcGdeQXVyMjc2Nzg5OTQ@._V1_UY1200_CR109,0,630,1200_AL_.jpg",
      description:
        "Boruto Uzumaki is the son of Naruto Uzumaki, the Seventh Hokage of the Hidden Leaf Village. Having heard stories of Naruto's deeds as a hero, Boruto wishes to surpass his father. Following Sarada Uchiha, Boruto meets his father's friend, Sasuke Uchiha, and requests to be trained by him.",
      Title: "Boruto: Naruto The Movie (2015)",
      rating: 4,
    },
    {
      id: "254643218",
      trailer: "https://www.youtube.com/embed/sxufB6DxXk0",
      img: "https://i.pinimg.com/originals/15/47/9c/15479c5e9d7e47c4a8075d7f88f5bb02.jpg",
      description:
        "The plot involves Beerus, the God of Destruction, learning of the defeat of the galactic overlord Frieza at the hands of Goku. Seeking an opponent worthy of his power, Beerus, along with his companion Whis, travels to the North Galaxy to challenge Goku to a battle.",
      Title: "Dragon Ball Z: Battle of Gods",
      rating: 5,
    },
    {
      id: "35489742318",
      trailer: "https://www.youtube.com/embed/tA3yE4_t6SY",
      img: "https://www.themoviedb.org/t/p/w500/bAQ8O5Uw6FedtlCbJTutenzPVKd.jpg",
      description:
        "Two years after the fourth great ninja war the moon begins to descend towards the earth threatening to destroy everything upon impact, During the commotion Hanabi Hyuga is kidnapped by the alien Toneri, Naruto Uzumaki, Hinata Hyuga, Sai, Sakura Harino and Shikamaru Nara must rescue her but due to the circumstances Hinata Hyuga leaves everyone else to go with Toneri to save Hanabi, Naruto finally realises that he loves her and will do everything to get her back. This film mainly focuses on Naruto and Hinata and the love story they have.",
      Title: "The Last: Naruto the Movie",
      rating: 3,
    },
    {
      id: "438794218",
      trailer: "https://www.youtube.com/embed/nmcPE8xv5Hs",
      img: "https://musicart.xboxlive.com/7/29151100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
      description:
        "The film starts with a recap of the anime episodes in which Soul Reaper Ichigo Kurosaki's battle against one of his nemesis, Ulquiorra, and transforms into an incredibly powerful and uncontrollable Hollow.",
      Title: "Bleach: Hell Verse",
      rating: 4,
    },
    {
      id: "5698787548",
      trailer: "https://www.youtube.com/embed/VQGCKyvzIM4",
      img: "https://img2.hulu.com/user/v3/artwork/2c3e4b00-30d9-434d-bccc-cf346e40e868?base_image_bucket_name=image_manager&base_image=77b62b91-e6d3-4d17-907a-5d5063e0a3dd&size=458x687&format=jpeg",
      description:
        "Demon Slayer: Kimetsu no Yaiba (鬼滅の刃, Kimetsu no Yaiba, lit. Blade of Demon Destruction) is a Japanese manga series written and illustrated by Koyoharu Gotouge. It follows teenage Tanjiro Kamado, who strives to become a demon slayer after his family is slaughtered and his younger sister Nezuko is turned into a demon.",
      Title: "Demon Slayer: Kimetsu no Yaiba",
      rating: 5,
    },
    {
      id: "68465187",
      trailer: "https://www.youtube.com/embed/r12w4iRBLp4",
      img: "https://m.media-amazon.com/images/M/MV5BM2U3NmI4YzItYmRiNi00M2UxLWExNTYtNDZkZmJlNzlmM2M3XkEyXkFqcGdeQXVyNDkzMjE0NDE@._V1_.jpg",
      description:
        "Set in an alternate timeline, the film follows the journey of Pokémon Trainer Ash Ketchum and his friends, Pikachu, Verity, and Sorrel, as they seek to meet the Legendary Pokémon Ho-Oh at the summit of Mount Tensei. I Choose You!",
      Title: "Pokémon the Movie: I Choose You!",
      rating: 2,
    },
    {
      id: "748656878",
      trailer: "https://www.youtube.com/embed/Fs5g-l0Bcss",
      img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/a5b33b85d31717008cd45eaf01cc6b7d75cb6b7125c83291e36dde5d15e14df4._RI_V_TTW_.jpg",
      description:
        "Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.      ",
      Title: "Resident Evil: Vendetta",
      rating: 1,
    },
  ]);
  
console.log(movies)

  const [filtredMovies, setFiltredMovies] = useState(movies);

  const [input, setInput] = useState("");

  const [rating, setRating] = useState(0);

  const [newMovie, setNewMovie] = useState({
    id: Math.round(Math.random()),
    img: "",
    trailer: "",
    description: "",
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
    <Router>
      <Switch>
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
          <Route path="/movie/:id">
            <MovieDetails movies={filtredMovies} />
          </Route>
          <Route exact path="/home">
            <MovieItem movies={filtredMovies} rating={rating} />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
