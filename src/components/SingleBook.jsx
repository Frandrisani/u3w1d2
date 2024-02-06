import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";

const SingleBook = function (props) {
  const [selected, setSelected] = useState(false);

  const cardBorderStyle = selected ? "border-danger border-4" : "";
  return (
    <>
      <Card
        style={{ height: "42rem" }}
        className={`d-flex flex-column ${cardBorderStyle}`}
      >
        <Card.Img
          variant="top"
          style={{ height: "22rem" }}
          src={props.img}
          onClick={() => {
            setSelected(!selected);
            props.funzioneChangAsin(props.asin);
            props.funzioneChangStartValue(!props.startValue);
          }}
        />
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title className="text-start">{props.title}</Card.Title>
          <div>
            <Card.Text className="fs-2 fw-semibold text-start text-warning">
              €{props.price}
            </Card.Text>
            <Card.Text className="font-monospace text-start">
              {props.asin}
            </Card.Text>
          </div>
          <div className="d-grid gap-2 ">
            <Button variant="warning" size="lg">
              Buy Now
            </Button>
            <Button variant="info" size="lg">
              Wish List
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
export default SingleBook;
