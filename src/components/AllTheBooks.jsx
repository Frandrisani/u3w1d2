import horrorBook from "../data/horror.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const AllTheBooks = function () {
  return (
    <Container className="pt-3">
      <Row className="justify-content-center mt-3 g-3">
        {horrorBook.map((book) => {
          return (
            <Col xs={12} md={6} lg={3} className="text-center" key={book.asin}>
              <Card>
                <Card.Img
                  variant="top"
                  style={{ height: "25rem" }}
                  src={book.img}
                />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>€{book.price}</Card.Text>
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
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default AllTheBooks;
