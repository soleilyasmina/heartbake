import { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { baseURL, config } from "./services";
import "./App.css";

function App() {
  const [snacks, setSnacks] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);

  useEffect(() => {
    const fetchSnacks = async () => {
      // make our API call to the url with our config
      const resp = await axios.get(baseURL, config);
      // console log that data
      setSnacks(resp.data.records);
    }
    fetchSnacks();
  }, [toggleFetch]); // will only run on mount

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
