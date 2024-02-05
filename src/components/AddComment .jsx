import { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class AddComment extends Component {
  state = {
    comment: "",
    rate: "",
    elementId: this.props.asin,
  };

  submit = (e) => {
    e.preventDefault();
    console.log("stato corrente", this.state);
    fetch(`https://striveschool-api.herokuapp.com/api/comments`, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhM2IyNDE4N2U1YzAwMTgxNGM2MTAiLCJpYXQiOjE3MDY3OTczNzcsImV4cCI6MTcwODAwNjk3N30.iRsjpi4EqzSbkpsghfKY9rok4sAYMnFb2M2ENYgnFpU",
      },
    })
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
      <Form className="container-fluid text-start" onSubmit={this.submit}>
        <Form.Group className="mb-3" controlId="comment">
          <Form.Label>Commento</Form.Label>
          <Form.Control
            type="textarea"
            placeholder="Lascia un commento"
            value={this.state.comment}
            onChange={(e) => {
              this.setState({
                ...this.state,
                comment: e.target.value,
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
                rate: e.target.value,
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
        <Button variant="warning" type="submit">
          Invia
        </Button>
      </Form>
    );
  }
}
export default AddComment;
