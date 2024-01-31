import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SingleBook from "./SingleBook";

const BookList = function (props) {
  return (
    <Container className="pt-3">
      <Row className="justify-content-center mt-3 g-3">
        {props.books.map((book) => {
          return (
            <Col xs={12} md={6} lg={3} className="text-center" key={book.asin}>
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
};
export default BookList;
