import { Container, Navbar } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import AddMovie from "./AddMovie";

const NavBar = ({
  newMovie,
  setNewMovie,
  setMovies,
  movies,
  setRating,
  rating,
  input,
  setInput,
}) => {
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/4221/4221419.png"
              height="40px"
              alt="logo"
            />
            <h3 style={{ color: "white", marginTop:"5px" }}>Movie Night</h3>
          </div>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              marginLeft: "50px",
              width: "100%",
            }}
          >
            <input
              placeholder="Search your movie"
              type="text"
              value={input}
              onChange={handleInput}
            />
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              isHalf={false}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
            <AddMovie
              newMovie={newMovie}
              setNewMovie={setNewMovie}
              setMovies={setMovies}
              movies={movies}
              input={input}
              rating={rating}
            />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
