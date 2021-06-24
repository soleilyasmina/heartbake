import axios from "axios";
import { useState } from "react";
import { baseURL, config } from "../services";

function Form(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSnack = {
      name,
      description,
      rating,
    };
    // make an axios post request to the baseURL with the data (???) and our config
    await axios.post(baseURL, { fields: newSnack }, config);
    // trigger our useEffect (?)
    props.setToggleFetch((curr) => !curr);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        autoComplete="off"
        required
      />
      <label htmlFor="description">Description: </label>
      <textarea
        id="description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        required
      ></textarea>
      <label htmlFor="rating">Rating:</label>
      <input
        type="range"
        id="rating"
        min={1}
        max={5}
        value={rating}
        onChange={(e) => setRating(e.target.valueAsNumber)}
        required
      />
      <button type="submit">💔🥘</button>
    </form>
  );
}

export default Form;
