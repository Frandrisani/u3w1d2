import { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class AddComment extends Component {
  state = {
    comment: "",
    rate: "",
    elementId: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("stato corrente", this.state);
    fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`,
      {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhM2IyNDE4N2U1YzAwMTgxNGM2MTAiLCJpYXQiOjE3MDY3OTczNzcsImV4cCI6MTcwODAwNjk3N30.iRsjpi4EqzSbkpsghfKY9rok4sAYMnFb2M2ENYgnFpU",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          alert("Commento salvato");
          this.setState({
            comment: "",
            rate: 1,
          });
        } else {
          throw new Error("Errore nel salvataggio del commento");
        }
      })
      .catch((e) => {
        alert(e);
      });
  };

  render() {
    return (
      <Form className="text-center" onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="comment">
          <Form.Label>Commento</Form.Label>
          <Form.Control
            type="text-area"
            placeholder="Lascia un commento"
            value={this.state.comment}
            onChange={(e) => {
              this.setState({
                ...this.state,
                comment: e.target.comment,
              });
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="rate">
          <Form.Select
            aria-label="Voto"
            required
            value={this.state.rate}
            onChange={(e) => {
              this.setState({
                ...this.state,
                rate: e.target.rate,
              });
            }}
          >
            <option>Lascia un voto</option>
            <option value="1">Pessimo</option>
            <option value="2">Decente</option>
            <option value="3">Buono</option>
            <option value="3">Ottimo</option>
            <option value="3">Super!</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="Check">
          <Form.Check
            type="checkbox"
            label="Accetto i termini privacy"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Invia
        </Button>
      </Form>
    );
  }
}
export default AddComment;
