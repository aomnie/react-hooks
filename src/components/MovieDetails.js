import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = ({ movies }) => {
  let { id } = useParams();
  const [test, setTest] = useState(movies);

  useEffect(() => {
    let x = movies.filter((movie) => movie.id == id);
    setTest(x);
  }, [movies]);


  return (
    <div>
      <iframe
        width="900"
        height="506"
        src={test[0].trailer}
        title={test[0].Title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h3 style={{ color: "white" , marginTop:"25px"}}>{test[0].description}</h3>
    </div>
  );
};

export default MovieDetails;
