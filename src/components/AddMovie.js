import { Button, Modal } from "react-bootstrap";
import { useState, useEffect, SetState } from "react";

const AddMovie = ({
  newMovie,
  setNewMovie,
  setMovies,
  movies,
  rating,
  input,
}) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };



  const handleAddmovie = () => {
    if (newMovie.rating >= 1 && newMovie.rating <= 5) {
      setMovies([...movies, newMovie]);
      handleToggle();
    } else {
      alert("Movie rating should be between 1 and 5.");
    }
  };

  return (
    <div>
      <Button variant="primary" onClick={handleToggle}>
        Add a new movie
      </Button>

      <Modal show={show} onHide={handleToggle}>
        <Modal.Header closeButton>
          <Modal.Title>New movie </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            onChange={handleChange}
            name="Title"
            placeholder="Enter the movie title"
            value={newMovie.Title}
          />
          <br />
          <br />
          <input
            type="text"
            onChange={handleChange}
            name="img"
            placeholder="Enter the movie cover"
            value={newMovie.img}
          />
          <br />
          <br />
          <input
            type="number"
            onChange={handleChange}
            name="rating"
            placeholder="Enter the movie rating"
            value={newMovie.rating}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleToggle}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddmovie}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
