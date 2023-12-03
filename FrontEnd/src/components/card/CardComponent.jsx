import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./CardComponent.css";
import { Link } from "react-router-dom";
function CardComponent(props) {
  return (
    <Card style={{ width: "40rem" }} className="container">
      <Card.Img variant="top" src={props.imagesrc} className="imageCard" />
      <Card.Body className="title">
        <Card.Title>{props.title}</Card.Title>
        <Link to="/grid" state={{ data: props, bookedSeats: ["D4"] }}>
          <Button variant="primary" className="btn">
            Book Now
          </Button>
        </Link>
      </Card.Body>
      <div className="details">
        <p>{props.date}</p>
        <p>{props.time}</p>
        <p>{props.location}</p>
      </div>
    </Card>
  );
}

export default CardComponent;
