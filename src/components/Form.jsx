import { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(1);

  return (
    <form>
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <label htmlFor="description">Description: </label>
      <textarea
        id="description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <label htmlFor="rating">Rating:</label>
      <input
        type="range"
        id="rating"
        min={1}
        max={5}
        value={rating}
        onChange={(e) => setRating(e.target.valueAsNumber)}
      />
      <button type="submit">💔🥘</button>
    </form>
  );
}

export default Form;
