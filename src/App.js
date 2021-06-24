import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <h2>It's homie time!</h2>
      </Route>
      <Route path="/new">
        <h2>Bake my heart :o(</h2>
      </Route>
      <Route path="/edit/:id">
        <h2>Please edit me!!</h2>
      </Route>
    </div>
  );
}

export default App;
