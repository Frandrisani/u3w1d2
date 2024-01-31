import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import BookList from "./components/BookList";
import Welcome from "./components/Welcome";
import horrorData from "./data/horror.json";

function App() {
  return (
    <div className="App">
      <header>
        <MyNav />
      </header>
      <main className="bg-dark">
        <Welcome />
        <BookList books={horrorData} />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
