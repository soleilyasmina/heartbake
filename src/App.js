import { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Snack from "./components/Snack";
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
        <main>
          {snacks.map((snack) => (
            <Snack key={snack.id} snack={snack} setToggleFetch={setToggleFetch} />
          ))}
        </main>
      </Route>
      <Route path="/new">
        <Form setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/edit/:id">
        <Form snacks={snacks} setToggleFetch={setToggleFetch} />
      </Route>
    </div>
  );
}

export default App;
