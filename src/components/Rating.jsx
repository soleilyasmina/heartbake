function Rating(props) {
  // declare a string "brokenHearts" that is an empty string
  let brokenHearts = "";
  // use a for loop to iterate from 0 to the rating from props and add a broken heart emoji to brokenHearts each time
  for (let i = 0; i < props.rating; i += 1) {
    brokenHearts += '💔';
  }

  // render the broken hearts!
  return (
    <p>{brokenHearts}</p>
  );
}

export default Rating;