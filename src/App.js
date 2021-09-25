import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Book from "./pages/Book";
import Error from "./pages/Error";

//components

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/book/:bookName">
            <Book />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
