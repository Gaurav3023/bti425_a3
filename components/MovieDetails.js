import { Container, Row, Col } from "react-bootstrap";

function MovieDetails({ movie }) {
  
  return (
    <Container>
      <Row>
        {movie.poster && (
          <Col md>
            <img src={movie.poster} alt="poster" className="w-100" />
            <br />
            <br />
          </Col>
        )}
        <Col md>
          <strong>Directed By:</strong> {movie.directors ? movie.directors.join(", ") : ""}
          <br />
          <br />
          <p>{movie.fullplot}</p>
          <strong>Cast:</strong> {movie.cast && movie.cast.length > 0 ? movie.cast.join(", ") : ""}
          <br />
          <br />
          <strong>Awards:</strong> {movie.awards?.text || ""}
          <br />
          <strong>IMDB Rating:</strong> {movie.rating} ({movie.votes} votes)
        </Col>
      </Row>
    </Container>
  );
}

export default MovieDetails;
