import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import AddComment from "./AddComment ";

const CommentsArea = function (props) {
  const [comment, setComment] = useState([]);
  const [click, setClick] = useState(false);

  const fetchBook = () => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${props.asinBook}`,
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhM2IyNDE4N2U1YzAwMTgxNGM2MTAiLCJpYXQiOjE3MDY3OTczNzcsImV4cCI6MTcwODAwNjk3N30.iRsjpi4EqzSbkpsghfKY9rok4sAYMnFb2M2ENYgnFpU",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella ricezione dati dal server");
        }
      })
      .then((array) => {
        setComment(array);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchBook();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.asinBook]);

  return props.startValue === true ? (
    <>
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title className="fs-1">Sezione commenti</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Selezione un libro per leggere o lasciare un commento</p>
          </Modal.Body>
        </Modal.Dialog>
      </div>
    </>
  ) : comment.length > 0 ? (
    <>
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title className="fs-1">Sezione commenti</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ListGroup>
              {comment.map((commenti) => {
                return (
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start border border-warning "
                    key={commenti._id}
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold text-start fs-3">
                        Voto: {commenti.rate}/5
                      </div>
                      <div className="text-start fs-4">{commenti.comment}</div>
                    </div>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="warning" onClick={() => setClick(!click)}>
              Lascia un commento
            </Button>
            {click === true && <AddComment asin={props.asinBook} />}
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </>
  ) : (
    <>
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title className="fs-1">Sezione commenti</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Nessun commento inserito! Commenta per primo</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="warning" onClick={() => setClick(!click)}>
              Lascia un commento
            </Button>
            {click === true && <AddComment asin={props.asinBook} />}
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </>
  );
};
export default CommentsArea;
