import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SingleBook from "./SingleBook";
import Form from "react-bootstrap/Form";
import { Component } from "react";

class BookList extends Component {
  state = {
    search: "",
  };

  render() {
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
                  value={this.state.search}
                  onChange={(e) => {
                    this.setState({
                      search: e.target.value,
                    });
                  }}
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3 g-3">
          {this.props.books.map((book) => {
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
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}
export default BookList;
