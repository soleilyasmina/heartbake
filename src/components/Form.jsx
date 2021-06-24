import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseURL, config } from "../services";

function Form(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(1);
  const params = useParams();

  useEffect(() => {
    // if there's an id in the url AND snacks is longer than 0
    if (params.id && props.snacks.length > 0) {
      // find the snack where its id matches the id from params and save it in a variable called snackToEdit
      const snackToEdit = props.snacks.find((snack) => snack.id === params.id);
      // if the snack we were looking for exists
      if (snackToEdit) {
        // populate the states (???)
        setName(snackToEdit.fields.name);
        setDescription(snackToEdit.fields.description);
        setRating(snackToEdit.fields.rating);
      }
    }
  }, [params.id, props.snacks])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSnack = {
      name,
      description,
      rating,
    };
    if (params.id) {
      const snackURL = `${baseURL}/${params.id}`;
      await axios.put(snackURL, { fields: newSnack }, config);
    } else {
      // make an axios post request to the baseURL with the data (???) and our config
      await axios.post(baseURL, { fields: newSnack }, config);
    }
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
