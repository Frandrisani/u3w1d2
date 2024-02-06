import { Component, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddComment = function (props) {
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState("");
  const [elementId, setElementId] = useState(props.asin);

  const submit = (e) => {
    e.preventDefault();
    fetch(`https://striveschool-api.herokuapp.com/api/comments`, {
      method: "POST",
      body: JSON.stringify({
        comment: comment,
        rate: rate,
        elementId: elementId,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhM2IyNDE4N2U1YzAwMTgxNGM2MTAiLCJpYXQiOjE3MDY3OTczNzcsImV4cCI6MTcwODAwNjk3N30.iRsjpi4EqzSbkpsghfKY9rok4sAYMnFb2M2ENYgnFpU",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Commento salvato");
          setComment("");
          setRate(1);
        } else {
          throw new Error("Errore nel salvataggio del commento");
        }
      })
      .catch((e) => {
        alert(e);
      });
  };

  return (
    <Form className="container-fluid text-start" onSubmit={submit}>
      <Form.Group className="mb-3" controlId="comment">
        <Form.Label>Commento</Form.Label>
        <Form.Control
          type="textarea"
          placeholder="Lascia un commento"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rate">
        <Form.Select
          aria-label="Voto"
          required
          value={rate}
          onChange={(e) => {
            setRate(e.target.value);
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
};
export default AddComment;
