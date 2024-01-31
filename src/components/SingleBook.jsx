import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Component } from "react";

class SingleBook extends Component {
  if() {}

  state = {
    selected: false,
  };

  render() {
    const cardBorderStyle = this.state.selected ? "border-danger border-4" : "";
    return (
      <Card style={{ width: "18rem" }} className={cardBorderStyle}>
        <Card.Img
          variant="top"
          style={{ height: "22rem" }}
          src={this.props.img}
          onClick={() => {
            this.setState((precedenteStato) => ({
              selected: !precedenteStato.selected,
            }));
          }}
        />
        <Card.Body>
          <Card.Title className="text-start">{this.props.title}</Card.Title>
          <div className="d-flex justify-content-between align-items-center">
            <Card.Text className="fs-2 fw-semibold">
              €{this.props.price}
            </Card.Text>
            <Card.Text className="font-monospace">{this.props.asin}</Card.Text>
          </div>
          <div className="d-grid gap-2 ">
            <Button variant="success" size="lg">
              Buy Now
            </Button>
            <Button variant="info" size="lg">
              Wish List
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
}
export default SingleBook;
