function Snack(props) {
  const { name, description, rating } = props.snack.fields;

  return (
    <article>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{rating}</p>
    </article>
  )
}

export default Snack;