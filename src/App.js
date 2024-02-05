import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import BookList from "./components/BookList";
import Welcome from "./components/Welcome";
import horrorData from "./data/horror.json";
import { Component } from "react";
import CommentsArea from "./components/CommentsArea";
import { Col, Container, Row } from "react-bootstrap";

class App extends Component {
  state = {
    asinBooks: "",
  };

  changeAsin = (newAsin) => {
    this.setState({
      asinBooks: newAsin,
    });
  };

  render() {
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
                  funzioneChangAsin={this.changeAsin}
                />
              </Col>
              <Col xs={4}>
                <CommentsArea asinBook={this.state.asinBooks} />
              </Col>
            </Row>
          </Container>
        </main>
        <footer>
          <MyFooter />
        </footer>
      </div>
    );
  }
}

export default App;
