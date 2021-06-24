import { Link } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";

function Snack(props) {
  const { name, description, rating } = props.snack.fields;

  const deleteSnack = async () => {
    // make our specific URL (???)
    const snackURL = `${baseURL}/${props.snack.id}`;
    // make a DELETE request to our specific URL
    await axios.delete(snackURL, config);
    // trigger the useEffect ;)
    props.setToggleFetch((curr) => !curr);
  };

  return (
    <article>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{rating}</p>
      <button onClick={deleteSnack}>Delete Snack!</button>
      <Link to={`/edit/${props.snack.id}`}>
        <button>Edit Snack!</button>
      </Link>
    </article>
  );
}

export default Snack;
