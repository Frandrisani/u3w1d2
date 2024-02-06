import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import BookList from "./components/BookList";
import Welcome from "./components/Welcome";
import horrorData from "./data/horror.json";
import { useState } from "react";
import CommentsArea from "./components/CommentsArea";
import { Col, Container, Row } from "react-bootstrap";

const App = function () {
  const [asinBooks, setAsinBooks] = useState("");
  const [startValue, setStartValue] = useState(true);

  const changeAsin = (newAsin) => {
    setAsinBooks(newAsin);
  };

  const changeStartValue = (newStartValue) => {
    setStartValue(newStartValue);
  };

  return (
    <div className="App">
      <header>
        <MyNav />
      </header>
      <main className="bg-dark">
        <Welcome />
        <Container>
          <Row>
            <Col xs={8}>
              <BookList
                books={horrorData}
                funzioneChangAsin={changeAsin}
                funzioneChangStartValue={changeStartValue}
                startValue={startValue}
              />
            </Col>
            <Col xs={4}>
              <CommentsArea asinBook={asinBooks} startValue={startValue} />
            </Col>
          </Row>
        </Container>
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
};

export default App;
