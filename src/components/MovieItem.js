import ReactStars from "react-rating-stars-component";
import star from "react-rating-stars-component/dist/star";
import NavBar from "./NavBar";


const MovieItem = ({ movies, rating }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      {movies.map((movie) => {
        return (
          <div
            key={movie.id}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <img
              src={movie.img}
              alt={movie.title}
              height="300px"
              width="200px"
            />
            <h5 style={{ color: "white", marginTop: "15px" }}>{movie.Title}</h5>
            <ReactStars
              count={5}
              //onChange={setRating}
              size={24}
              isHalf={false}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
              value={movie.rating}
              edit={false}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MovieItem;
