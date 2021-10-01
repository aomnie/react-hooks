import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const MovieItem = ({ movies, rating }) => {
  const da3de3i = (e) => {
    console.log(e.target.value);
  };

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
            <h5 style={{ color: "white", marginTop: "15px" }} onClick={da3de3i}>
              <Link to={`/movie/${movie.id}`} style={{ color: "white" }}>
                {" "}
                {movie.Title}{" "}
              </Link>
            </h5>
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
