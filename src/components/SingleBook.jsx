import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Component } from "react";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    const cardBorderStyle = this.state.selected ? "border-danger border-4" : "";
    return (
      <>
        <Card
          style={{ height: "42rem" }}
          className={`d-flex flex-column ${cardBorderStyle}`}
        >
          <Card.Img
            variant="top"
            style={{ height: "22rem" }}
            src={this.props.img}
            onClick={() => {
              this.setState((precedenteStato) => ({
                selected: !precedenteStato.selected,
              }));
              this.props.funzioneChangAsin(this.props.asin);
            }}
          />
          <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Title className="text-start">{this.props.title}</Card.Title>
            <div>
              <Card.Text className="fs-2 fw-semibold text-start text-warning">
                €{this.props.price}
              </Card.Text>
              <Card.Text className="font-monospace text-start">
                {this.props.asin}
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
  }
}
export default SingleBook;
