import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SingleBook from "./SingleBook";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const BookList = function (props) {
  const [search, setSearch] = useState("");

  return (
    <Container className="pt-3">
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="cerca">
              <Form.Label>Search</Form.Label>
              <Form.Control
                type="text"
                placeholder="Cerca un libro"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row className="justify-content-center mt-3 g-3">
        {props.books
          .filter((book) => book.title.includes(search))
          .map((book) => {
            return (
              <Col
                xs={12}
                md={6}
                lg={3}
                className="text-center"
                key={book.asin}
              >
                <SingleBook
                  title={book.title}
                  price={book.price}
                  asin={book.asin}
                  img={book.img}
                  funzioneChangAsin={props.funzioneChangAsin}
                  funzioneChangStartValue={props.funzioneChangStartValue}
                  startValue={props.startValue}
                />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};
export default BookList;
